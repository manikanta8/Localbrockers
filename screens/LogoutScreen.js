import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import MenuDrawer from '../navigation/MenuDrawer'

class LogoutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuDrawer navigation={this.props.navigation} />
        <Text style={styles.text}>Logout</Text>
      </View>
    )
  }}

  LogoutScreen.navigationOptions = {
  title: 'LogoutScreen',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10
  }
});

export default withNavigation(LogoutScreen);
