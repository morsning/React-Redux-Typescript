import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseActionCreator, decreaseActionCreator } from '../../ReduxState/Actions'

type Pattern2Props = {
    onCountSubmit: (value: number) => void;
    currentCount: number;
}

type AppStateRedux = {
    textInputReducer: {someValue: string}
    countReducer: {count: number}
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

export const Pattern2 = (props: Pattern2Props) => {

    const [count, setCount] = useState(props.currentCount);

    const count2 = useSelector((state: AppStateRedux) => state.countReducer.count)
    const dispatch = useDispatch()

    const demoReduxInc = () => {
        dispatch(increaseActionCreator(count))
    }

    const demoReduxDec = () => {
        dispatch(decreaseActionCreator(count))
    }

    const handleIncrease = () => {
        setCount(count + 1)
    }

    console.log("rendered again")
    return (
        <>
            <section style={myStyle.infoText}></section>
            <section style={myStyle.infoText}>
                <h1>In this demo/pattern we are not using the useEffect hook at all</h1>
                <p>we do however set the initial value of our state variable: count to be props.currentCount.
                    The behaviour of this pattern makes the internal state: count remain the same even after we submit the 
                    internal value to the parent through the updater function.
                    Even though this child component re-renders as an effect of the parent setting its state this component
                    is still mounted and its state remains the same.
                    If we however browse to a different page of our demo application and back again the state: count will be
                    initialized with the value of application level state through props.currentCount.
                </p>
            </section>
            <p>Component level counter: {count}</p>
            <p>Counter passed down from our App state: {props.currentCount}</p>
            <button onClick={() => {handleIncrease()}}>increase</button>
            <button onClick={() => {props.onCountSubmit(count)}}>submit to parent</button>
            <section style={myStyle.infoText}>
                <h1>Here we demonstrate how we can submit the current count to change our redux state</h1>
                <p>The increase button will increase our redux state "slice" by the current amount, the decrease button will do the same but negated.</p>
            </section>
            <button onClick={demoReduxInc}>dispatch increase to redux</button>
            <button onClick={demoReduxDec}>dispatch decrease to redux</button>
        </>
    )
}