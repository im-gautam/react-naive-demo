import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from "react-redux";

import { addPlace } from "../../store/actions/index";
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
import imagePlaceholder from '../../assets/golden_temple.jpg';

class SharePlaceScreen extends Component{

    static navigatorStyle = {
        navBarButtonColor: "orange"
    }

    state = {
        placeName: ""
      };

    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        console.log(event);
        if(event.type === "NavBarButtonPress"){
            if(event.id === "sideDrawerToggle"){
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            }
        }
    }

    placeNameChangedHandler = val => {
            this.setState({
                placeName: val
            });
    }

    placeAddedHandler = () => {
        if(this.state.placeName.trim() !== ""){
            this.props.onAddPlace(this.state.placeName);    
        }
    }

    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
                <MainText>
                    <HeadingText>Share a Place With Us!</HeadingText>
                </MainText>
                <PickImage />
                <PickLocation />
                <PlaceInput 
                placeName={this.state.placeName}
                onChangeText={this.placeNameChangedHandler} />
                <View style={styles.buttons}>
                    <Button 
                    title="Share the Place!"
                    onPress={this.placeAddedHandler} />
                </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    },
    previewImage: {
        width: "100%",
        height: "100%"
    },
    buttons: {
        margin: 8
    }
});

const mapDispathToProps = dispath => {
    return {
        onAddPlace: (placeName) => dispath(addPlace(placeName))
    };
};

export default connect(null, mapDispathToProps)(SharePlaceScreen);