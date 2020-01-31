import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import AppNavigator from "./navigation/AppNavigator";
import { font } from "./constants/font";

/*import { AppRegistry } from "react-native";
import { TabNavigator } from 'react-navigation';
import SaleScreen from './screens/SaleScreen';
import BuyScreen from './screens/BuyScreen';
import RentScreen from './screens/RentScreen';

//screen names
//import { SaleScreen, BuyScreen, RentScreen } from './screens/screenNames';

let routeConfigs = {
  Sale: {
    Screen: SaleScreen,
  },
  Buy: {
    Screen: BuyScreen,
  },
  Rent: {
    Screen: RentScreen,
  },

};
let tabNavigatorConfig = {
  tabBarPosition: 'Top',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    activeTinColor: 'blue',
    labelStyle: {
      fontSize: 13,
    },
    style: {
      backgroundColor: 'lightgray',
      padding: -10
    },
    // showLabel: false
  },
 // order: [Sale, Buy, Rent],
};
const App = TabNavigator(routeConfigs, tabNavigatorConfig);
AppRegistry.registerComponent('localbrokers', () => App)*/

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}
 
async function loadResourcesAsync() {
  
  await Promise.all([
    Asset.loadAsync([
      require("./assets/images/robot-dev.png"),
      require("./assets/images/robot-prod.png"),
      require("./assets/images/ic_launcher.png"),
      require("./assets/fonts/PTMono-Regular.ttf")
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      ...FontAwesome.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      "PTMono-Regular": require("./assets/fonts/PTMono-Regular.ttf"),
      uri: require('./assets/fonts/PTMono-Regular.ttf'),
    fontDisplay: FontDisplay.FALLBACK,
    })
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
 