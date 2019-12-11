import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import reducers from './ReduxState/Reducers'
import App from './Components/App'


const store = createStore(reducers)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))