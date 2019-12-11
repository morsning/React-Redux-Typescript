import React, { SyntheticEvent, FormEvent } from 'react'

type InputLabProps = {
    onInputSubmit: (value: string) => void;
    colors?: () => {};
}

type InputLabState = {
    someValue: string;
    dynamicStyle: {};
}

class InputLabColor extends React.Component<InputLabProps, InputLabState>  {

    state = {
        someValue: '',
        dynamicStyle: {}
    }

    componentDidUpdate() {
        if (this.props.colors) {
            console.log(this.props.colors())
        }
    }

    handleFormSubmit(event: SyntheticEvent) {
        event.preventDefault();
        this.props.onInputSubmit(this.state.someValue)
    }

    handleChange = (e: FormEvent<HTMLInputElement>): void => {
        if (this.props.colors) {
            this.setState({someValue: e.currentTarget.value, dynamicStyle: this.props.colors()})
        } else {
            this.setState({someValue: e.currentTarget.value})
        }
    }

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div style={this.state.dynamicStyle}>
                <form onSubmit={event => this.handleFormSubmit(event)}>
                    <input 
                        type="text" 
                        value={this.state.someValue}
                        placeholder="enter some text"
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
                <p>Component level state:</p>
                <p>{this.state.someValue}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default InputLabColor