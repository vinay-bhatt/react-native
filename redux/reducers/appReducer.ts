import * as types from '../../constants'


interface IntialState {
    astroidValues: Object,
    loading: boolean
}

const intialState: IntialState = {
    astroidValues: {},
    loading: false
}


export const appReducer = (state: IntialState = intialState, action: any): IntialState => {
    switch (action.type) {
        case types.SET_ASTROID:
            return {
                ...state,
                astroidValues: action.data
            }
        case types.SHOW_LOADER:
            return {
                ...state,
                loading: true
            }
        case types.HIDE_LOADER:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }
}
