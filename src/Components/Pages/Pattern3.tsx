import React, { useState, useEffect } from 'react'

type Pattern3Props = {
    onCountSubmit: (value: number) => void;
    currentCount: number;
}

const myStyle = {
    examples: { 
        border: '2px solid black',
        padding: '20px',
        marginBottom: '10px'
    },
    infoText: {
        maxWidth: '70%' 
    }
}

export const Pattern3 = (props: Pattern3Props) => {

    const [count, setCount] = useState(props.currentCount);
    
    useEffect(() => {
        setCount(props.currentCount)
    },[props.currentCount])


    const handleIncrease = () => {
        setCount(count + 1)
    }

    console.log("rendered again")
    return (
        <React.Fragment>
            <section style={myStyle.infoText}>
                <h1>A final example/demo/pattern of the useState and useEffect hook</h1>
                <p>
                    This example is similar to pattern 1, but instead of setting the internal state: count to 0 when props.currentCount changes
                    we set the internal state count to the value of props.currentCount.
                </p>
            </section>
            <p>Component level counter: {count}</p>
            <p>Counter passed down from our App state: {props.currentCount}</p>
            <button onClick={() => {handleIncrease()}}>increase</button>
            <button onClick={() => {props.onCountSubmit(count)}}>submit to parent</button>
        </React.Fragment>
    )
}