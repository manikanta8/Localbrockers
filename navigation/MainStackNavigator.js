import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator} from 'react-navigation';

import ProfileScreen from '../screens/ProfileScreen';
import ConfirmScreen from '../screens/ConfirmScreen';
import UploadScreen from '../screens/UploadScreen';
import PayScreen from '../screens/PayScreen';
import PostScreen from "../screens/PostScreen"
import SaleScreen from '../screens/SaleScreen';
import BuyScreen from '../screens/BuyScreen';
import RentScreen from '../screens/RentScreen';
import WalletScreen from '../screens/WalletScreen';
import AboutScreen from '../screens/AboutScreen';
import LogoutScreen from '../screens/LogoutScreen';
import PolicyScreen from '../screens/PolicyScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const MainStackNavigator = createStackNavigator(
  {
    Profile: ProfileScreen,
    Confirm: ConfirmScreen,
    Upload: UploadScreen,
    Pay: PayScreen,
    Post: PostScreen,
    //Buy: BuyScreen,
    //Rent: RentScreen,
    //Wallet: WalletScreen,
    //About: AboutScreen,
    //Logout: LogoutScreen,
    //Policy: PolicyScreen
    },
  config
);

export default MainStackNavigator;