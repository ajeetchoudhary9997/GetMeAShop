
import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Image, View, Text, Platform } from 'react-native';
import Styles from '../Styles'
import PropTypes from 'prop-types';
import Constants from '../Constants'
import IconButtonCustom from './IconButtonCustom'



/**
 * This Component will be use for single item of the row
 */
class ListRowComponent extends Component {
    constructor(props) {
        super(props)

        this.onHeartPress = this.onHeartPress.bind(this)
        this.onStarPress = this.onStarPress.bind(this)
        this.onRowPress = this.onRowPress.bind(this)
    }
    onHeartPress() {
        this.props.onHeartPress(this.props.item)
    }
    onStarPress() {
        this.props.onStarPress(this.props.item)
    }
    onRowPress() {
        this.props.onRowPress(this.props.item)
    }

    render() {
        return (
            <View style={[styles.container]}>
                <TouchableOpacity style={styles.textContainer} onPress={this.onRowPress}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[Styles.rowTitleStyle, { flex: 1, paddingLeft: 5, paddingRight: 5 }]}
                            numberOfLines={1}>
                            {this.props.item.noteTitle}
                        </Text>
                        <IconButtonCustom iconPath={this.props.item.isFavourite ? require('../images/star_fill.png') : require('../images/star.png')} iconStyle={styles.rightIconStyle} onPress={this.onStarPress} />
                        <IconButtonCustom iconPath={this.props.item.isLiked ? require('../images/heart_fill.png') : require('../images/heart.png')} iconStyle={styles.rightIconStyle} onPress={this.onHeartPress} />

                    </View>
                    <Text style={[Styles.rowBodyStyle, { paddingLeft: 5, paddingRight: 5 }]}
                        numberOfLines={1}
                    >
                        {this.props.item.noteBody}
                    </Text>
                    <Text style={[Styles.rowDateStyle, { paddingLeft: 5, paddingRight: 5 }]}>
                        {this.getDateTime(this.props.item.noteUpdationTime)}
                    </Text>
                </TouchableOpacity>
                <View style={styles.underlineStyle} />
            </View>
        );
    }
    getDateTime(time) {
        try{
            console.log('======================================time: ', time);
            return time.toLocaleString()
        }catch(e){
            return new Date().toLocaleString()
        }
    }
}

ListRowComponent.protoTypes = {
    item: PropTypes.object.isRequired,
    onStarPress: PropTypes.func,
    onHeartPress: PropTypes.func,
    onRowPress: PropTypes.func,
}
ListRowComponent.defaultProps = {
    item: {},
    onStarPress: () => { },
    onHeartPress: () => { },
    onRowPress: () => { },
}

export default ListRowComponent;

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    textContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    rightIconStyle: {
        height: Constants.SCREEN_MIN_DEMENTION * Constants.HEADER_ICON_SIZE,
        width: Constants.SCREEN_MIN_DEMENTION * Constants.HEADER_ICON_SIZE,
        marginLeft: 3,
        resizeMode: 'contain',
    },
    underlineStyle: {
        height: 1,
        width: '100%',
        backgroundColor: '#a1a1a1',
        marginTop: 25,
    }

});
