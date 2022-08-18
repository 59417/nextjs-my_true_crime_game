import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import classes from './Nickname.module.scss';

export default function Nickname() {
    const termsHref = "https://www.termsfeed.com/public/uploads/2021/12/sample-terms-of-service-template.pdf";
    
    const router = useRouter();

    const { register, handleSubmit } = useForm();

    const myHandleSubmit = (data) => { 
        const nickname = data.nickname;
        localStorage.setItem("nickname", nickname);
        router.push('/intro1');
    };


    return (
        <form onSubmit={handleSubmit(myHandleSubmit)} >
            <div className={classes.content}>
                <h1>Enter your nickname</h1>
                <input 
                    type="text" 
                    {...register("nickname", { required: true })} 
                    id={classes.nickname_input}
                />
                <div id={classes.agree}>
                    <div>
                        <input 
                            type="checkbox" 
                            {...register("terms", { required: true })} 
                            id={classes.checkbox}
                        />
                    </div>
                    <div>
                        <label htmlFor="agree" >
                            I have read and agree to 
                            <br/>the&ensp;
                            <Link href={termsHref} passHref>
                                <a target="_blank" rel="noopener noreferrer" >
                                    terms and conditions
                                </a>
                            </Link>
                        </label>
                    </div>
                </div>
            </div>
            <div className={classes.btn_wrapper}>
                <button type="submit">Next</button>
            </div>
        </form>
    )
};