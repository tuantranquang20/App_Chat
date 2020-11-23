import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import NavigationUtil from '../../navigation/NavigationUtil';
import { GoogleSignin , statusCodes} from '@react-native-community/google-signin';
GoogleSignin.configure();
//  GoogleSignin.configure({
//             scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
//             webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
//             offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//             hostedDomain: '', // specifies a hosted domain restriction
//             loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
//             forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
//             accountName: '', // [Android] specifies an account name on the device that should be used
//             // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//         });
export default class LoginScreen extends Component {

    // Somewhere in your code
    _ggLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({ userInfo });
            console.log(userInfo)
            NavigationUtil.navigate("Main")

        } catch (error) {
            console.log(error)
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    _fbLogin() {
        LoginManager.logInWithPermissions(["public_profile"]).then(
            function (result) {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                } else {
                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            console.log(data.accessToken.toString())
                            NavigationUtil.navigate("Main")
                        }
                    )
                }
            },
            function (error) {
                console.log("Login fail with error: " + error);
            }
        );
    }
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableOpacity
                    onPress={() => {
                        this._fbLogin()
                    }}>
                    <Text> Facebook Login </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        marginTop: 50
                    }}
                    onPress={() => {
                        this._ggLogin()
                    }}>
                    <Text> Google Login </Text>
                </TouchableOpacity>

            </View>
        );
    }
}
