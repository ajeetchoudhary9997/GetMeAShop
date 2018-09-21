import React, { Component } from 'react';
import { ACTION_TYPE } from '../../redux/actions/Actions'
import { connect } from 'react-redux';
import { Provider } from 'react-redux'
import { store, persistor } from '../../redux/state/Strore'
import { PersistGate } from 'redux-persist/integration/react'

import Home from './Home'

const mapStateToProps = (state) => {
    return { ...state }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNotes: (newNote) => { dispatch({ type: ACTION_TYPE.UPDATE_NOTES, payload: { item: newNote } }) },
        delete: (newNote) => { dispatch({ type: ACTION_TYPE.DELETE_NOTES, payload: { item: newNote } }) },
        applyFilter: (isHeartFilterApply,isFavouriteFilterApply) => { dispatch({ type: ACTION_TYPE.APPLY_FILTER, payload: { isHeartFilterApply: isHeartFilterApply,isFavouriteFilterApply:isFavouriteFilterApply } }) }
    }
}
const Container = connect(mapStateToProps, mapDispatchToProps)(Home)

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
