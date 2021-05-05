// import React, { Component } from 'react';

import { useContext, useState } from "react";
import appContext from "../contexts/appContext";
import Mode from "./Mode";


const Counter = (props) => {
    //limitiert
    //
    const [count, setCount] = useState(0)
    //const [isLight, changeIsLight] = useState(true)

    //count=0
    //with incrementCount I can change the count state
    //console.log(useContext(appContext).message)
    const { message, colors } = useContext(appContext)
    return (
        <section style={{ backgroundColor: props.isLight ? colors.light : colors.dark, color: props.isLight ? colors.dark : colors.light }}>
            <button onClick={() => setCount(count - 1)}>Decrement by 1</button>
            {count}
            <button onClick={() => setCount(count + 1)}>Increment by 1</button>
            <Mode changeIsLight={props.changeIsLight} isLight={props.isLight} />
            <h1>{message}</h1>
        </section>
    );
}

export default Counter;