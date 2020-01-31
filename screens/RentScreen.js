import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Button from "react-native-button";
import { withNavigation } from "react-navigation";
import { TabNavigator } from "react-navigation";

const backgroundColor = '#e97600';

export default class RentScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    let tabBarLabel = 'Rent';
    let tabBarIcon = () => (
      <Image
      source ={require('../assets/Menu icons/Refer.png')}
      style={{ width: 26, height: 26, tintColor: backgroundColor }} />

    );
    return { tabBarLabel, tabBarIcon };

  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: backgroundColor,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ fontWeight:'bold', fontSize: 22, color: 'white' }}>This is RentScreen</Text>
      </View>
    );
  }
}