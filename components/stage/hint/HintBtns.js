import classes from './HintBtns.module.scss';
import Link from 'next/link';

export default function HintBtns (props) {

    const stageId = props.stageId;
    const hintId = props.hintId;

    const getStyle = (id) => {
        if (hintId && id===hintId) {
            return {backgroundColor:'coral',color:'white',fontWeight:700}
        } else {
            return null
        }
    };

    return (
        <div className={classes.btn_wrapper}>
            {[1,2,3].map(ele => (
                <Link href={`/hint/${stageId}/${ele}`} key={ele}>
                    <button style={getStyle(ele)}>Clue<br/>&ensp;{ele}</button>
                </Link>
            ))}
        </div>
    )
};