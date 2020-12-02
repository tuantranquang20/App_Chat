import React, { Component } from "react";
import { requestLogin } from "@app/constants/Api";
import AuthScreen from "./authContainer";
import AsyncStorage from "@react-native-community/async-storage";
import NavigationUtil from "@app/navigation/NavigationUtil";
export default class LoginScreen extends Component {
  state = {
    isLoggedIn: false, // Is the user authenticated?
    isLoading: false, // Is the user loggingIn/signinUp?
    isAppReady: false // Has the app completed the login animation?
  };

  _simulateLogin = async (username, password) => {
    try {
      const result = await requestLogin(username, password);
      await AsyncStorage.setItem("TOKEN", result?.token);
      const tk = await AsyncStorage.getItem("TOKEN");
      if (tk) {
        NavigationUtil.navigate("Home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  _simulateSignup = (username, password, fullName) => {
    this.setState({ isLoading: true });
    setTimeout(
      () => this.setState({ isLoggedIn: true, isLoading: false }),
      1000
    );
  };

  render() {
    // if (this.state.isAppReady) {
    //   return (
    //     <HomeScreen
    //       logout={() => this.setState({ isLoggedIn: false, isAppReady: false })}
    //     />
    //   );
    // } else {
    return (
      <AuthScreen
        login={this._simulateLogin}
        signup={this._simulateSignup}
        isLoggedIn={this.state.isLoggedIn}
        isLoading={this.state.isLoading}
        onLoginAnimationCompleted={() => this.setState({ isAppReady: true })}
      />
    );
  }
  // }
}
