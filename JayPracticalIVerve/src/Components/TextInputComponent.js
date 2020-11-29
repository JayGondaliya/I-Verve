import React, { useState } from 'react'
import { TextInput, View, Text, StyleSheet } from "react-native";
import { Colors } from '../Utils/Colors';

export default function TextInputComponent(props) {

    const [strText, setText] = useState("");
    return (
        <View 
        style={style.containerView}>
            <TextInput
            placeholder={props.placeholder}
            style={style.textInput}
                value={props.value}
                onChangeText={(text)=>{
                    setText(text)
                    props.onChangeText(text)
                }}
                keyboardType={props.keyboardType}
            />  
            {props.error ? <Text style={style.titleStyle}>{props.error}</Text> : null}
        </View>
    )
}

const style = StyleSheet.create({
    containerView:{
        marginVertical:10,
            borderRadius:10,
            
            padding:5, 
            // shadowRadius:10, 
            shadowOpacity:10, 
            shadowColor:Colors.black,
             backgroundColor: Colors.white,
             shadowOffset:{
                 width:0,
                 height:0
             }
    },
    titleStyle:{
        color: Colors.error
    },
    textInput:{
        paddingVertical:5
    }
})