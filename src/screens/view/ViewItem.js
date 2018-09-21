
import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    ScrollView
} from 'react-native';
import HeaderComponent from '../../utils/reuseable-component/HeaderComponent'
import Styles from '../../utils/Styles'
import Constants from '../../utils/Constants'

export default class ViewItem extends Component {

    constructor(props) {
        super(props)
        this.onEditPress = this.onEditPress.bind(this)
        this.onLeftIconPress = this.onLeftIconPress.bind(this)
        this.onEditPress = this.onEditPress.bind(this)
        this.props.setNotesForUpdate(this.props.navigation.getParam('item'))
    }

    /**
     * Invoked when the left button(i.e. Back Button) will press in Header
     */
    onLeftIconPress() {
        this.props.navigation.goBack()
    }
    /**
     * Invoked when the edit button will press in Header
     */
    onEditPress() {
        this.props.navigation.navigate('addEdit', { item: this.props.Reducer.notesForUpdate,isForCreation:false})
    }

    render() {
        return (
            <View style={Styles.container}>
                <HeaderComponent
                    isLeftIconVisible={true}
                    isEditButtonVisible={true}
                    leftIconPath={require('../../utils/images/back.png')}
                    onLeftPress={this.onLeftIconPress}
                    onEditPress={this.onEditPress}
                />
                <ScrollView style={styles.container}>
                    <View style={{ backgroundColor: '#e1e1e1' }}>
                        <Text style={[Styles.headingTextStyle, { paddingLeft: 45, paddingRight: 5 }]}
                            numberOfLines={1}>
                            {this.props.Reducer.notesForUpdate.noteTitle}
                        </Text>
                        <Text style={[Styles.rowDateStyle, { paddingLeft: 45, paddingBottom: 10, paddingRight: 5 }]}>
                            Last updated: {this.getDateTime(this.props.Reducer.notesForUpdate.noteUpdationTime)}
                        </Text>
                    </View>
                    <Text style={[Styles.rowBodyStyle, { paddingLeft: 45, paddingTop: 15, paddingRight: 5 }]}
                    >
                        {this.props.Reducer.notesForUpdate.noteBody}
                    </Text>
                </ScrollView>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
});
