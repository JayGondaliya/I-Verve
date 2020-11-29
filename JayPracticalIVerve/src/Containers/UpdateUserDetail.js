import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import GenderComponent from '../Components/GenderComponent'
import TextInputComponent from '../Components/TextInputComponent'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../Utils/Colors'
import ThemeButton from '../Components/ThemeButton';
import Validations from '../Utils/Validations';
import { connect } from 'react-redux';
import { saveUserDetailsInRedux } from '../redux/action/User';

export default class UpdateUserDetail extends React.Component {

    constructor(props) {
        super(props)

        this.ValidationHelper = new Validations()
        this.Name = this.props.route.params.data.name
        this.value = parseInt(this.props.route.params.data.genderType)
        this.memberList = this.props.route.params.data.familyData
    }

    state = {
        shouldPerformValidation: false
    }

    onChangeNameValue = (text) => {
        this.Name = text
        this.state.shouldPerformValidation = false
        this.forceUpdate()
    }

    _addMember = () => {
        this.memberList.push({})
        this.forceUpdate()
    }

    _removeMember = (index) => {
        this.memberList.splice(index, 1)
        this.forceUpdate()
    }

    onSubmitAction = () => {
        this.setState({
            shouldPerformValidation: true
        })

        this.filterArray = this.memberList.filter((item, index) => {
            return item.name !== undefined && item.email !== undefined && item.name.trim() !== "" &&
                this.ValidationHelper.checkEmailValidation(item.email, "Enter Proper email").trim() == ""
        })

        console.log("EMPTY ::::: ", this.filterArray)
        if (this.ValidationHelper.checkEmpty(this.Name, "Please enter name").trim() !== "" ||
            this.filterArray.length !== this.memberList.length
        ) {
            return
        } else {
            let userData = {
                name: this.Name,
                gender: this.value === 0 ? "Male" : "Female",
                genderType: this.value,
                familyData: this.memberList
            }
            // this.props.userOperations[this.props.route.params.index] = userData
            // this.props.saveUserdata(this.props.userOperations)
            this.props.route.params.callBackValue(userData, this.props.route.params.index)
            this.props.navigation.goBack()
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={style.containerView}>

                    <TextInputComponent
                        value={this.Name}
                        placeholder={"Enter name"}
                        onChangeText={this.onChangeNameValue}
                        keyboardType={'default'}
                        error={this.state.shouldPerformValidation ? this.ValidationHelper.checkEmpty(this.Name, "Please enter Name").trim() : ""}
                    />

                    <GenderComponent
                    initial={this.value}
                        onChangeValue={(value) => {
                            this.value = value
                            console.log("VALUE :::::: ", value)
                        }}
                    />
                        <Text style={style.titleStyle}>{"Family members"}</Text>

                    {this.memberList.map((item, index) => {
                        return (
                            <View>
                                <TextInputComponent
                                    value={item.name}
                                    placeholder={"Enter name"}
                                    onChangeText={(text) => {
                                        this.memberList[index].name = text
                                        this.state.shouldPerformValidation = false
                                        this.forceUpdate()
                                    }}
                                    keyboardType={'default'}
                                    error={this.state.shouldPerformValidation ? this.ValidationHelper.checkEmpty(this.memberList[index].name, "Please enter Name").trim() : ""}
                                />

                                <TextInputComponent
                                    value={item.email}
                                    placeholder={"Enter email"}
                                    onChangeText={(text) => {
                                        this.memberList[index].email = text
                                        this.state.shouldPerformValidation = false
                                        this.forceUpdate()
                                    }}
                                    keyboardType={'email-address'}
                                    error={this.state.shouldPerformValidation ? this.ValidationHelper.checkEmailValidation(this.memberList[index].email, "Please enter email").trim() : ""}
                                />
                                {this.memberList.length > 1 ?
                                    <MaterialIcon style={style.removebtnStyle} size={20} color={Colors.green} name='remove-circle' onPress={() => this._removeMember(index)} />
                                    : null}
                            </View>
                        )
                    })}

                    <MaterialIcon size={20} color={Colors.green} name='add-circle' onPress={this._addMember} />

                    <ThemeButton
                        label={'Submit'}
                        onPress={this.onSubmitAction}
                    />
                </View>
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    containerView:{
        flex: 1, padding: 20
    },
    titleStyle:{
        fontWeight: 'bold', marginBottom: 10
    },
    removebtnStyle:{
        alignSelf: 'flex-end'
    }
})
