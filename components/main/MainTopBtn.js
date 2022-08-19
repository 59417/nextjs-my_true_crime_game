import Link from "next/link";
import classes from '../common/TopBtn.module.scss';

export default function MainTopBtn(props) {

    const helpHref = '/modal/help';
    const quitHref = '/modal/reset';

    const pass = new Object(props.currStates.pass);
    const allPass = !Object.keys(pass).map((key, idx) => pass[key]).includes(false);

    return (
        <div className={classes.container}>
            <Link href={`/main?modalReset=${quitHref}`} as={`/modal/reset`}>
                <button id={classes.main_quit}>Quit</button>
            </Link>
            {allPass ? (
                <Link href={`/coupon`}>
                    <button id={classes.main_coupon}>Coupons</button>
                </Link>
            ) : (
                <Link href={`/main?modalHelp=${helpHref}`} as={`/modal/help`}>
                    <button id={classes.main_help}>Help</button>
                </Link>
            )}
        </div>
    )
};