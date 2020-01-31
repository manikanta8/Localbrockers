import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import deviceWindow from "../constants/Layout";
import { Button, Input, CheckBox, Text } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { font } from "../constants/font";

class UploadScreen extends React.Component {
  state = {
    checked: false
  };
  render() {
    return (
      <KeyboardAwareScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonStyle}
            buttonStyle={styles.buttonProps}
            title="NEW POST"
            //onPress={() => this.props.navigation.navigate('Post')}
          />
          <Button
            style={styles.buttonStyle}
            buttonStyle={styles.buttonProps}
            title="OLD POST"
            // onPress={() => this.props.navigation.navigate('OLD POST')}
          />
        </View>
        <Text h4 h4Style={styles.labelStyle}>
          TYPE OF PROPERTY
        </Text>
        <View>
          <CheckBox
            title="Land/Plot"
            right
            iconRight
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked}
          />
          <CheckBox
            title="House/Apartment"
            right
            iconRight
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked}
          />
          <CheckBox
            title="Agricultural Land"
            right
            iconRight
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked}
          />
          <CheckBox
            title="Commercial Property"
            right
            iconRight
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: 'space-between', fontFamily: 'PTMono-Regular', alignItems: 'center', padding: 10 }}>
          <Text h4 h4Style={styles.labelStyle}>
            AREA
          </Text>
          <Input
            placeholder="Enter Area"
            containerStyle={styles.inputContainer}
          />
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            right
            title="SALE"
            right
            iconRight
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked}
          />
          <CheckBox
            title="BUY"
            right
            iconRight
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked}
          />
          <CheckBox
            title="RENT"
            right
            iconRight
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked}
          />
        </View>
        <Text h4 h4Style={styles.labelStyle}>
          POST-AS
        </Text>
        <View>
          <CheckBox
            title="Economy (Rs.100)"
            right
            iconRight
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked}
          />
          <CheckBox
            title="Premium (Rs.500)"
            right
            iconRight
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked}
          />
        </View>
        <Button
          containerStyle={styles.buttonStyle}
          buttonStyle={styles.buttonProps}
          title="UPLOAD"
          buttonStyle={{
            backgroundColor: "#015697",
            margin: 20,
            alignSelf: "center",
            width: 200
          }}
          onPress={() => this.props.navigation.navigate("Pay")}
        ></Button>
      </KeyboardAwareScrollView>
    );
  }
}

UploadScreen.navigationOptions = {
  title: "Upload"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    alignSelf: "center",
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 10
  },
  buttonContainer: {
    flex: 1,
    marginTop: 5,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    width: "80%"
  },
  labelStyle: {
    color: "#015697",
    alignItems: "center",
    fontFamily: 'PTMono-Regular',
  },
  textStyle: {
    margin: 20,
    fontFamily: 'PTMono-Regular',
  },
  inputContainer: {
    marginTop: 10,
    borderColor: "black",
    alignContent: "center",
    borderWidth: 1,
    fontFamily: 'PTMono-Regular',
    width: 200,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  checkbox: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5
  },
  buttonProps: {
    backgroundColor: "#015697",
    width: 140
  }
});

export default withNavigation(UploadScreen);
