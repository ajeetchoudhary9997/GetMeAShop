
import React, { PureComponent } from 'react';
import { TouchableOpacity, StyleSheet, Image, View, Text, Platform } from 'react-native';
import Styles from '../Styles'
import PropTypes from 'prop-types';
import Constants from '../Constants'
import IconButtonCustom from './IconButtonCustom'
import TextButtonCustom from './TextButtonCustom'


/**
 * This Component will be use to custom Header in Whole the Application,
 * It may contain left icon(it may be back button) and some title in the middle and some right icon or textButtons based on
 * conditions
 */
class HeaderComponent extends PureComponent {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.subContainer]}>
                    {this.props.isLeftIconVisible && <View style={styles.leftIconContainer} >
                        <IconButtonCustom iconPath={this.props.leftIconPath} iconStyle={styles.leftIconStyle} onPress={this.props.onLeftPress} />
                    </View>}
                    <View style={styles.textContainer}>
                        <Text style={[Styles.headingTextStyle, { paddingLeft: 5, paddingRight: 5 }]}>
                            {this.props.heading}
                        </Text>
                    </View>
                    <View style={styles.rightIconContainer} >
                        {this.props.isFilterVisible && <IconButtonCustom
                            iconPath={require('../images/add_new.png')}
                            iconStyle={styles.rightIconStyle}
                            onPress={this.props.onAddNewPress} />}
                        {this.props.isFilterVisible && <IconButtonCustom
                            iconPath={require('../images/sort.png')}
                            iconStyle={styles.rightIconStyle}
                            onPress={this.props.onFilterPress} />}
                        {this.props.isEditButtonVisible && <TextButtonCustom
                            buttonText={this.props.editButtonText}
                            onPress={this.props.onEditPress} />}
                    </View>
                </View>
            </View>
        );
    }
}

HeaderComponent.protoTypes = {
    heading: PropTypes.string.isRequired,
    editButtonText: PropTypes.string,
    isLeftIconVisible: PropTypes.bool,
    isFilterVisible: PropTypes.bool,
    isEditButtonVisible: PropTypes.bool,
    leftIconPath: PropTypes.object,
    onFilterPress: PropTypes.func,
    onAddNewPress: PropTypes.func,
    onEditPress: PropTypes.func,
    onLeftPress: PropTypes.func,
}
HeaderComponent.defaultProps = {
    heading: '',
    editButtonText:'EDIT',
    isFilterVisible: false,
    isLeftIconVisible: false,
    isEditButtonVisible:false,
    onFilterPress: () => { },
    onAddNewPress: () => { },
    onLeftPress: () => { },
    onEditPress: () => { },
}

export default HeaderComponent;

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.select({ ios: 21 }),
        paddingTop: 15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e1e1e1',
    },
    subContainer: {
        width: '95%',
        marginLeft: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    leftIconContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
    },
    rightIconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingTop: 5,
        paddingBottom: 5,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    leftIconStyle: {
        height: Constants.SCREEN_MIN_DEMENTION * Constants.HEADER_ICON_SIZE,
        width: Constants.SCREEN_MIN_DEMENTION * Constants.HEADER_ICON_SIZE,
        resizeMode: 'contain',
    },
    rightIconStyle: {
        height: Constants.SCREEN_MIN_DEMENTION * Constants.HEADER_ICON_SIZE,
        width: Constants.SCREEN_MIN_DEMENTION * Constants.HEADER_ICON_SIZE,
        marginLeft: 3,
        resizeMode: 'contain',
    },
    cartCountContainer: {
        position: 'absolute',
        right: 0
    }

});
