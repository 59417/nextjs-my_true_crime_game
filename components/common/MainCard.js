import classes from './Card.module.scss';

export default function MainCrad ({ children }) {
    return <div className={classes.container} id={classes.main_container}>{children}</div>
};
