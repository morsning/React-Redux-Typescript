/**************************************************************************
* This is a HOC - (Higher Order Component) function, which can be used in order  
* to enhance a component with additional functionality related to coloring a border
* in response to a componenents lifecycle-event componentDidUpdate. 
* A HOC is simply a pattern where we define a function which takes a component as an argument
* And enhances it with functionality that we might want to re-use and returns the enhanced version.
* The Component we pass in will now become a customized component where we utilize this added 
* functionality in addition to its original functionality. 
***************************************************************************/

import React, { ComponentType } from 'react'

/* In this example P stands for Props, ComponentType<P> describes the component being passed in 
as being either a class or a function component */

function WithColorEnhancement<P> (WrappedComponent: ComponentType<P>) {

    class HOC extends React.Component<P> {

        genRandomColor = () => {
            let r = Math.floor(Math.random() * 256)
            let g = Math.floor(Math.random() * 256)
            let b = Math.floor(Math.random() * 256)
            return `rgb(${r}, ${g}, ${b})`
        }

        genStyleObj = () => {
            return {padding: '5px', border: '2px solid', borderColor: this.genRandomColor()}
        }

        componentDidUpdate() {
            //might want to use this componentDidUpdate....
        }
        
        render() {

            return (
                <WrappedComponent
                    colors={this.genStyleObj}
                    {...this.props as P}
                />
            )
        }
    }

    return HOC
}

export default WithColorEnhancement