import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Footer } from './Shared/Footer'
import { Nav } from './Shared/Nav'
import { Home } from './Pages/Home'
import CCompLifeCycle from './Pages/CCompLifeCycle'
import { MoreReuse } from './Pages/MoreReuse'
import { Pattern1 } from './Pages/Pattern1'
import { Pattern2 } from './Pages/Pattern2'
import { Pattern3 } from './Pages/Pattern3'
import { StateDisplay } from './Shared/StateDisplay'

class App extends React.Component {

    state = {
        about: 0,
        inputLab: '',
        inputLab2: '',
        inputLab3: ''
    }

    onAboutCountSubmit = (amountToAdd: any) => {
        let aboutCountTotal = this.state.about + amountToAdd
        this.setState({about: aboutCountTotal})
    }

    onInputSubmit = (value: any) => {
        this.setState({inputLab: value})
    }

    onInputSubmit2 = (value: any) => {
        this.setState({inputLab2: value})
    }

    onInputSubmit3 = (value: any) => {
        this.setState({inputLab3: value})
    }

    render() {
        return (
            <> {/* We do not need to write out React.Fragment */}
                <section>
                    <StateDisplay stats={this.state}/>
                </section>
                <Router>
                    <header>
                        <Nav/>
                    </header>
                    <section>
                        <Route exact path="/" render={() => <Home currentInputValue={this.state.inputLab} onInputSubmit={this.onInputSubmit} />} />
                        <Route path="/CCompDemo1" render={() => <CCompLifeCycle currentInputValue={this.state.inputLab2} onInputSubmit={this.onInputSubmit2} />} />
                        <Route path="/more-reuse" render={() => <MoreReuse currentInputValue={this.state.inputLab3} onInputSubmit={this.onInputSubmit3} />} />
                        <Route path="/pattern1" render={() => <Pattern1 currentCount={this.state.about} onCountSubmit={this.onAboutCountSubmit} />} />
                        <Route path="/pattern2" render={() => <Pattern2 currentCount={this.state.about} onCountSubmit={this.onAboutCountSubmit} />} />
                        <Route path="/pattern3" render={() => <Pattern3 currentCount={this.state.about} onCountSubmit={this.onAboutCountSubmit} />} />
                    </section>
                </Router>
                <section>
                    <StateDisplay stats={this.state}/>
                </section>
                <Footer />
            </> 
        )
    }
}

export default App