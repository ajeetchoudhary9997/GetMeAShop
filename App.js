import { createStackNavigator } from 'react-navigation';
import Splash from './src/screens/splash/Splash'
import HomeContainer from './src/screens/home/HomeContainer'
import ViewContainer from './src/screens/view/ViewContainer'
import EditContainer from './src/screens/edit-or-add/EditContainer'

export default createStackNavigator({
  splash: {
    screen: Splash,
    navigationOptions: { header: null }
  },
  home: {
    screen: HomeContainer,
    navigationOptions: { header: null }
  },
  view: {
    screen: ViewContainer,
    navigationOptions: { header: null }
  },
  addEdit: {
    screen: EditContainer,
    navigationOptions: { header: null }
  },
});