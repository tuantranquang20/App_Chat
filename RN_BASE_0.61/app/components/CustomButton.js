import React, { PropTypes } from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import { View } from "react-native-animatable/index";

import TouchableView from "./TouchableView";

const CustomButton = ({
  onPress,
  isEnabled,
  isLoading,
  text,
  buttonStyle,
  textStyle,
  ...otherProps
}) => {
  // const onButtonPress = isEnabled && !isLoading ? onPress : () => null;

  return (
    <View {...otherProps}>
      <TouchableView onPress={onPress} style={[styles.button, buttonStyle]}>
        {isLoading && (
          <ActivityIndicator style={styles.spinner} color={"grey"} />
        )}
        {!isLoading && <Text style={[styles.text, textStyle]}>{text}</Text>}
      </TouchableView>
    </View>
  );
};

CustomButton.propTypes = {};

CustomButton.defaultProps = {};

const styles = StyleSheet.create({
  button: {
    height: 42,
    borderWidth: 1,
    borderRadius: 3,
    alignSelf: "stretch",
    justifyContent: "center",
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  spinner: {
    height: 26
  },
  text: {
    textAlign: "center",
    fontWeight: "400",
    color: "white"
  }
});

export default CustomButton;
