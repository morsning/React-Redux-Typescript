import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

/* since Typescript checks for excess properties this would not work */
/*
interface StyleType05 {
    position: "fixed";
}

const myStyle: StyleType05 = {
    position: 'fixed',
    top: '5px',
    right: '15px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #808080',
    boxShadow: '10px 5px 5px #808080',
    padding: '5px',
    maxWidth: '20%' 
}
*/

/* This solution can be considered to verbose */
/*
type StyleType1 = {
    position: "fixed",
    top: string,
    right: string,
    backgroundColor: string,
    border: string,
    boxShadow: string,
    padding: string,
    maxWidth: string 
}

const myStyle: StyleType1 = {
    position: 'fixed',
    top: '5px',
    right: '15px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #808080',
    boxShadow: '10px 5px 5px #808080',
    padding: '5px',
    maxWidth: '20%' 
}
*/

/* We can use type assertion (We tell the compiler to trust our judgement) */
 
/*
type StyleType2 = {position: "fixed"}

const myStyle = {
    position: 'fixed',
    top: '5px',
    right: '15px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #808080',
    boxShadow: '10px 5px 5px #808080',
    padding: '5px',
    maxWidth: '20%' 
} as StyleType2
*/

/* or this way: */

/*
const myStyle = {
    position: 'fixed' as "fixed",
    top: '5px',
    right: '15px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #808080',
    boxShadow: '10px 5px 5px #808080',
    padding: '5px',
    maxWidth: '20%' 
}
*/


/* Another solution is to add a: string index signature. Here we are saying that StyleType5
 can have any number of additional properties, and we don't care about their types  */

interface StyleType3 {
    position: "fixed";
    [propName: string]: any
}

const myStyle: StyleType3 = {
    position: 'fixed',
    top: '5px',
    right: '15px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #808080',
    boxShadow: '10px 5px 5px #808080',
    padding: '5px',
    maxWidth: '20%' 
}

type AppStateRedux = {
    textInputReducer: {someValue: string}
    countReducer: {count: number}
}

export const StateDisplay = (props: any) => {

    const count2 = useSelector((state: AppStateRedux) => state.countReducer.count)
    const value2 = useSelector((state: AppStateRedux) => state.textInputReducer.someValue)

    return (
        <React.Fragment>
            <article style={myStyle}>
                <h3 style={{color: '#FF007F'}}>Current Application state:</h3>
                <p>state without using Redux:</p>
                <ul>
                    <li>inputLab: {props.stats.inputLab}</li>
                    <li>inputLab 2: {props.stats.inputLab2}</li>
                    <li>inputLab 3: {props.stats.inputLab3}</li>
                    <li>func-comp-pattern: {props.stats.about}</li>
                </ul>
                <p>state managed through Redux:</p>
                <ul>
                    <li>inputLab: {value2}</li>
                    <li>func-comp-pattern: {count2}</li>
                </ul>
            </article>
        </React.Fragment>
    )
}