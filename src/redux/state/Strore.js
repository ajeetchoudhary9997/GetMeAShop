import { AsyncStorage } from 'react-native'
import { combineReducers, createStore } from 'redux'
import Reducer from '../reducer/Reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native


const AppReducer = combineReducers({
    Reducer
})
const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
  }
// const rootReducer = (state, action) => {
//     new AppReducer(state, action)
// }
const persistedReducer = persistReducer(persistConfig, AppReducer)

export  var store = createStore(persistedReducer)
export var persistor = persistStore(store)