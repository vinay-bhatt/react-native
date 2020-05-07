import React from 'react'
import {View, StyleSheet, ActivityIndicator} from 'react-native' 
import {useSelector} from 'react-redux'

const Loader = (props: any) => {

    let loading = useSelector((state: any) => state.appReducer.loading)

    return (
        loading ?
        <View style= {styles.container}>
            <ActivityIndicator size="large" color= '#0000ff' />
        </View> : null
    )
}

const styles = StyleSheet.create({
    container:{
       position: 'absolute',
       left: 0,
       right: 0,
       top: 0,
       bottom: 0,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#dddddd7a'
    }
})

export default Loader;