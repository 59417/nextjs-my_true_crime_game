import { useEffect, useState } from "react";

export default function TestBtn (props) {

    const setTestState = props.setTestState;
    
    const ids = [1,2,3,4];
    const testStates1 = { 
        visited: Object.fromEntries(ids.map(ele => [ele, true])),
        hint: Object.fromEntries(ids.map(ele => [ele, { 1: true, 2: true, 3: true }])),
        pass: Object.fromEntries(ids.map(ele => [ele, false])),
    };
    const testStates2 = { 
        visited: Object.fromEntries(ids.map(ele => [ele, true])),
        hint: Object.fromEntries(ids.map(ele => [ele, { 1: true, 2: true, 3: true }])),
        pass: Object.fromEntries(ids.map(ele => [ele, true])),
    };
    const testStates3 = { 
        visited: Object.fromEntries(ids.map(ele => [ele, true])),
        hint: Object.fromEntries(ids.map(ele => [ele, { 1: true, 2: true, 3: true }])),
        pass: Object.fromEntries(ids.map(ele => [ele, true])),
    };
    testStates3.pass[4] = false;
    const testStates4 = { 
        visited: Object.fromEntries(ids.map(ele => [ele, false])),
        hint: Object.fromEntries(ids.map(ele => [ele, { 1: false, 2: false, 3: false }])),
        pass: Object.fromEntries(ids.map(ele => [ele, false])),
    };

    const handleBtn1 = () => {
        localStorage.setItem("state", JSON.stringify(testStates1));
        setTestState(testStates1);
    };
    const handleBtn2 = () => {
        localStorage.setItem("state", JSON.stringify(testStates2));
        setTestState(testStates2);
    };
    const handleBtn3 = () => {
        localStorage.setItem("state", JSON.stringify(testStates3));
        setTestState(testStates3);
    };
    const handleBtn4 = () => {
        localStorage.setItem("state", JSON.stringify(testStates4));
        setTestState(testStates4);
    };

    const getBtnStyle = () => {
        return {
            fontSize: '0.5rem',
            backgroundColor: 'grey',
            color: 'dark',
        }
    };

    return (
        <div
            style={{
                margin: '2rem',
                backgroundColor: 'dark',
                color: 'white',
                display: 'flex'
            }}
        >
            <button onClick={handleBtn1} style={getBtnStyle()}>All checked</button>
            <button onClick={handleBtn2} style={getBtnStyle()}>All pass</button>
            <button onClick={handleBtn3} style={getBtnStyle()}>3/4 pass</button>
            <button onClick={handleBtn4} style={getBtnStyle()}>resume</button>
        </div>
    )
};