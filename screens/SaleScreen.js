import React, { Component } from "react";
import Button from "react-native-button";
import { withNavigation } from "react-navigation";
import { TabNavigator } from "react-navigation";

const backgroundColor = '#e97600';

export default class SaleScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    let tabBarLabel = 'Sale';
    let tabBarIcon = () => (
      <Image
      source ={require('../assets/Menu icons/Profile.png')}
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
        <Text style={{ fontWeight:'bold', fontSize: 22, color: 'white' }}>This is SaleScreen</Text>
        <Button>
          containerStyle={{ padding: 10, margin: 20, width: 200, height: 45, borderRadiuse: 10, backgroundColor: 'darkvioet' }}
          style={{ fontSize: 18, color: 'white' }}
          onPress={() => {
            Console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`);
            const { navigate } = this.props.navigation;
            navigate (Buy);
          }}>
          Navigate to Detail
        </Button>
      </View>
    );
  }
}
