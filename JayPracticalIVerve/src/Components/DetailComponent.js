import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../Utils/Colors'
import DetailTextComponent from './DetailTextComponent'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


export default function DetailComponent(props) {
    return (

        <View style={style.containerView}>
            <View style={style.subView}>
                <Text style={style.userDetailText}>{"User Detail"}</Text>

                <DetailTextComponent
                    text={"Name"}
                    label={props.data.name}
                />

                <DetailTextComponent
                    text={"Gender"}
                    label={props.data.gender}
                />

                <Text style={style.detailText}>{"Family Detail"}</Text>

                {props.data.familyData.map(items => {
                    return (
                        <View style={style.memberViewStyle}>
                            <DetailTextComponent
                                text={"Name"}
                                label={items.name}
                            /><DetailTextComponent
                                text={"Email"}
                                label={items.email}
                            />
                        </View>
                    )
                })}

            </View>
            <View style={style.sideView}>
                <MaterialIcon size={25} color={Colors.green} name='edit' onPress={() => props.editHandler(props.index)} />
                <MaterialIcon size={25} color={Colors.error} name='delete' onPress={()=>props.deleteHandler(props.index)} />
            </View>
        </View>

    )
}

const style = StyleSheet.create({
    containerView:{
        flexDirection: 'row', marginHorizontal:10
    },
    subView:{
        flex: 1
    },
    sideView:{
        flex: 0.1,justifyContent:'space-evenly', alignItems:'center'
    },
    memberViewStyle:{
        marginBottom:10
    },
    detailText:{
        fontWeight: 'bold', marginVertical: 10
    },
    userDetailText:{
        fontWeight: 'bold', marginVertical: 10
    }
})