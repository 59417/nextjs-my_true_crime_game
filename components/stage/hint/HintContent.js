import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import classes from '../Content.module.scss';
import { hintData } from '../../data/hint';

export default function HintContent (props) {

    const { stageId, hintId } = { ...props };
    const s = ['A','B','C','D'];
    const currHintData = hintData[stageId-1].hints[hintId-1];
    const src = `https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/06/01/Pictures/_5cb9e35e-a3d6-11ea-86c3-c49c142691bb.JPG`;

    const router = useRouter();

    const [states, setStates] = useState(null);
    const [hintShown, setHintShown] = useState(false);

    const handleYes = () => {
        const obj = JSON.parse(JSON.stringify(states));
        obj.hint[stageId.toString()][hintId.toString()] = true;
        localStorage.setItem("state", JSON.stringify(obj));
        setHintShown(true);
    };

    useEffect(() => { 
        const localStorageState = JSON.parse(localStorage.getItem("state"));
        setStates(localStorageState);
        const hintCheck = localStorageState.hint[stageId.toString()][hintId.toString()];
        setHintShown(hintCheck);
    }, [hintId]);

    return (
        <div className={classes.container} id={classes.hint_container} >
            <h1 className={classes.title}>
                Mission {s[stageId-1]} 
                <br/>- Clue{hintId} -
            </h1>
            <div className={classes.content_wrapper} id={classes.hint_content_wrapper} >

                {!hintShown ? (
                    <div className={classes.content} >
                        {hintId===3 && (
                            <p id={classes.hint_spoiler_p}>Spoiler Alert!
                                <br/>Clue 3 will reveal the answer!
                            </p>
                        )}
                        {hintId===3 && (
                            <div className={classes.img_wrapper} id={classes.hint_spoiler_wrapper}>
                                <Image 
                                    src={src}
                                    alt="spoiler"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        )}
                        
                        <p id={classes.hint_alert_p}>
                            Are you sure 
                            <br/>you want to 
                            <br/>read the tips?
                        </p>
                    </div>
                ) : (
                    <div className={classes.content} >
                        {currHintData.imgSrc ? (
                            <div className={classes.img_wrapper}>
                                <Image 
                                    src={currHintData.imgSrc}
                                    alt='criminal'
                                    width={currHintData.imgWidth}
                                    height={currHintData.imgHeight}
                                />
                            </div>
                        ) : null}
                        <p id={classes.hint_text_p}>{currHintData.content}</p>
                    </div>
                )}

                {!hintShown ? (
                    <div className={classes.btn_wrapper}>
                        <button id={classes.no} onClick={() => router.push(`/stage${stageId}`)}>No</button>
                        <button id={classes.yes} onClick={handleYes}>Yes</button>
                    </div>
                ) : (
                    <button type="button" onClick={()=>router.push(`/stage${stageId}`)}>Close</button>
                )}

            </div>
        </div>
    )
};