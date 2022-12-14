import { useRef, useEffect, useState } from 'react';


export default function MyCanvas (props) {
  
  const canvasRef = useRef(null);
  
  const num = props.num;
  const src = props.src;
  const [windowWidth, setWindowWidth] = useState(null);

  
  useEffect(() => {
    const currVW = window.innerWidth;
    setWindowWidth(currVW);

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const badgeImg = new Image();
    badgeImg.src = '/badge.png';
    const xStartA = (currVW - 60*num)/2;
    badgeImg.onload = () => {
      for (let i=0; i<num; i++) {
        context.drawImage(badgeImg, xStartA+60*i, 10, 60, 60);
      }
    };

    const hoorayImg = new Image();
    hoorayImg.src = '/celebration.png';
    const xStartB = (currVW - 96*3)/2;
    hoorayImg.onload = () => {
      for (let i=0; i<3; i++) {
        context.drawImage(hoorayImg, xStartB+96*i, currVW*1.5-60-80, 80, 80);
      }
    };

    const image = new Image();
    image.src = src;
    image.onload = () => {
      context.globalCompositeOperation = 'destination-over';
      context.drawImage(image, 0, 0, currVW, currVW*1.5);
      context.globalCompositeOperation = 'source-over';
    };
  }, []);
  
  return <canvas ref={canvasRef} width={windowWidth} height={windowWidth*1.5} {...props} />
};


