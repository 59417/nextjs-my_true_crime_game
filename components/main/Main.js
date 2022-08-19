import { Fragment, useEffect, useState } from "react";
import MainCrad from "../common/MainCard";
import MainTopBtn from "./MainTopBtn";
import MainContent from "./MainContent";

export default function Main(props) {
    
    const [states, setStates] = useState({});
    useEffect(() => { 
        const localStorageState = localStorage.getItem("state");
        setStates(JSON.parse(localStorageState));
    }, [ setStates, ]);


    const getStageHref = (id) => {
        const visited = new Object(states.visited);
        const isVisited = visited[id.toString()];
        const pass = new Object(states.pass);
        const allPass = !Object.keys(pass).map((key, idx) => pass[key]).includes(false);
        if (allPass) {
            return '/finale';
        } else if (isVisited) { 
            return states.pass[id.toString()] ? `/pass/${id}` : `/stage${id}`; 
        } else { 
            return `/modal/guide${id}`; 
        };
    };

    return (
        <Fragment>  
            <MainTopBtn currStates={states}/>
            <MainCrad>
                <MainContent getStageHref={getStageHref} passState={new Object(states.pass)}/>
            </MainCrad>
        </Fragment>
    )
};