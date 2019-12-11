import React, { FormEvent, SyntheticEvent } from 'react'

type CCProps = {
    onInputSubmit: (value: string) => void;
    currentInputValue: string;
}

type CCState = {
    someValue: string;
}

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

class CCompLifeCycle extends React.Component<CCProps, CCState> {

    state = {
        someValue: ''
    }

    componentDidUpdate() {
        console.log("component did update")
    }

    componentDidMount() {
        this.setState({someValue: this.props.currentInputValue})
    }

    handleFormSubmit(event: SyntheticEvent) {
        event.preventDefault();
        this.props.onInputSubmit(this.state.someValue)
    }

    handleChange = (e: FormEvent<HTMLInputElement>): void => {
        this.setState({someValue: e.currentTarget.value})
    }

    render() {
        return (
            <React.Fragment>
                <section style={myStyle.infoText}>
                    <h1>Life-cycle methods can be used in order to alter the behaviour of a component at a certain stage of it's lifecycle.</h1>
                    <p>The first example of this demo-applications page: Part 1 demonstrated how an application can have state at different levels throughout the component hierarchy.
                        If we submit the component level state in that particular example so that it becomes part of what we in this demo refer to as our application level state, and
                        then switch page that components state is lost. Switching back to the Part 1 page again will demonstrate this as the input field blank again.
                        In this example we use the componentDidMount life-cycle method in order to set the input-fields value to the value currently part of our application level state.
                        As long as we submit the value of the field to the parent holding our application level state we are free to switch pages and still get the last value back into the 
                        input field as soon as we browse back to this page.
                    </p>
                </section>
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
            </React.Fragment>
        )
    }
}

export default CCompLifeCycle