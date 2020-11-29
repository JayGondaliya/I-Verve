import React from 'react'
import { FlatList, View } from 'react-native'
import { connect } from 'react-redux';
import DetailComponent from '../Components/DetailComponent';
import { saveUserDetailsInRedux } from '../redux/action/User';

class DataListingContainer extends React.Component {

    constructor(props) {
        super(props)

        this.dataListing = this.props.userOperations
    }

    dataListingRender = ({ item, index }) => {
        return (
            <DetailComponent 
            data={item}
            index={index}
            deleteHandler={this.deleteHandler}
            editHandler={this.editHandler}
            />
        )
    }

    deleteHandler = (index) => {
        // this.dataListing = this.props.userOperations
        this.props.userOperations.splice(index,1)
        this.props.saveUserdata(this.dataListing)
        this.forceUpdate()
    }
    
    callBackValue = (data, index) => {
        this.props.userOperations[index] = data
        // this.dataListing = this.props.userOperations
            this.props.saveUserdata(this.props.userOperations)
            this.forceUpdate()
    }

    editHandler = (index) => {
        this.props.navigation.navigate("UpdateUserDetail",{
            callBackValue : this.callBackValue,
            data: this.props.userOperations[index],
            index: index
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.props.userOperations}
                    renderItem={ this.dataListingRender}
                    extraData={this.props}
                    keyExtractor = {(item, index) => item.key}
                />
            </View>
        )
    }

}
export default connect(
    state => {
        console.log("State :::::: ", state)
        return {
            userOperations: state.userOperations.userData
        };
    },
    dispatch => {
        return {
            saveUserdata: data => {
                dispatch(saveUserDetailsInRedux(data))
            }
        };
    }
)(DataListingContainer);