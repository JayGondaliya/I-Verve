import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function DetailTextComponent(props) {
    return (
        <View style={style.containerView}>
            <Text style={style.subView}>{props.text}</Text>
            <Text style={style.subView}>{props.label}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    containerView:{
        flexDirection: 'row', marginHorizontal:10
    },
    subView:{
        flex: 1
    }
})