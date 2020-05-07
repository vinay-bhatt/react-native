import React from 'react'
import {View, Text, StyleSheet} from 'react-native' 
import AstroidCard from '../components/AstroidCard'
import {useSelector} from 'react-redux'


const AstroidView = (props: any) => {

    const astroids = useSelector((state: any) => state.appReducer.astroidValues)

    return (
        <View style= {styles.layout} testID='view-wrapper'>
            <AstroidCard >
                <Text style = {styles.text}>
                    Name: {astroids.name}
                </Text>
                <Text style = {styles.text}>
                Nasa JPL URL: {astroids.nasa_jpl_url}
                </Text>
                <Text style = {styles.text}>
                Is Potentially Hazardous Asteroid: {astroids.is_potentially_hazardous_asteroid.toString()}
                </Text>
            </AstroidCard>
            
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        padding: 20
    },
    text: {
        paddingBottom: 15,
        fontSize: 15
    }
})
export default AstroidView;