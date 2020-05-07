import React, {useState} from 'react'
import {View, StyleSheet, Button, TextInput} from 'react-native'
import {useDispatch} from 'react-redux'
import  * as actions from '../redux/actions/action'



const AstroidView = (props: any) => {

    const [astroidValue, setAstroidValue] = useState('');
    const dispatch = useDispatch()

    const handleChange = (value: string) => {
        setAstroidValue(value)
    }

    const searchHandler = () => {
        dispatch(actions.searchAstroid(astroidValue, props))
        setAstroidValue('')
    }

    const randomSearchHandler = () => {
        dispatch(actions.randomAstroid(props))
        setAstroidValue('')
    }
    return (
        <View style={styles.form} testID='search-wrapper'>
            <TextInput style={styles.inputBox} keyboardType='number-pad' placeholder='Enter Asteroid ID' onChangeText={(value: string) => handleChange(value)} value={astroidValue} />
            <View style={styles.action}>
                <View style={styles.button}>
                    <Button title='Submit' disabled={!astroidValue} onPress={searchHandler}  />
                </View>
                <View style={styles.button}>
                    <Button title='Random Asteroid' onPress={randomSearchHandler} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    inputBox:{
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20
    },
    button :{
        width: '45%'
    }

})

export default AstroidView