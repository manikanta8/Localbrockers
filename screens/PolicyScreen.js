import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import MenuDrawer from '../navigation/MenuDrawer'

class PolicyScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuDrawer navigation={this.props.navigation} />
        <Text style={styles.text}>PolicyScreen</Text>
      </View>
    )
  }}

  PolicyScreen.navigationOptions = {
  title: 'PolicyScreen',
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

export default withNavigation(PolicyScreen);
