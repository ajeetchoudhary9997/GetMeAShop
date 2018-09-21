
import React, { PureComponent } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Constants from '../Constants'
/**
 * This Component is used to get show the button with some icon which
 * we need to pass it in iconPath(i.e. require method)
 */
class TextButtonCustom extends PureComponent {
    render() {
        return (
            <View style={[styles.container]}>
                <TouchableOpacity activeOpacity={.5} onPress={this.props.onPress.bind(this)}>
                    <Image style={[styles.iconStyle, this.props.iconStyle]} source={this.props.iconPath} />
                </TouchableOpacity>
            </View>
        );
    }
}

TextButtonCustom.protoTypes = {
    iconPath: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    iconStyle: PropTypes.object.isRequired,

}
TextButtonCustom.defaultProps = {
    onPress: () => { },
    iconStyle: {}
}

export default TextButtonCustom;

const styles = StyleSheet.create({
    container: {
        margin: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconStyle: {
        height: Constants.SCREEN_MIN_DEMENTION * Constants.SOCIAL_LOGO_SIZE,
        width: Constants.SCREEN_MIN_DEMENTION * Constants.SOCIAL_LOGO_SIZE,
        margin: Constants.SCREEN_MIN_DEMENTION * .01,
        resizeMode: 'contain',
    }

});
