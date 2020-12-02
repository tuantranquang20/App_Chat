import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
// import { Text, View } from "react-native-animatable/index";
import FormSearch from "../components/FormSearch";
import CustomFriends from "../components/CustomFriends";
import i18 from "@i18";
import theme from "@theme";
import R from "@R";
import NavigationUtil from "@app/navigation/NavigationUtil";
import { SCREEN_ROUTER } from "@app/constants/Constant";
import DropdownAlertUtil from "@app/components/DropdownAlertUtil";
import OneSignal from "react-native-onesignal";
import reactotron from "reactotron-react-native";
import AwsomeFont from "../components/Icon";
import WHeader from "@app/components/WHeader";

const { width, height } = Dimensions.get("window");
export default class UserScreen extends Component {
  async componentDidMount() {}
  state = {
    search: ""
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.view_header}>
              <Image
                style={styles.user_avatar}
                source={require("../assets/images/ic_user.png")}
              />
              <Text style={styles.name_user}>Tuấn Thái Bình</Text>
            </View>
          </View>
          <FormSearch
            placeholder={"Tìm kiếm"}
            onChangeText={text => {
              this.setState({
                ...this.state,
                search: text
              });
            }}
            maxLength={100}
          />
          <CustomFriends
            source={require("../assets/images/ic_user.png")}
            nameFriend={"Hiển Mixi"}
            preMessage={"M thấy t đẹp trai k?"}
            time={"09:15"}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  header: {
    height: 120,
    width: width,
    backgroundColor: theme.colors.pacificBlue,
    paddingHorizontal: 15
  },
  view_header: {
    flexDirection: "row",
    top: 50,
    // backgroundColor: "red",
    alignItems: "center"
  },
  user_avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
    resizeMode: "contain"
  },
  name_user: {
    color: "white",
    marginLeft: 25,
    fontSize: 17,
    fontFamily: "Roboto-Medium"
  }
});
