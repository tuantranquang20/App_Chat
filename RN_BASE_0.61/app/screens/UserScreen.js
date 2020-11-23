import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import i18 from '@i18';
import theme from '@theme'
import R from '@R'
import NavigationUtil from '@app/navigation/NavigationUtil';
import { SCREEN_ROUTER } from '@app/constants/Constant';
import DropdownAlertUtil from '@app/components/DropdownAlertUtil';
import OneSignal from "react-native-onesignal";
import reactotron from 'reactotron-react-native';
import AwsomeFont from '../components/Icon'
import WHeader from '@app/components/WHeader'
export default class UserScreen extends Component {

    async componentDidMount() {

    }

    render() {
        return (
            <View style={{
                flex: 1,
                // justifyContent: 'center',
                // alignItems: 'center'
            }}>
                <WHeader
                    titleHeader = {R.strings.user}
                    color = {theme.colors.headerTitle}
                />
                <TouchableOpacity
                    onPress={() => {
                        OneSignal.getPermissionSubscriptionState((status) => {
                            userID = status.userId;
                            DropdownAlertUtil.showAlert("Thông báo", "DeviceID của OneSignal là : " + userID, () => {
                                alert("tap action")
                            })
                        });
                    }}>
                    <Text
                        style={[theme.fonts.bold17,]}
                    >{R.strings.update_user_info}</Text>
                    <AwsomeFont.AntDesign
                        name = 'home'
                    />
                    <Image
                        style={{
                            width: 100,
                            height: 100
                        }}
                        source={R.images.ic_home}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}
