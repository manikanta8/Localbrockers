import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import UploadScreen from "../screens/UploadScreen";
import PayScreen from "../screens/PayScreen";
import ConfirmScreen from "../screens/ConfirmScreen";
import PostScreen from "../screens/PostScreen"

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const authStackNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Upload: UploadScreen,
    Pay: PayScreen,
    Confirm: ConfirmScreen,
    Post: PostScreen,
  },
  config
);

export default authStackNavigator;
