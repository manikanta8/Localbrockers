import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import deviceWindow from "../constants/Layout";
import { Button, Input, CheckBox } from "react-native-elements";
import { MonoText } from "../components/StyledText";
import { withNavigation } from "react-navigation";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/FontAwesome";

class RegisterScreen extends React.Component {
  state = {
    checked: false
  };
  render() {
    return (
      <KeyboardAwareScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Image
          source={require("../assets/images/ic_launcher.png")}
          style={styles.welcomeImageContainer}
        />
        <View style={styles.registerContainer}>
          <Image
            source={require("../assets/Register page Icons/Enter-Name.png")}
            style={styles.ImageStyle}
          />
          <Input placeholder="Enter Name"
          containerStyle={styles.inputContainer}
          />
          <Image
            source={require("../assets/Register page Icons/Enter-Mobilen-no.png")}
            style={styles.ImageStyle}
          />
          <Input placeholder="Enter Mobile No" 
          containerStyle={styles.inputContainer}
          />

          <Image
            source={require("../assets/Register page Icons/Enter-Address.png")}
            style={styles.ImageStyle}
          />
          <Input
            placeholder="Enter Address"
            containerStyle={styles.inputContainer}
          />
        </View>
        <View>
          <CheckBox title="User" right iconRight checked={this.state.checked} />
          <CheckBox
            title="Real Estate Broker/Agent"
            right iconRight checked={this.state.checked}
          />
          <CheckBox
            title="Classified Agent/Reporter"
            right iconRight checked={this.state.checked}
          />
        </View>
        <Button
          containerStyle={styles.buttonStyle}
          buttonStyle={styles.buttonProps}
          title="REGISTER"
          onPress={() => this.props.navigation.navigate("Confirm")}
        ></Button>
      </KeyboardAwareScrollView>
    );
  }
}

RegisterScreen.navigationOptions = {
  title: "Register"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: 'PTMono-Regula',
  },
  contentContainer: {
    paddingTop: 10
  },
  welcomeImageContainer: {
    marginTop: 20,
    height: deviceWindow.window.height / 4,
    width: deviceWindow.window.width / 2,
    alignSelf: "center"
  },
  registerContainer: {
    margin: 5,
    borderColor: "black",
    alignContent: "center",
    fontFamily: 'PTMono-Regular',
  },
  inputContainer: {
    marginTop: 5,
    fontFamily: 'PTMono-Regular',
    borderColor: "black",
    alignContent: "center",
    borderWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  ImageStyle: {
    padding: 5,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center"
  },
  buttonStyle: {
    margin: 20,
    alignSelf: "center",
    width: 200
  },
  buttonProps: {
    backgroundColor: "#015697"
  }
});

export default withNavigation(RegisterScreen);
