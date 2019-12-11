import React, { FunctionComponent } from 'react'
import { Link } from "react-router-dom";

interface NavProps {}
type NavProps2 = {}

const myStyle = {
        ul: {
            listStyleType: 'none',
            fontSize: '20px',
            backgroundColor: '#D3D3D3',
            padding: '20px'
        },
        li: {
            display: 'inline',
            margin: '10px'
        }
}

//export const Nav: FunctionComponent = props => { /* choosing FunctionComponent from the list will automatically import it in the top */
//export const Nav = () => { /* since we are not using props we could simply remove it */
//export const Nav = (props: any) => { /* we can use any */
//export const Nav = (props: {}) => { /* specifying that it is an Object */
//export const Nav = (props: NavProps) => { /* using interface */
export const Nav = (props: NavProps2) => { /* using type */

    return (
        <React.Fragment>
            <nav>
                <ul style={myStyle.ul}>
                    <li style={myStyle.li}>
                        <Link to={'/'}>Part 1</Link>
                    </li>
                    <li style={myStyle.li}>
                        <Link to={'/CCompDemo1'}>Class-comp-lifecycle</Link>
                    </li>
                    <li style={myStyle.li}>
                        <Link to={'/more-reuse'}>More reuse</Link>
                    </li>
                    <li style={myStyle.li}>
                        <Link to={'/pattern1'}>Func-comp-pattern-1</Link>
                    </li>
                    <li style={myStyle.li}>
                        <Link to={'/pattern2'}>Func-comp-pattern-2</Link>
                    </li>
                    <li style={myStyle.li}>
                        <Link to={'/pattern3'}>Func-comp-pattern-3</Link>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}