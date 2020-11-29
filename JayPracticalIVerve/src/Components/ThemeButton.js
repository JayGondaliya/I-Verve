import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../Utils/Colors'

export default function ThemeButton(props) {
    return (
        <TouchableOpacity style={style.containerView}
        onPress={props.onPress}
        >
            <Text style={style.titleStyle}>{props.label}</Text>
        </TouchableOpacity>
    )
}
const style = StyleSheet.create({
    containerView:{
        borderRadius: 10,marginVertical:10, backgroundColor: Colors.green, alignItems:'center'
    },
    titleStyle:{
        margin: 10
    }
})