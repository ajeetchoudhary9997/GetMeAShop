/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';
import Styles from '../../utils/Styles'
import Constants from '../../utils/Constants'

import { StackActions, NavigationActions } from 'react-navigation';
const resetToSignIn = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'home' })],
});


export default class Splash extends Component {
    
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(resetToSignIn)
        }, Constants.SPLASH_MINIMUM_TIME);
    }
    render() {
        return (
            <View style={Styles.container}>
                <Image style={styles.imageStyle} source={require('../../utils/images/splash_logo.png')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        width: Constants.SCREEN_MIN_DEMENTION * Constants.SPLASH_LOGO_SIZE,
        height: Constants.SCREEN_MIN_DEMENTION * Constants.SPLASH_LOGO_SIZE,
        resizeMode: Image.resizeMode.contain
    }
});
