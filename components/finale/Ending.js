import classes from '../common/Phase.module.scss';


export default function Ending(props) {

    const setPage = props.setPage;
    const handleNext = () => {
        setPage(2);
    }
    return (
        <div className={classes.content}>
            <h1>Story</h1>
            <p>
                Now you have four important criminal profiling records 
                that can help Detective Smart be able to refer to them 
                and make a criminal profile of these murders in town.
                This criminal profile successfully help the sheriff 
                send the right person to jail. Thanks a lot!!
            </p>
            <button onClick={handleNext}>Next</button>
        </div>
    )
};