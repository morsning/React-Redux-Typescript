import React, { SyntheticEvent, FormEvent } from 'react'

type InputLabProps = {
    onInputSubmit: (value: string) => void;
    colors?: () => {};
}

type InputLabState = {
    someValue: string;
    someValue2: string;
    dynamicStyle: {};
    dynamicStyle2: {};
}

class InputLabColor2 extends React.Component<InputLabProps, InputLabState> {

    state = {
        someValue: '',
        dynamicStyle: {},
        someValue2: '',
        dynamicStyle2: {}
    }

    componentDidUpdate() {
        if (this.props.colors) {
            console.log(this.props.colors())
        }
        console.log(this.state)
        //move this code so that the same changehandler-function does the setState at the same time
        //as the onChange event is fired..
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
    
    handleChange2 = (e: FormEvent<HTMLInputElement>): void => {
        if (this.props.colors) {
            this.setState({someValue2: e.currentTarget.value, dynamicStyle2: this.props.colors()})
        } else {
            this.setState({someValue2: e.currentTarget.value})
        }
    }

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div style={this.state.dynamicStyle}>
                    <p>Almost the same component as InputLabColor but here with two input fields and two colored borders
                        Both of these components share the same logic for randomizing colored borders which we have extracted to 
                        our ColorEnhanced component for re-use.
                    </p>
                    <div style={this.state.dynamicStyle2}>
                        <form onSubmit={event => this.handleFormSubmit(event)}>
                            <input 
                                type="text" 
                                value={this.state.someValue}
                                placeholder="enter some text"
                                onChange={this.handleChange}
                            />
                            <input 
                                type="text" 
                                value={this.state.someValue2}
                                placeholder="enter some text"
                                onChange={this.handleChange2}
                            />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                    <p>Component level state:</p>
                    <p>{this.state.someValue}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default InputLabColor2