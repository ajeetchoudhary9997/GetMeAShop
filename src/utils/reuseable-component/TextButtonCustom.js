
import React, { PureComponent } from 'react';
import { StyleSheet, View, Image, TouchableOpacity ,Text} from 'react-native';
import PropTypes from 'prop-types';
import Constants from '../Constants'
/**
 * This Component is used to get show the button with some Text
 */
class TextButtonCustom extends PureComponent {
    render() {
        return (
            <View style={[styles.container]}>
                <TouchableOpacity activeOpacity={.5} onPress={this.props.onPress.bind(this)}>
                    <Text style={[styles.buttonTextStyle]} >{this.props.buttonText}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

TextButtonCustom.protoTypes = {
    buttonText: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,

}
TextButtonCustom.defaultProps = {
    buttonText: 'Button',
    onPress: () => { },
}

export default TextButtonCustom;

const styles = StyleSheet.create({
    container: {
        margin: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextStyle:{
        fontSize: (Constants.SCREEN_MIN_DEMENTION * Constants.HEADING_TEXT_SIZE)/1.6,
        color: 'gray',
        textAlign: 'left',
    }

});
