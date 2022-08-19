import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import classes from './Content.module.scss';
import { ansData } from '../data/ans';


export default function StageContent(props) {
    
    const id = props.stageId;
    const s = ['A','B','C','D'];
    
    const [answer, setAnswer] = useState(null);
    const answerArr = ansData.find(obj => obj.stageId === id).ans;
    const photoSrc = ansData.find(obj => obj.stageId === id).photo;

    const router = useRouter();
    const { register, handleSubmit } = useForm();

    const myHandleSubmit = (data) => { 
        let userAns = data.answer.replace(/\s/g, '').toUpperCase();
        if (userAns.slice(0,3) === 'THE') {
            userAns = userAns.slice(3,);
        };
        if (answerArr.includes(userAns)) {
            router.push(`/pass/${id}`);
        } else {
            router.push('/modal/wrong');        
        };
        setAnswer(data);
    };

    return (
        <form onSubmit={handleSubmit(myHandleSubmit)} className={classes.container}>
            <h1 className={classes.title}>
                Mission {s[id-1]}: Find out
                <br/>who&#39;s this killer!
            </h1>
            <div className={classes.content_wrapper}>
                <div className={classes.content} id={classes.stage_content} >
                    <div className={classes.img_wrapper} id={classes.stage_img_wrapper}>
                        <Image 
                            src={photoSrc}
                            alt='criminal'
                            objectFit="cover"
                            layout='fill'
                        />
                    </div>
                    <input 
                        {...register("answer", { required: true })} 
                        type="text" 
                        placeholder={` Answer here`}
                    />
                    <button type="submit" id={classes.stage_btn} >Submit</button>
                </div>
            </div>
        </form>
    )
};