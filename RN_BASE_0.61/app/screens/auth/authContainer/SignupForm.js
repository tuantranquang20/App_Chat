import React, { Component, PropTypes } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native-animatable/index";

import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";
import metrics from "../../../constants/metrics";

export default class SignupForm extends Component {
  static propTypes = {};

  state = {
    phonenumber: "",
    password: "",
    fullName: ""
  };

  hideForm = async () => {
    if (this.buttonRef && this.formRef && this.linkRef) {
      await Promise.all([
        this.buttonRef.zoomOut(200),
        this.formRef.fadeOut(300),
        this.linkRef.fadeOut(300)
      ]);
    }
  };

  render() {
    const { phonenumber, password, fullName } = this.state;
    const { isLoading, onLoginLinkPress, onSignupPress } = this.props;
    const isValid = phonenumber !== "" && password !== "" && fullName !== "";
    return (
      <View style={styles.container}>
        <View style={styles.form} ref={ref => (this.formRef = ref)}>
          <CustomTextInput
            ref={ref => (this.mobileInputRef = ref)}
            placeholder={"Họ tên"}
            editable={!isLoading}
            returnKeyType={"next"}
            blurOnSubmit={false}
            withRef={true}
            onSubmitEditing={() => this.emailInputRef.focus()}
            onChangeText={value => this.setState({ fullName: value })}
            isEnabled={!isLoading}
          />
          <CustomTextInput
            ref={ref => (this.emailInputRef = ref)}
            placeholder={"Số điện thoại"}
            keyboardType={"email-address"}
            editable={!isLoading}
            returnKeyType={"next"}
            blurOnSubmit={false}
            withRef={true}
            onSubmitEditing={() => this.passwordInputRef.focus()}
            onChangeText={value => this.setState({ phonenumber: value })}
            isEnabled={!isLoading}
          />
          <CustomTextInput
            ref={ref => (this.passwordInputRef = ref)}
            placeholder={"Mật khẩu"}
            editable={!isLoading}
            returnKeyType={"done"}
            secureTextEntry={true}
            withRef={true}
            onChangeText={value => this.setState({ password: value })}
            isEnabled={!isLoading}
          />
        </View>
        <View style={styles.footer}>
          <View
            ref={ref => (this.buttonRef = ref)}
            animation={"bounceIn"}
            duration={600}
            delay={400}
          >
            <CustomButton
              onPress={() => onSignupPress(phonenumber, password, fullName)}
              isEnabled={isValid}
              isLoading={isLoading}
              buttonStyle={styles.createAccountButton}
              textStyle={styles.createAccountButtonText}
              text={"Tạo tài khoản"}
            />
          </View>
          <Text
            ref={ref => (this.linkRef = ref)}
            style={styles.loginLink}
            onPress={onLoginLinkPress}
            animation={"fadeIn"}
            duration={600}
            delay={400}
          >
            {"Bạn đã có tài khoản?"}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.DEVICE_WIDTH * 0.1
  },
  form: {
    marginTop: 20
  },
  footer: {
    height: 100,
    justifyContent: "center"
  },
  createAccountButton: {
    backgroundColor: "white"
  },
  createAccountButtonText: {
    color: "#3E464D",
    fontWeight: "bold"
  },
  loginLink: {
    color: "rgba(255,255,255,0.6)",
    alignSelf: "center",
    padding: 20
  }
});
