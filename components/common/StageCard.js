import classes from './Card.module.scss';

export default function StageCard ({ children }) {
    return <div className={classes.container} id={classes.stage_container}>{children}</div>
};
