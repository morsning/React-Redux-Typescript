import { combineReducers } from 'redux'

type InitialCount = {
    count: number;
}

type InitialText = {
    someValue: string;
}

type IncreaseAction = {
    type: 'INCREASE'
    payload: number
}

type DecreaseAction = {
    type: 'DECREASE'
    payload: number
}

type UpdateValueAction = {
    type: 'UPDATE_VALUE'
    payload: string
}

type AppActionTypes = IncreaseAction | DecreaseAction | UpdateValueAction

const initialCountState: InitialCount = {
    count: 0
}

const initialTextState: InitialText = {
    someValue: ''
}

function countReducer(state = initialCountState, action: AppActionTypes) {
    switch (action.type) {
        case 'INCREASE':
            return {
                ...state,
                count: state.count + action.payload
            }
        case 'DECREASE':
            return {
                ...state,
                count: state.count - action.payload
            }
        default:
            return state
    }
}

function textInputReducer(state = initialTextState, action: AppActionTypes) {
    switch (action.type) {
        case 'UPDATE_VALUE':
            return {
                ...state,
                someValue: action.payload
            }
        default:
            return state
    }
}

export default combineReducers({
    textInputReducer,
    countReducer
})