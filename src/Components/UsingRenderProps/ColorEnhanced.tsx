/**************************************************************************
* This component demonstrates the render props pattern, it resembles the HOC called WithColorEnhancement  
* found in this same project in the directory: HOCFunctions
* Both the HOC pattern and Render props pattern used in this component solves the problem of code-reuse,
* When to choose one over the other is a matter of opinion.
***************************************************************************/

import React from 'react'

export interface IRenderPropsObj {
    colors: () => {};
    colorsBB: () => {}; 
}

interface RenderProp {
    render: ({}: IRenderPropsObj) => JSX.Element;
}

export const ColorEnhanced = (props: RenderProp) => {

    const genRandomColor = () => {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        return `rgb(${r}, ${g}, ${b})`
    }

    const genStyleObj = () => {
        return {padding: '5px', border: '2px solid', borderColor: genRandomColor()}
    }

    const genStyleObjV2 = () => {
        return {padding: '5px', border: '10px solid', borderColor: genRandomColor()}
    }

    return (
        props.render({colors: genStyleObj, colorsBB: genStyleObjV2})
    )
}