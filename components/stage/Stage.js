import { Fragment } from 'react';
import StageCard from '../common/StageCard';
import StageTopBtn from './StageTopBtn';
import StageContent from './StageContent';
import HintBtns from './hint/HintBtns';


export default function Stage(props) {

    const id = props.stageId;
    return (
        <Fragment>
            <StageTopBtn stageId={id} />
            <StageCard>
                <StageContent stageId={id}/>
                <HintBtns stageId={id} />
            </StageCard>            
        </Fragment>
    )
};