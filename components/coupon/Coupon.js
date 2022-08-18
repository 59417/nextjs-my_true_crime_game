import { useRouter } from "next/router";
import { Fragment } from 'react';
import classes from '../common/Phase.module.scss';


const imgs = [
    "https://tinkeringlabs.com/wp-content/uploads/2018/12/Artboard-1tinkeringlabs-10CATALYST.png",
    "https://media.karousell.com/media/photos/products/2020/10/18/starbucks_coupon_1603027327_337f5c31_progressive.jpg",
    "https://play-lh.googleusercontent.com/ZEAQFpAh3_jJwdt6tJTO3CKgOelYEeO7Gk3LbN7kK9j51f2rHV942bDe21UzVZ92lZg=w1400-h720",
]

export default function Coupon() {

    const router = useRouter();
    const handleBack = () => {
        router.push('/main');
    }
    return (
        <Fragment>
            <button onClick={handleBack} id={classes.coupon_back}>Back</button>
            <div className={classes.content}>
                <h1>My Coupons</h1>
                <div className={classes.img_wrapper}>
                    {imgs.map((ele,idx) => (
                        <img key={idx} width='250px' src={ele} alt="coupon" />
                    ))}
                </div>
            </div>
        </Fragment>
    )
};