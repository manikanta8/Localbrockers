import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import deviceWindow from "../constants/Layout";
import { Button, Input, CheckBox, Text } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class PayScreen extends React.Component {
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
        <View>
          <CheckBox
            title="Credit/Debit/Net Banking"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked}
          />
          <CheckBox
            title="Paytm"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonStyle}
            buttonStyle={styles.buttonProps}
            title="100"
            onPress={() => this.props.navigation.navigate("100")}
          />
          <Button
            style={styles.buttonStyle}
            buttonStyle={styles.buttonProps}
            title="500"
            color="#fff"
            onPress={() => this.props.navigation.navigate("500")}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonStyle}
            buttonStyle={styles.buttonProps}
            title="1000"
            onPress={() => this.props.navigation.navigate("1000")}
          />
          <Button
            style={styles.buttonStyle}
            buttonStyle={styles.buttonProps}
            title="2000"
            onPress={() => this.props.navigation.navigate("2000")}
          />
        </View>
        <Button
          containerStyle={styles.buttonStyle}
          buttonStyle={styles.buttonProps}
          title="NEXT"
          buttonStyle={{
            backgroundColor: "#015697",
            margin: 20,
            alignSelf: "center",
            width: 200
          }}
          onPress={() => this.props.navigation.navigate("NEXT")}
        ></Button>
      </KeyboardAwareScrollView>
    );
  }
}

PayScreen.navigationOptions = {
  title: "null"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: 'PTMono-Regular',
  },
  contentContainer: {
    paddingTop: 20,
    fontFamily: 'PTMono-Regular',
  },
  welcomeImageContainer: {
    marginTop: 30,
    height: deviceWindow.window.height / 4,
    width: deviceWindow.window.width / 2,
    alignSelf: "center"
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    width: "80%"
  },
  inputContainer: {
    marginTop: 20,
    fontFamily: 'PTMono-Regular',
  },
  buttonProps: {
    backgroundColor: "#015697",
    width: 140
  }
});

export default withNavigation(PayScreen);
