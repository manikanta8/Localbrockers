import React from "react";
import { createDrawerNavigator, createAppContainer} from 'react-navigation';
import { Platform, Dimensions }  from 'react-native'

import WalletScreen from '../screens/WalletScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AboutScreen from '../screens/AboutScreen';
import PolicyScreen from '../screens/PolicyScreen';
import ReferScreen from '../screens/ReferScreen';
import LogoutScreen from '../screens/LogoutScreen';
const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
}

const DrawerNavigator = createDrawerNavigator({
    Screen1: {
        Screen: WalletScreen
    },  
    Screen2: {
        Screen: ProfileScreen
    },
    Screen3: {
        Screen: AboutScreen
    },
    Screen4: {
        Screen: PolicyScreen
    },
    Screen5: {
        Screen: ReferScreen
    },
    Screen6: {
        Screen: LogoutScreen }
    },
      DrawerConfig
);

export default createAppContainer(DrawerNavigator)
