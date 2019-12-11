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

export const updateValueActionCreator = (value: string): AppActionTypes => {
    return {
        type: 'UPDATE_VALUE',
        payload: value
    }
}

export const increaseActionCreator = (value: number): AppActionTypes => {
    return {
        type: 'INCREASE',
        payload: value
    }
}

export const decreaseActionCreator = (value: number): AppActionTypes => {
    return {
        type: 'DECREASE',
        payload: value
    }
}