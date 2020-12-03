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
  Keyboard,
  FlatList
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
import { requestRoomChat } from "@app/constants/Api";
import AsyncStorage from "@react-native-community/async-storage";
import { connect } from "react-redux";
import { getRoomAction } from "@action";

const { width, height } = Dimensions.get("window");
class UserScreen extends Component {
  // async componentDidMount() {
  //   // console.log(await AsyncStorage.getItem("TOKEN"));
  //   try {
  //     const res = await requestRoomChat();
  //     console.log(res, "12345");
  //   } catch (error) {
  //     console.log(error, "99999");
  //   }
  // }
  componentDidMount = async () => {
    await this.props.getRoomAction();
  };
  state = {
    search: ""
  };

  render() {
    const DATA = this.props.stateRoom.data?.data;
    console.log(DATA, " tuan sa le");

    const user = this.props.navigation.state.params.params;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.view_header}>
              <Image style={styles.user_avatar} source={{ uri: user.avatar }} />
              <Text style={styles.name_user}>{user.name}</Text>
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
          {/* <CustomFriends
            source={require("../assets/images/ic_user.png")}
            nameFriend={"Hiển Mixi"}
            preMessage={"M thấy t đẹp trai k?"}
            time={"09:15"}
          /> */}
          <FlatList
            data={DATA || []}
            renderItem={(item, index) => {
              console.log(item, " tuan sa le");
              return <CustomFriends source={{ uri: item.item?.avatar }} nameFriend={item.item?.name} />;
            }}
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

const mapStateToProps = state => ({
  stateRoom: state.roomReducer
});

const mapDispatchToProps = {
  getRoomAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserScreen);
