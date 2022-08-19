import Webcam from "react-webcam";
import { useCallback, useRef, useState, useEffect } from "react";
import classes from './MyWebcam.module.scss';

export default function MyWebcam(props) {

    const setIsTakingPhoto = props.setIsTakingPhoto;

    const [pass, setPass] = useState(0);

    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [facingMode, setFavingMode] = useState('environment');
    
    let videoConstraints = {
        width: {min: 414},
        height: {min: 621},
        aspectRatio: 2/3,
        facingMode: facingMode,
    };
    
    const capturePhoto = useCallback(async() => {
        const curImgSrc = await webcamRef.current.getScreenshot();
        setImgSrc(curImgSrc);
        setIsTakingPhoto(true);
    }, [webcamRef]);

    const handleTurn = () => {
        const isFace = facingMode==='user' ? 'environment' : 'user';
        setFavingMode(isFace);
    };

    const onUserMedia = (e) => {
        console.log(e);
    };

    useEffect(() => {
        const localStorageState = JSON.parse(localStorage.getItem("state"));
        const passNum = Object.values(localStorageState.pass).filter(ele=>ele===true);
        setPass(passNum);
        console.log('render', videoConstraints.facingMode);
    },[]);

    return (
        <div className={classes.content}>
            <div className={classes.photo}>
                <div id={classes.badges}>
                    {pass && pass.map((ele,idx) => (
                        <img key={idx} src="/badge.png" alt="badge" width="60px" height="60px" />
                    ))}
                </div>
                <div id={classes.hooray}>
                    {[1,2,3].map((ele) => (
                        <img key={ele} src="/celebration.png" alt="hooray" width="80px" height="80px" />
                    ))}
                </div>
                {!imgSrc ? (
                    // <div id={classes.webcam_wrapper}>
                        <Webcam
                            ref={webcamRef}
                            audio={false}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                            width={`100%`}
                            height={`100%`}
                            onUserMedia={onUserMedia}
                            mirrored={videoConstraints.facingMode==="user"}
                        />
                    // </div>
                ) : (
                    <div>
                        <img src={imgSrc} alt="Screenshot" />
                    </div>
                )}
            </div>
            <div className={classes.btn_wrapper}>
                {!imgSrc && (
                    <>
                        <button onClick={capturePhoto} id={classes.capture}>
                            <div id={classes.inner_circle}></div>
                        </button> 
                        <button onClick={handleTurn} id={classes.turn}>
                            <img src="/swap.png" alt="switch" width="36px" height="36px" />
                        </button> 
                    </>
                )}
                {imgSrc && (
                    <button onClick={() => {setImgSrc(null);setIsTakingPhoto(false);}} id={classes.retake} >Retake</button>
                )}
            </div>
        </div>
    );
};