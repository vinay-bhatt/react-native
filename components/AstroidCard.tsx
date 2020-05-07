import React from 'react'
import {View, StyleSheet} from 'react-native' 


const AstroidCard = (props: any) => {

    return (
        <View style= {styles.astroidCard}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    astroidCard:{
        padding: 20,
        elevation:1,
        backgroundColor: '#fff',
        width: '100%',
        marginVertical: 8,
        borderRadius: 5,
        shadowColor: '#000',
        textAlign: 'left',
        shadowOffset: {
            width:2,
            height:2
        },
        shadowOpacity: 0.5,
        shadowRadius: 3
    }
})

export default AstroidCard;