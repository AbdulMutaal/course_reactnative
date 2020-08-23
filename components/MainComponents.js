import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import MenuNavigator from './MenuNavigator';
import MainNavigator from './MainNavigator';
import Home from './HomeComponent';

class Main extends Component {

    render() {
        return(
            <View style={{ flex: 1, paddingTop: Platform.OS == 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
                <MainNavigator />
            </View>
        );
    }
}

export default Main;