import React from "react";
import { withNavigation } from "react-navigation";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";

import { MonoText } from "../components/StyledText";
import deviceWindow from "../constants/Layout";
import { Button, Text, Input } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class LoginScreen extends React.Component {
  render() {
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <Image source={require('../assets/images/ic_launcher.png')}
        style= {styles.welcomeImageContainer}/>
      <Text h3 h3Style = {styles.labelStyle}>WELCOME</Text>
      <View style = {styles.welcomeContainer}>
      <View style = {styles.inputContainer}>
      <Text  h4 style = {styles.textStyle}>+91</Text>
      <Input placeholder='Enter Mobile No'></Input>
      </View>
          <Button 
            containerStyle={styles.buttonStyle}
            title="Login"
            buttonStyle={{ backgroundColor: "#015697" }}
            onPress={() => this.props.navigation.navigate("Post")}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

LoginScreen.navigationOptions = {
  title: "Login"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  buttonStyle: {
    margin: 5,
    width: 200,
    height: 120,
    alignSelf: "center"
  },
  welcomeImageContainer: {
    marginTop: deviceWindow.window.height / 6,
    height: deviceWindow.window.height / 4,
    width: deviceWindow.window.width / 2,
    alignSelf: "center"
  },
  labelStyle: {
    color: "#015697",
    alignSelf: "center",
    fontFamily: 'PTMono-Regular',
  },
  textStyle: {
    margin: 10,
    fontFamily: 'PTMono-Regular',
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center"
  },
  registerContainer: {
    flexDirection: "row",
    margin: 10
  },
  inputContainer: {
    marginTop: 5,
    borderColor: "black",
    alignContent: "center",
    flexDirection: "row",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  welcomeContainer: {
    flex: 1,
    alignSelf: "center"
  }
});

export default withNavigation(LoginScreen);
