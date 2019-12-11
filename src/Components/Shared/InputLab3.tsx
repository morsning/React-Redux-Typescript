import React, { SyntheticEvent } from 'react'

/*type InputLabProps = {
    onInputSubmit: (value: string) => void;
    currentInputValue: string;
}*/
/*

/* We could also define the children prop, this first one does not accept functions */
/*
type InputLabProps = {
    onInputSubmit: (value: string) => void;
    currentInputValue: string;
    children: JSX.Element | JSX.Element[]
}
*/

/* This one accepts everything */
type InputLabProps = {
    onInputSubmit: (value: string) => void;
    currentInputValue: string;
    children: React.ReactNode
}

type InputLabState = {
    someValue: string;
}

class InputLab3 extends React.Component<InputLabProps, InputLabState> {

    state = {
        someValue: ''
    }

    componentDidMount() {
        this.setState({someValue: this.props.currentInputValue})
    }

    handleFormSubmit(event: SyntheticEvent) {
        event.preventDefault();
        this.props.onInputSubmit(this.state.someValue)
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={event => this.handleFormSubmit(event)}>
                    <input 
                        type="text" 
                        value={this.state.someValue}
                        placeholder="enter some text"
                        onChange={e => this.setState({someValue: e.target.value})}
                    />
                    <input type="submit" value="Submit" />
                </form>
                {this.props.children}
                <p>{this.state.someValue}</p>
            </React.Fragment>
        )
    }
}

export default InputLab3