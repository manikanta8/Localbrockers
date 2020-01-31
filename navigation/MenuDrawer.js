import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  Platform,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  View
} from "react-native";
import { DrawerNavigator } from "react-navigation";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").hight;

export default class MenuDrawer extends React.Component {
  navLink(nav, text) {
    return (
      <TouchableOpacity
        style={{ height: 50 }}
        onPress={() => this.props.navigation.navigate(nav)}
      >
        <Text style={styles.link}>{text}></Text>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toplinks}>
            <View style={styles.Profile}>
                <View style={styles.imgView}>
                    <Image style={StyleSheet.img} source={require("../assets/images/ic_launcher.png")}/>
                </View>
                <View style={styles.profileText}>
                    <Text style={styles.name}>Local Brokers</Text>
                </View>
            </View>
        </View>
        <View style={styles.bottomLinks}>
          {this.navLink("Wallet", "Wallet")}
          {this.navLink("Profile", "Profile")}
          {this.navLink("About", "About")}
          {this.navLink("Policy", "Policy")}
          {this.navLink("Refer", "Refer")}
          {this.navLink("Logout", "Logout")}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray"
  },
  Profile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 25,
    borderBottomColor: '#777777',
    borderEndWidth:1,
},
profileText: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
},
name: {
    fontSize: 20,
    paddingBottom:5,
    color: 'white',
    textAlign:'left',
},
imgView: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  img: {
      height: 70,
      width: 70,
      borderRadius: 50,
  },
  toplinks: {
    height: 160,
    backgroundColor: "black"
  },
  bottomLinks: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: 450,
    paddingTop: 10
  },
  link: {
    flex: 1,
    fontSize: 20,
    paddingLeft: 14,
    padding: 6,
    margin: 5,
    textAlign: "left"
  },
  footer:{
    height: 50,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor:'lightgray',
  },
});
