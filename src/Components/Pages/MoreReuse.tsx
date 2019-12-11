import React from 'react'
import InputLab2 from '../Shared/InputLab2'
import InputLab3 from '../Shared/InputLab3'

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

export const MoreReuse = (props: any) => {

    return (
        <React.Fragment>
            <section style={myStyle.infoText}>
                <h1>Let's refactor</h1>
                <p>
                    If you inspect the code of the page CCompLifeCycle.js located in the folder: src/Components/Pages we have a lot of redundant code,
                    Most of the code is the same as in our shared component InputLab.js located in: src/Components/Shared
                    We have previously seen how we can share and re-use code between React components with the Render Props as well as the HOC patterns.
                    In addition to using these patterns, understanding and using life-cycle methods can also help us write more dynamic and re-usable code.
                    Refactoring the shared component InputLab into InputLab2.js found in the same folder through adding the life-cycle method componentDidMount will demonstrate
                    how we can re-use the same component and alter its behaviour conforming two our two demonstrations.
                </p>
                <p>
                    This page imports and uses our new improved InputLab2 component and the examples bellow demonstrates how we can make our component more dynamic and 
                    re-usable.
                </p>
            </section>
            <section style={myStyle.examples}>
                <p>This example mimics the behaviour of our Page 1 first example. Even though we have access to the current value of our application level state for this particular field,
                    we can simply choose to ignore it and instead of passing this state to our component we pass an empty string.
                </p>
                <InputLab2 currentInputValue={''} onInputSubmit={props.onInputSubmit}/>
            </section>
            <section style={myStyle.examples}>
                <p>Here we are instead choosing to pass down the applicaiton state</p>
                <InputLab2 currentInputValue={props.currentInputValue} onInputSubmit={props.onInputSubmit}/>
            </section>
            <section style={myStyle.infoText}>
                <h4>Before moving on this final example demonstrates the last pattern we will cover in regards to creating dynamic re-usable components</h4>
                <p>Instead of closing our component tag directly we can create an opening tag and a closing tag of our component and put something in between
                    What we choose to put between the opening and closing tag can then subsequently be accessed from within the component through the syntax: props.children
                </p>
            </section>
            <section style={myStyle.examples}>
                <p>We have now refactored inputlab2.js into inputlab3.js where we have removed the static text: (Component level state:)
                    This part of the component is now replaced with this.props.children which means we are free to send in whatever we choose.
                    In this case we are passing in a p-element containing the text: This new even more dynamic awesome components state is:
                    As well as a list of the three top ranked sci-fi series ever produced... according to me..
                </p>
                <InputLab3 currentInputValue={props.currentInputValue} onInputSubmit={props.onInputSubmit}>
                    <p>This new even more dynamic awesome components state is: </p>
                    <p>But first a list of my top 3 sci-fi series...</p>
                    <ul>
                        <li>
                            Battlestar Galactica
                        </li>
                        <li>
                            The Expanse
                        </li>
                        <li>
                            Firefly
                        </li>
                    </ul>
                </InputLab3>
            </section>
        </React.Fragment>
    )
}