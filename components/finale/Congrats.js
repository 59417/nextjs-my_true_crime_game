import { useRouter } from "next/router";
import classes from '../common/Phase.module.scss';


export default function Congrats() {

    const router = useRouter();
    const handleNext = () => {
        router.push('/coupon');
    }
    return (
        <div className={classes.content}>
            <h1>Congratulation!!!</h1>
            <img 
                width='300px'
                src="https://images.unsplash.com/photo-1502214722586-9c0a74759710?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80" 
                alt="celebrate"
                id={classes.congrats_img}
            />
            <p id={classes.congrats_p}>Here we have some prizes for you!</p>
            <button onClick={handleNext}>Next</button>
        </div>
    )
};