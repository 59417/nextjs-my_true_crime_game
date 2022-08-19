import Webcam from "react-webcam";
import { useCallback, useRef, useState, useEffect } from "react";
import MyCanvas from "./MyCanvas";
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
        aspectRatio: 3/2,
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

    useEffect(() => {
        const localStorageState = JSON.parse(localStorage.getItem("state"));
        const passNum = Object.values(localStorageState.pass).filter(ele=>ele===true);
        setPass(passNum);
    },[]);

    return (
        <div className={classes.content}>

            {!imgSrc && (
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
                    <Webcam
                        ref={webcamRef} 
                        audio={false}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                        width={`100%`}
                        height={`100%`}
                        mirrored={videoConstraints.facingMode==="user"}
                    />
                </div>
            )}


            {/* <div className={classes.photo}>
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
                    <Webcam
                        ref={webcamRef} 
                        audio={false}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                        width={`100%`}
                        height={`100%`}
                        mirrored={videoConstraints.facingMode==="user"}
                    />
                ) : (
                    <div>
                        <img src={imgSrc} alt="Screenshot" />
                    </div>
                )}
            </div> */}


            {imgSrc && (
                <div className={classes.photo}>
                    <MyCanvas src={imgSrc} num={pass.length} />
                </div>
            )}

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