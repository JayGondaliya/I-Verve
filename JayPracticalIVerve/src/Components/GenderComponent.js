import React, { useState } from 'react'
import { View } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

export default function GenderComponent(props) {

    const radio_props = [
        {label: 'Male', value: 0 },
        {label: 'Female', value: 1 }
      ];
    const [value, setValue] = useState(0);
    return (
        <View style={{marginVertical:10}}>
            <RadioForm
            
                radio_props={radio_props}
                buttonSize={15}
                initial={props.initial}
                onPress={(value) => { 
                    setValue(value)
                    props.onChangeValue(value)
                }}
            />
        </View>
    )
}