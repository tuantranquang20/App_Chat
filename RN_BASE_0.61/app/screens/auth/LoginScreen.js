import React, { Component } from "react";

import AuthScreen from "./authContainer";
// import HomeScreen from "./containers/HomeScreen";
export default class LoginScreen extends Component {
  state = {
    isLoggedIn: false, // Is the user authenticated?
    isLoading: false, // Is the user loggingIn/signinUp?
    isAppReady: false // Has the app completed the login animation?
  };

  _simulateLogin = (username, password) => {
    this.setState({ isLoading: true });
    setTimeout(
      () => this.setState({ isLoggedIn: true, isLoading: false }),
      1000
    );
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
