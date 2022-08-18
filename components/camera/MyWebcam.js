import Webcam from "react-webcam";
import { useCallback, useRef, useState, useEffect } from "react";
import classes from './MyWebcam.module.scss';

export default function MyWebcam(props) {

    const setIsTakingPhoto = props.setIsTakingPhoto;

    const [pass, setPass] = useState(0);

    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [facingMode, setFavingMode] = useState('environment');
    
    const videoConstraints = {
        width: { min: 480 },
        height: { min: 420 },
        aspectRatio: 2/3,
        facingMode: "environment" || "face",
    };
    
    const capturePhoto = useCallback(async() => {
        console.log('Capturing...');
        const curImgSrc = await webcamRef.current.getScreenshot();
        setImgSrc(curImgSrc);
        setIsTakingPhoto(true);
    }, [webcamRef]);

    const handleTurn = () => {
        const isFace = facingMode==='face' ? 'environment' : 'face';
        setFavingMode(isFace);
        videoConstraints.facingMode = isFace;
    };

    const onUserMedia = (e) => {
        console.log(e);
    };

    useEffect(() => {
        const localStorageState = JSON.parse(localStorage.getItem("state"));
        const passNum = Object.values(localStorageState.pass).filter(ele=>ele===true);
        setPass(passNum);
    },[facingMode]);

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
                    <div id={classes.webcam_wrapper}>
                        <Webcam
                            ref={webcamRef}
                            audio={false}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                            onUserMedia={onUserMedia}
                            mirrored={facingMode==="face"}
                        />
                    </div>
                ) : (
                    <div>
                        <img src={imgSrc} alt="Screenshot" id="screenshot" />
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