import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import classes from './MainContent.module.scss';
import { ansData } from "../data/ans";


export default function MainContent (props) {

    const getStageHref = props.getStageHref;
    const passState = props.passState;

    const s = ['A','B','C','D'];

    return (
        <Fragment>
            <h1 className={classes.title}>Missions</h1>
            {[1,2].map(ele => (
                <div className={classes.btn_group} key={ele}>
                    {[1,0].map(ele2 => (
                        <Link href={getStageHref(ele*2-ele2)} key={ele2}>
                            <div className={classes.content}>
                                <div className={classes.img_wrapper}>
                                    {!passState[ele*2-ele2] ? (
                                        <>
                                            <Image src='/bandit.png' alt='who' width={100} height={100} />
                                            <div className={classes.unsolved_wrapper}>
                                                <Image src='/interrogation-mark.png' alt='unsolved' width={35} height={35} />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <Image 
                                                src={ansData.find(obj=>obj.stageId===ele*2-ele2).photo} 
                                                alt='criminal' objectFit="cover" layout='fill' 
                                            />
                                            <div className={classes.solved_wrapper}>
                                                <Image src='/checked.png' alt='solved' width={50} height={50} />
                                            </div>
                                        </>
                                    )}
                                </div>
                                <p>{!passState[ele*2-ele2] ? `Mission ${s[ele*2-ele2-1]}` : `Sloved`}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            ))}
        </Fragment>
    )
};