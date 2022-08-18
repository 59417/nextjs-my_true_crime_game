import { Fragment, useState } from 'react';
import Ending from "./Ending";
import Congrats from "./Congrats";

export default function Finale() {

    const [page, setPage] = useState(1);

    return (
        <Fragment>
            { page===1 ? <Ending setPage={setPage}/> : <Congrats /> }
        </Fragment>
    )
};