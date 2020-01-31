import React from "react";
import { Image, StyleSheet, View } from "react-native";
import deviceWindow from "../constants/Layout";
import { Button, Input, Text, CheckBox } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class ConfirmScreen extends React.Component {
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
        <Text h4 h4Style={styles.labelStyle}>
          SELECT CLASS
        </Text>
        <View>
          <CheckBox
            title="Economy Rs.100"
            right
            iconRight
            uncheckedIcon="circle-o"
            checked={this.state.checked}
          />
          <CheckBox
            title="Premium Rs.500"
            right
            iconRight
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked}
          />
          <CheckBox
            title="Both Economy/Premium"
            right
            iconRight
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: 'space-between', fontFamily: 'PTMono-Regular', padding: 10 }}>
        <Text h4 h4Style={styles.labelStyle}>
          REFERENCE
        </Text>
          <Input
            placeholder="Enter Number"
            containerStyle={styles.inputContainer}
          />
        </View>
        <Text h4 h4Style={styles.labelStyle}>
          NUMBER IF ANY
        </Text>
        <Button
          containerStyle={styles.buttonStyle}
          buttonStyle={styles.buttonProps}
          title="CONFIRM"
          onPress={() => this.props.navigation.navigate("Upload")}
        ></Button>
      </KeyboardAwareScrollView>
    );
  }
}

ConfirmScreen.navigationOptions = {
  title: "CONFIRM"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 10
  },
  welcomeImageContainer: {
    marginTop: 30,
    height: deviceWindow.window.height / 4,
    width: deviceWindow.window.width / 2,
    alignSelf: "center"
  },
  labelStyle: {
    marginTop: 20,
    fontSize: 20,
    color: "#015697",
    alignItems: "center",
    fontFamily: 'PTMono-Regular',
  },
  textStyle: {
    margin: 10,
    fontFamily: 'PTMono-Regular',
  },
  inputContainer: {
    marginTop: 10,
    borderColor: "black",
    alignContent: "center",
    borderWidth: 1,
    width: 200,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    fontFamily: 'PTMono-Regular',
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

export default withNavigation(ConfirmScreen);
