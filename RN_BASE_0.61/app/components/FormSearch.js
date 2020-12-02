import React, { Component, PropTypes } from "react";
import { View, TextInput, Dimensions, StyleSheet, Image } from "react-native";
import theme from "@theme";

const { width } = Dimensions.get("window");

export default class FormSearch extends Component {
  render() {
    const { style, styleInputSearch,  ...otherProps } = this.props;
    return (
      <View style={[styles.main, style]}>
        <Image
          source={require("../assets/images/ic_search.png")}
          style={[styles.icon_search]}
        />
        <TextInput
          {...otherProps}
          style={[styles.input_search, styleInputSearch]}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    width: 0.92 * width,
    paddingVertical: 9,
    // height: 31,
    // backgroundColor: "red",
    marginTop: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: theme.colors.lightGrey
  },
  icon_search: {
    width: 15.5,
    height: 15.5
  },
  input_search: {
    flex: 1,
    fontSize: 15,
    marginLeft: 7
  }
});
