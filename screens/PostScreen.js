import React, { useState, constructor } from "react";
import { SideMenu, List, ListItem } from 'react-native-elements';
import { withNavigation } from "react-navigation";
import { Image, StyleSheet, View } from "react-native";

class PostScreen extends React.Component {
constructor () {
  super()
  this.state = { toggled: false }
}

toggleSideMenu () {
  this.setState({
    toggled: !this.state.toggled
  })
}

render () {
  // SideMenu takes a React Native element as a prop for the actual Side Menu
  const MenuComponent = (
    <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
      <List containerStyle={{marginBottom: 20}}>
      {
        list.map((item, i) => (
          <ListItem
            roundAvatar
            onPress={() => console.log('something')}
            avatar={item.avatar_url}
            key={i}
            title={item.name}
            subtitle={item.subtitle} />
            
        ))
      }
      </List>
    </View>
  )
  return (
    <SideMenu
      MenuComponent={MenuComponent}
      toggled={this.state.toggled}>
      <App />
    </SideMenu>
  )
}
}


PostScreen.navigationOptions = {
  title: "Post"
};

export default withNavigation(PostScreen);