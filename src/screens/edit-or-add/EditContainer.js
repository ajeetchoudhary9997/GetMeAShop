import React, { Component } from 'react';
import { ACTION_TYPE } from '../../redux/actions/Actions'
import { connect } from 'react-redux';
import { Provider } from 'react-redux'
import { store, persistor } from '../../redux/state/Strore'
import { PersistGate } from 'redux-persist/integration/react'


import EditOrAddViewItem from './EditOrAddViewItem'

const mapStateToProps = (state) => {
    return { ...state }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewNotes: (newNote) => { dispatch({ type: ACTION_TYPE.ADD_NOTES, payload: { item: newNote } }) },
        updateNotes: (newNote) => { dispatch({ type: ACTION_TYPE.UPDATE_NOTES, payload: { item: newNote } }) }
    }
}
const Container = connect(mapStateToProps, mapDispatchToProps)(EditOrAddViewItem)

export default class HomeContainer extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Container {...this.props} />
                </PersistGate>
            </Provider>
        )
    }
}
