import ENV from '../../env';
import * as types from '../../constants'
import { Dispatch } from 'redux'
import { Alert } from 'react-native'

export const searchAstroid = (value: string, navigate: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: types.SHOW_LOADER })
        try {
            let response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${value}?api_key=${ENV.nasaAPI}`)
            const resData = await response.json();
            dispatch({ type: types.SET_ASTROID, data: resData })
            dispatch({ type: types.HIDE_LOADER })
            navigate.navigation.navigate('AstroidView')

        } catch (error) {
            dispatch({ type: types.HIDE_LOADER })
            Alert.alert("No Astroid Found")
        }
    }
}

export const randomAstroid = (navigate: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: types.SHOW_LOADER })

        try {
            let response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${ENV.nasaAPI}`)
            const resData = await response.json();
            let randomId = resData.near_earth_objects[Math.floor(Math.random() * resData.near_earth_objects.length)];

            if (randomId && randomId.id) {
                let randomResponse = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${randomId.id}?api_key=${ENV.nasaAPI}`)
                const ramdomResData = await randomResponse.json();
                dispatch({ type: types.SET_ASTROID, data: ramdomResData })
                dispatch({ type: types.HIDE_LOADER })
                navigate.navigation.navigate('AstroidView')

            }
        } catch (error) {
            dispatch({ type: types.HIDE_LOADER })
            Alert.alert("No Astroid Found")

        }
    }
}