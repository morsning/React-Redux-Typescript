import React from 'react'
import InputLab from '../Shared/InputLab'
//import WInputLabColor from '../Shared/InputLabColor'
import InputLabColor from '../Shared/InputLabColor'
import InputLabColor2 from '../Shared/InputLabColor2'
import WithColorEnhancement from '../../HOCFunctions/WithColorEnhancement'
import { ColorEnhanced, IRenderPropsObj } from '../UsingRenderProps/ColorEnhanced'

type AppState = {
    count: number
}

const InputLabColorWithCE = WithColorEnhancement(InputLabColor)

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

export const Home = (props: any) => {

    return (
        <React.Fragment>
            <section style={myStyle.infoText}>
            <h1>State, class components, Higher-Order components and components using Render Props</h1>
            <p>This section covers examples of how state can live at different levels in a component
                hierarchy, defining and using state locally within a component is commonly referred to as component level state.
                React uses one-way data binding in contrast to the two-way data binding utilized by similar frameworks such as VUE or Angular.
                What this means practically is that the standard way of thinking in React is that data flows one way.
                In order to pass down data from a parent to a child component we use something referred to as props. This data might for instance be part of the parents components state.
                If the parent component is the top or one of the top level components in our component hierarchy aka tree, we sometimes referr to its state as our application level state.
                Passing down state through props gives the receiving component the posibility to use this data when rendering what will eventually appear in the browser.
            </p>
            <p>
                However as mentioned above React utilizes the concept of one-way data binding, and this means that the props passed down are read-only.
                In order to change the state of a component higher up in the component hierarchy we either define an updater function within the component with the state we which to update, 
                and subsequently pass this updater-function down as a prop. This updater-function can then be called with whatever argument it supports through its definition.
                The updater-function will then typically update the state of the component in which it is defined.
                As a result we would sometimes need to pass our props several layers down in order to access and/or update state from a component far down in the tree.
                There are several patterns and state-management libraries that can be used to avoid this and several of them will be covered throughout our workshops.
            </p>
            </section>
            <section style={myStyle.examples}>
                <p>In order to change state in a component higher up in the hierarchy we can use an updater function passed down through a prop</p>
                <InputLab onInputSubmit={props.onInputSubmit}/>
            </section>
            <section style={myStyle.infoText}>
                <h4>Higher Order Components and component using Render Props</h4>
                <p>
                    Being able to re-use the same code with multiple components can be both time efficient and increase the overall readabilty and quality of our code.
                    We will demonstrate two of the most popular pattens used to achieve this starting with the Higher Order Component pattern.
                </p>
            </section>
            <section style={myStyle.examples}>
                <p>
                    Example demonstrating the HOC-pattern
                </p>
                <InputLabColorWithCE onInputSubmit={props.onInputSubmit}/>
            </section>
            <section style={myStyle.examples}>
                <p>
                    Example demonstrating the Render Props pattern
                </p>
                <ColorEnhanced render={(someObj: IRenderPropsObj) => <InputLabColor colors={someObj.colors} onInputSubmit={props.onInputSubmit}/>} />
            </section>
            <section style={myStyle.examples}>
                <p>The render props pattern demonstrated above can be improved further.
                    Our ColorEnhanced component utilizing the concept of render props can supply multiple functions for us to use.
                    Inside this component the function we choose to pass as our render prop can be invoked with whatever argument we which to pass.
                    In this case we are passing an argument which is an Object consisting of two properties referencing two different but similar functions.
                    When using this component in order to render the component we which to enhance we can destructure the property we are interested in and pass that reference to our colors prop.
                    Here we are passing a reference to a function that in contrast to the function passed above gives us a larger border.
                </p>
                <ColorEnhanced render={(someObj: IRenderPropsObj) => <InputLabColor colors={someObj.colorsBB} onInputSubmit={props.onInputSubmit}/>} />
            </section>
            <section style={myStyle.examples}>
                <p>
                    Example of a slightly different component re-using the same logic through the Render Props pattern.
                </p>
                <ColorEnhanced render={(someObj: IRenderPropsObj) => <InputLabColor2 colors={someObj.colors} onInputSubmit={props.onInputSubmit}/>} />
            </section>
        </React.Fragment>
    )
}