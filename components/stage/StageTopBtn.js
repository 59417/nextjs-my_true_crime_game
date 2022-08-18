import Link from "next/link";
import classes from '../common/TopBtn.module.scss';

export default function StageTopBtn (props) {

    const stageId = props.stageId;

    return (
        <div className={classes.container}>
            <Link href='/main'>
                <button id={classes.stage_back}>
                    Back
                </button>
            </Link>
            <Link href={`/modal/guide${stageId}`}>
                <button id={classes.stage_guide}>
                    Guide
                </button>
            </Link>
        </div>
    )
};