
import React, { PureComponent } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import Constants from '../Constants'
/**
 * This Component is used to get show the button with some Text
 */
class TextButtonCustom extends PureComponent {
    render() {
        return (
            <View style={[styles.container]}>
                <TouchableOpacity activeOpacity={.5} onPress={this.props.onPress.bind(this)} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Text style={[styles.buttonTextStyle, { color: this.props.isChecked ? '#16CDC3' : 'white' }]} >{this.props.buttonText}</Text>
                    <Image style={[styles.iconStyle]} source={this.props.isChecked ? require('../../utils/images/check_fill.png') : require('../../utils/images/check.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}

TextButtonCustom.protoTypes = {
    buttonText: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    isChecked: PropTypes.bool
}
TextButtonCustom.defaultProps = {
    buttonText: 'Button',
    onPress: () => { },
    isChecked: false
}

export default TextButtonCustom;

const styles = StyleSheet.create({
    container: {
        margin: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextStyle: {
        fontSize: (Constants.SCREEN_MIN_DEMENTION * Constants.HEADING_TEXT_SIZE) / 1.4,
        textAlign: 'left',
        marginRight:20,
        marginLeft:5
    },
    iconStyle: {
        height: (Constants.SCREEN_MIN_DEMENTION * Constants.HEADER_ICON_SIZE) / 1.4,
        width: (Constants.SCREEN_MIN_DEMENTION * Constants.HEADER_ICON_SIZE) / 1.4,
        margin: Constants.SCREEN_MIN_DEMENTION * .01,
        resizeMode: 'contain',
    }


});
