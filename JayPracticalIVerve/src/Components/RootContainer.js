import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeContainer from "../Containers/HomeContainer";
import DataListingContainer from '../Containers/DataListingContainer';
import UpdateUserDetail from '../Containers/UpdateUserDetail';

export const BASE_STACK = createStackNavigator();

export default function BASE_NAVIGATION({navigation}){
    return(
        <NavigationContainer>
            <BASE_STACK.Navigator initialRouteName={'HomeContainer'}>
            <BASE_STACK.Screen name={'HomeContainer'} component={HomeContainer} />
            <BASE_STACK.Screen name={'DataListingContainer'} component={DataListingContainer} />
            <BASE_STACK.Screen name={'UpdateUserDetail'} component={UpdateUserDetail} />
            </BASE_STACK.Navigator>
        </NavigationContainer>
    )
}
