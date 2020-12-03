import React, { Component, PropTypes } from "react";
import {
  View,
  TextInput,
  Dimensions,
  StyleSheet,
  Image,
  Text
} from "react-native";
import theme from "@theme";

const { width } = Dimensions.get("window");

export default class CustomFriends extends Component {
  render() {
    const { time, preMessage, nameFriend, ...otherProps } = this.props;
    return (
      <View style={styles.main}>
        <Image style={styles.avatar_friend} {...otherProps} />
        <View
          style={{
            flex: 1,
            marginLeft: 25,
            justifyContent: "space-between",
            height: 50
          }}
        >
          <Text style={styles.name_friend} {...otherProps}>
            {nameFriend}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text numberOfLines={1} style={styles.pre_message}>
              {preMessage}
            </Text>
            <Text style={styles.text_time}>{time}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    width: width,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 5,
  },
  avatar_friend: {
    height: 55,
    width: 55,
    borderRadius: 28,
    resizeMode: "contain"
  },
  name_friend: {
    fontSize: 18,
    fontFamily: "Roboto-Medium",
    color: "#151515"
  },
  pre_message: {
    width: 124,
    color: theme.colors.grey,
    fontSize: 14,
    fontFamily: "Roboto-Medium"
  },
  text_time: {
    color: theme.colors.grey,
    fontSize: 14,
    fontFamily: "Roboto-Medium",
    marginLeft: 20
  }
});
