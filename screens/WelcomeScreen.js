import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { withNavigation } from "react-navigation";
import deviceWindow from "../constants/Layout";
import { Button } from "react-native-elements";

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/images/ic_launcher.png")}
          style={styles.welcomeImageContainer}
        />
        <View style={styles.welcomeContainer}>
          <Button
            containerStyle={styles.buttonStyle}
            buttonStyle={styles.buttonProps}
            title="Login"
            onPress={() => this.props.navigation.navigate("Login")}
          />
          <Button
            containerStyle={styles.buttonStyle}
            buttonStyle={styles.buttonProps}
            title="Register"
            onPress={() => this.props.navigation.navigate("Register")}
          />
        </View>
      </View>
    );
  }
}

WelcomeScreen.navigationOptions = {
  header: null
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  buttonStyle: {
    width: 160,
    margin: 20
  },
  buttonProps: {
    backgroundColor: "#015697"
  },
  welcomeImageContainer: {
    marginTop: deviceWindow.window.height / 4,
    height: deviceWindow.window.height / 4,
    width: deviceWindow.window.width / 2,
    alignSelf: "center"
  },
  welcomeContainer: {
    alignSelf: "center"
  }
});

export default withNavigation(WelcomeScreen);
