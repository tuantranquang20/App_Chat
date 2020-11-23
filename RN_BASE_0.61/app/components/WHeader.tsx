import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  StatusBar
} from "react-native";
import { Header } from "react-native-elements";
import NavigationUtil from "../navigation/NavigationUtil";
import Icon from "./Icon";
import * as theme from "../constants/Theme";
import R from "@app/assets/R";
interface Props {
  color?: string;
  back?: boolean;
  /**
   * View nút phải
   */
  rightButton?: JSX.Element;
  /**
   * Nhấn nút phải
   */
  rightPress?: () => void;
  /**
   * View nút trái
   */
  leftButton?: JSX.Element;
  /**
   * Nhấn nút trái
   */
  leftPress?: () => void;
  /**
   * Title thanh header
   */
  titleHeader: string;
}

export default class RNHeader extends Component<Props> {
  render() {
    const {
      color,
      back,
      titleHeader,
      rightButton,
      rightPress,
      leftButton,
      leftPress,
      ...props
    } = this.props;
    return (
      <Header
        placement="center"
        containerStyle={{
          backgroundColor: theme.colors.headerColor,
          borderBottomColor: theme.colors.active
        }}
        leftComponent={
          <View>
            {back ? (
              <TouchableOpacity
                style={styles.leftComp}
                onPress={NavigationUtil.goBack}
              >
                <Icon.Ionicons
                  name="ios-arrow-round-back"
                  size={35}
                  color={theme.colors.white}
                />
              </TouchableOpacity>
            ) : leftButton ? (
              <TouchableOpacity style={styles.leftComp} onPress={leftPress}>
                {leftButton}
              </TouchableOpacity>
            ) : null}
          </View>
        }
        centerComponent={
          <Text
            style={[
              {
                fontSize: 18,
                fontFamily: R.fonts.roboto_medium
              },
              { color: color ? color : "white" }
            ]}
          >
            {titleHeader}
          </Text>
        }
        rightComponent={
          rightButton ? (
            <View>
              {rightButton && (
                <TouchableOpacity style={styles.rightComp} onPress={rightPress}>
                  {rightButton}
                </TouchableOpacity>
              )}
            </View>
          ) : (
              <View></View>
            )
        }
        statusBarProps={
          {
            barStyle: 'light-content',
            translucent: true,
            backgroundColor: 'transparent'
          }
        }
      >
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  leftComp: {
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  rightComp: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  }
});
