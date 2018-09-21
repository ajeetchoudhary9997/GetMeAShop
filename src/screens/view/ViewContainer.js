import React, { Component } from 'react';
import { ACTION_TYPE } from '../../redux/actions/Actions'
import { connect } from 'react-redux';
import { Provider } from 'react-redux'
import { store, persistor } from '../../redux/state/Strore'
import { PersistGate } from 'redux-persist/integration/react'

import ViewItem from './ViewItem'

const mapStateToProps = (state) => {
    return { ...state }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setNotesForUpdate: (newNote) => { dispatch({ type: ACTION_TYPE.NOTES_FOR_UPDATE, payload: { item: newNote } }) }
    }
}
const Container = connect(mapStateToProps, mapDispatchToProps)(ViewItem)

export default class ViewContainer extends React.Component {
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
