
import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    FlatList,
    Animated,
    TouchableOpacity
} from 'react-native';
import HeaderComponent from '../../utils/reuseable-component/HeaderComponent'
import Styles from '../../utils/Styles'
import Constants from '../../utils/Constants'
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import ListRowComponent from '../../utils/reuseable-component/ListRowComponent'
import TextIconButtonCustom from '../../utils/reuseable-component/TextIconButtonCustom'
import TextIconCrossButtonCustom from '../../utils/reuseable-component/TextIconCrossButtonCustom'
import TextBorderButtonCustom from '../../utils/reuseable-component/TextBorderButtonCustom'

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            animPositionLeft: false,
            isHeartFilterSelected: false,
            isFavouriteFilterSelected: false,
        }
        console.log('Props', this.props.state);

        this.animate = new Animated.Value(0)
        this.onFilterPress = this.onFilterPress.bind(this)
        this.onAddNewPress = this.onAddNewPress.bind(this)
        this.onHeartClick = this.onHeartClick.bind(this)
        this.onFavouriteClick = this.onFavouriteClick.bind(this)
        this.onRowClick = this.onRowClick.bind(this)
        this.onHeartFilterClick = this.onHeartFilterClick.bind(this)
        this.onFavouriteFilterClick = this.onFavouriteFilterClick.bind(this)
        this.onApplyFilter = this.onApplyFilter.bind(this)
    }

    /**
     * animate view to the Left side
     */
    animateLeft() {
        this.setState({
            isHeartFilterSelected: this.props.Reducer.isHeartFilterApply,
            isFavouriteFilterSelected: this.props.Reducer.isFavouriteFilterApply,
        })
        Animated.timing(this.animate, {
            timing: 500,
            toValue: 1
        }).start(() => {
            this.setState({
                animPositionLeft: true
            })
        })
    }
    /**
     * animate view to the right side
     */
    animateRight() {
        Animated.timing(this.animate, {
            timing: 500,
            toValue: 0
        }).start(() => {
            this.setState({
                animPositionLeft: false
            })
        })
    }
    /**
     * Invoked when the sort button will press in Header
     */
    onFilterPress() {
        this.state.animPositionLeft ? this.animateRight() : this.animateLeft()
    }
    /**
    * Invoked when the sort button will press in Header
     */
    onAddNewPress() {
        this.props.navigation.navigate('addEdit', { item: {}, isForCreation: true })
    }

    /**
     * invoked when heart icon clicked
     */
    onHeartClick(item) {
        item.isLiked = !item.isLiked
        this.props.updateNotes(item)
    }
    /**
     * invoked when favourite icon clicked
     */
    onFavouriteClick(item) {
        item.isFavourite = !item.isFavourite
        this.props.updateNotes(item)
    }
    /**
     * invoked when complete row clicked
     */
    onRowClick(item) {
        this.props.navigation.navigate('view', { item: item })
    }
    /**
     * invoked when hearted filter clicked
     */
    onHeartFilterClick() {
        this.setState({
            isHeartFilterSelected: !this.state.isHeartFilterSelected
        })
    }
    /**
     * invoked when favourite filter clicked
     */
    onFavouriteFilterClick() {
        this.setState({
            isFavouriteFilterSelected: !this.state.isFavouriteFilterSelected
        })
    }
    /**
     * invoked when favourite filter clicked
     */
    onApplyFilter() {
        this.props.applyFilter(this.state.isHeartFilterSelected, this.state.isFavouriteFilterSelected)
        this.onFilterPress()
    }
    /**
     * Invoked when delete icon clicked
     */
    deleteItem(item) {
        this.props.delete(item)
    }

    render() {
        const translateLeftView = this.animate.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -(Constants.SCREEN_WIDTH * Constants.HOME_ANIMATION_MAX_WIDTH)]
        })
        let translateRightView = this.animate.interpolate({
            inputRange: [0, 1],
            outputRange: [Constants.SCREEN_WIDTH, (Constants.SCREEN_WIDTH - (Constants.SCREEN_WIDTH * Constants.HOME_ANIMATION_MAX_WIDTH))]
        })

        return (
            <View style={Styles.container}>
                <Animated.View style={{ width: '100%', flex: 1, transform: [{ translateX: translateLeftView }] }}>
                    <HeaderComponent
                        heading={'Notely'}
                        isFilterVisible={true}
                        onAddNewPress={this.onAddNewPress}
                        onFilterPress={this.onFilterPress}
                    />
                    <View style={styles.container}>

                        <FlatList
                            data={this.props.Reducer.todoList}
                            keyExtractor={(item, index) => { return ''+item.id+'' + index }}
                            extraData={this.props.Reducer}
                            renderItem={({ item }) => (
                                <SwipeRow
                                    rightOpenValue={-95}
                                    disableRightSwipe={true}
                                >
                                    {
                                        this.hideRowComponent(item)
                                    }
                                    <ListRowComponent item={item}
                                        onStarPress={this.onFavouriteClick}
                                        onHeartPress={this.onHeartClick}
                                        onRowPress={this.onRowClick}
                                    />

                                </SwipeRow>
                            )}
                        />
                    </View>
                </Animated.View>
                <Animated.View style={[{ width: (Constants.SCREEN_WIDTH), justifyContent: 'flex-start', alignItems: 'flex-start', backgroundColor: 'rgba(0,0,0,.5)', height: '100%', position: 'absolute' }, { transform: [{ translateX: translateRightView }] }]}>
                    <View style={{ paddingTop: 25, paddingBottom: 20 }}>
                        <TextIconCrossButtonCustom buttonText={"FITLER   "} onPress={this.onFilterPress} />
                    </View>
                    <View>
                        <TextIconButtonCustom buttonText={"Hearted  "} onPress={this.onHeartFilterClick} isChecked={this.state.isHeartFilterSelected} />
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <TextIconButtonCustom buttonText={"Favourite"} onPress={this.onFavouriteFilterClick} isChecked={this.state.isFavouriteFilterSelected} />
                    </View>
                    <View style={{ paddingTop: 10, position: 'absolute', bottom: 5 }}>
                        <TextBorderButtonCustom buttonText={"  APPLY  "} onPress={this.onApplyFilter} />
                    </View>
                </Animated.View>
            </View>
        );
    }
    hideRowComponent(item) {
        return <View style={styles.hideViewContainer}>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => { this.deleteItem(item) }}>
                <Image style={styles.deleteIconStyle}
                    source={require('../../utils/images/delete_white.png')} />
                <Text style={styles.backTextWhite}>Delete</Text>
            </TouchableOpacity>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    hideViewContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#E3263D',
        alignItems: 'flex-end',
        paddingRight: 30
    },
    backTextWhite: {
        fontSize: (Constants.SCREEN_MIN_DEMENTION * Constants.HEADING_TEXT_SIZE) / 1.5,
        color: 'white'
    },
    deleteIconStyle: {
        height: Constants.SCREEN_MIN_DEMENTION * Constants.HEADER_ICON_SIZE,
        width: Constants.SCREEN_MIN_DEMENTION * Constants.HEADER_ICON_SIZE,
        marginLeft: 3,
        resizeMode: 'contain',
    },
});
