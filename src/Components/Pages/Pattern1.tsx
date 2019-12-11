import React, { useState, useEffect } from 'react'

/*This file consists of two different scenarios, the code that is currently running is scenario 1.
Another scenario is demonstrated as code commented out with the text scenario 2. This scenario demonstrates
the changes that are needed if we would initialize our state: count to null instead of 0 */

type Pattern1Props = {
    onCountSubmit: (value: number) => void;
    currentCount: number;
}

/* Scenario 2 */
/* We can utilize the union type: | in order to add null */
/*
type Pattern1Props = {
    onCountSubmit: (value: number | null) => void;
    currentCount: number;
}
*/

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

export const Pattern1 = (props: Pattern1Props) => {

    /* Hoovering count will show that Typescript is correctly inferring count to be of type number.
    Attempting to call setCount with an argument of a different type than number will not work*/
    const [count, setCount] = useState(0);
    
    /* scenario 2, if we initialize count to null */
    /* we can use a union type in order to add null */
    /*
    const [count, setCount] = useState<number | null>(null);
    */

    /* In scenario 2 if we would comment out useEffect 
    we would not see the initial value of 0 where count is printed out*/
    useEffect(() => {
        setCount(0)
    },[props.currentCount])

    /* scenario 2, we would need to add a conditional in order to handle the first increase */
    /*
    const handleIncrease = () => {
        if (count !== null) {
            setCount(count + 1)
        } else {
            setCount(1)
        }
    }
    */

    const handleIncrease = () => {
        setCount(count + 1)
    }

    console.log("rendered again")
    return (
        <React.Fragment>
            <section style={myStyle.infoText}>
                <h1>Our first demo of using state in a React function component</h1>
                <p>We can use the useState hook in order to give our function-based components component level state.
                    In this function-based component we declare a state variable, a function to change this variables value and specify its inital value.
                    Calling the function in order to change the state variables value will re-render the component.
                    A state variable can be a primitive value as well as an object and we are free to declare multiple state variables if we wish to do so.
                    We never declare state variables inside conditional statements, this will often cause undesirable effects.
                </p>
                <p>
                    In order to modify a components behaviour similarly to how we would use life-cycle methods in a class-based component we use the useEffect
                    hook. We will not cover all use-cases of the useEffect hook but three different behaviours will be demonstrated in this demo application.
                </p>
                <p>In this first pattern/example we are initializing our state variable: count to 0.
                    We then use the useEffect hook adding an array at the end consisting of props.currentCount, this limits the function to only run if props.currentCount changes.
                    The only time props.currentCount changes is when the entire component is re-rendered as a result of calling the updater function passed down from the parent.
                    When the updater function is called the parent will set its state and subsequently re-render this child component passing it the new updated value as props.currentCount.
                    The useEffects condition for running again is now fulfilled and will run its logic.
                    The function passed in as argument to the useEffect function will run and here we set the state: count back to 0 again through the setter function: setCount.
                    This in turn re-renders the component again with its internal state set to 0 but since props.currentCount does not change in this last re-render the useEffects function will not 
                    run again. If it did we would end up in an infinity loop of re-renders. 
                </p>
            </section>
            <p>Component level counter: {count}</p>
            <p>Counter passed down from our App state: {props.currentCount}</p>
            <button onClick={() => {handleIncrease()}}>increase</button>
            <button onClick={() => {props.onCountSubmit(count)}}>submit to parent</button>
        </React.Fragment>
    )
}