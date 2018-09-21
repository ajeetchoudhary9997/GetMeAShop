
import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    TextInput,
    ScrollView
} from 'react-native';
import HeaderComponent from '../../utils/reuseable-component/HeaderComponent'
import Styles from '../../utils/Styles'
import Constants from '../../utils/Constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import NoteClass from '../../utils/NoteClass'

export default class EditOrAddViewItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isForCreation: this.props.navigation.getParam('isForCreation'),
            item: this.props.navigation.getParam('item')
        }
        this.onEditPress = this.onEditPress.bind(this)
        this.onLeftIconPress = this.onLeftIconPress.bind(this)
        this.onEditPress = this.onEditPress.bind(this)
        this.titleTextChange = this.titleTextChange.bind(this)
        this.bodyTextChange = this.bodyTextChange.bind(this)
    }

    /**
     * Invoked when the edit button will press in Header
     */
    onEditPress() {

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
        if (this.state.item.noteBody == undefined || this.state.item.noteTitle == undefined) { return }
        if (this.state.item.noteBody.trim() == '' || this.state.item.noteTitle.trim() == '') { return }
        if (this.state.isForCreation) {
            this.props.addNewNotes(new NoteClass(this.state.item.noteTitle, this.state.item.noteBody, new Date(), false, false))
        } else {
            this.state.item.noteUpdationTime = new Date()
            this.props.updateNotes(this.state.item)
        }
        this.props.navigation.goBack()
    }
    /**
     * called when the title text Will be change
     * @param {String} text 
     */
    titleTextChange(text) {
        let note = this.state.item
        note.noteTitle = text
        this.setState({
            item: note
        })
    }
    /**
     * called when the body text Will be change
     * @param {String} text 
     */
    bodyTextChange(text) {
        let note = this.state.item
        note.noteBody = text
        this.setState({
            item: note
        })
    }

    render() {
        return (
            <View style={Styles.container}>
                <HeaderComponent
                    editButtonText={'SAVE'}
                    isLeftIconVisible={true}
                    isEditButtonVisible={true}
                    leftIconPath={require('../../utils/images/back.png')}
                    onLeftPress={this.onLeftIconPress}
                    onEditPress={this.onEditPress}
                />
                <KeyboardAwareScrollView style={styles.container}>
                    <View style={{ backgroundColor: '#e1e1e1' }}>
                        <TextInput multiline={true} style={[Styles.headingTextStyle, { paddingLeft: 45, paddingRight: 5 }]}
                            numberOfLines={3}
                            underlineColorAndroid={'transparent'}
                            value={this.state.item.noteTitle}
                            placeholder={'Title'}
                            onChangeText={this.titleTextChange}
                        />
                    </View>
                    <TextInput style={[Styles.rowBodyStyle, { flex: 1, paddingLeft: 45, paddingTop: 15, paddingRight: 5 }]}
                        multiline={true}
                        underlineColorAndroid={'transparent'}
                        value={this.state.item.noteBody}
                        placeholder={'Body'}
                        onChangeText={this.bodyTextChange}
                    />
                </KeyboardAwareScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
});
