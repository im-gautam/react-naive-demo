import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

const buttonWithbackground = props => {

    const content = (
        <View style={[styles.button, {backgroundColor: props.color},
         props.disabled ? styles.disabled : null]}>
            <Text style={props.disabled ? styles.disabledText : null}>
            {props.children}
            </Text>
        </View>
    );
    if(Platform.OS === 'android'){
           return (
               <TouchableNativeFeedback onPress={props.onPress} >
                {content}
               </TouchableNativeFeedback>
           );
    }
    if(props.disabled){
        return content;
    }
    return (
        <TouchableOpacity onPress={props.onPress}>
        {content}
        </TouchableOpacity>
    );
    
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderWidth: 0,
        borderColor: "transparent"
    },
    disabled: {
        backgroundColor: "#eee",
        borderColor: '#aaa'
    },
    disabledText: {
        color: '#aaa'
    }
});

export default buttonWithbackground;