import { StyleSheet, Platform } from 'react-native'

import Constants from './Constants'

export default styles = StyleSheet.create({
    container: {
        marginTop: Platform.select({ ios: 21 }),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
    headingTextStyle: {
        fontSize: Constants.SCREEN_MIN_DEMENTION * Constants.HEADING_TEXT_SIZE,
        color: 'black',
        textAlign: 'left',
        fontWeight:'bold'
    },
    rowTitleStyle:{
        fontSize: (Constants.SCREEN_MIN_DEMENTION * Constants.HEADING_TEXT_SIZE)/1.3,
        color: 'black',
        textAlign: 'left',
        fontWeight:'bold'
    },
    rowBodyStyle:{
        fontSize: (Constants.SCREEN_MIN_DEMENTION * Constants.HEADING_TEXT_SIZE)/1.5,
        color: 'gray',
        textAlign: 'left',
    },
    rowDateStyle:{
        fontSize: (Constants.SCREEN_MIN_DEMENTION * Constants.HEADING_TEXT_SIZE)/1.6,
        color: 'gray',
        textAlign: 'left',
    }
})