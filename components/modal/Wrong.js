import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import classes from './modal.module.scss';

export default function Wrong(props) {

    const router = useRouter();
    const handleClose = () => {
        router.back();
    };

    return (
        <div className={classes.container}>
            <h1>OOPS!<br/>WRONG ANSWER :&#40;</h1>
            <div className={classes.img_wrapper}>
                <Image
                    src='/crime-scene.png'
                    alt='wrong'
                    height={150}
                    width={150}
                />
            </div>
            <h2>Please try again!</h2>
            <p>
                <Image src='/warning.png' alt='attention' width={14} height={14} />
                &ensp;Enter the correct spelling <br/>of the killer&#39;s name/alias plz
            </p>
            <button onClick={handleClose}>Close</button>
        </div>
    )
};