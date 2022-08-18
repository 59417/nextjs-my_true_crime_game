import { Fragment } from 'react';
import StageTopBtn from '../StageTopBtn';
import StageCard from '../../common/StageCard';
import HintContent from './HintContent';
import HintBtns from './HintBtns';

export default function Hint (props) {
    const { stageId, hintId } = { ...props };
    return (
        <Fragment>
            <StageTopBtn stageId={stageId} />
            <StageCard>
                <HintContent stageId={stageId} hintId={hintId} />
                <HintBtns stageId={stageId} hintId={hintId} />
            </StageCard>
        </Fragment>
    );
};