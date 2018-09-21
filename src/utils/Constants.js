import { Dimensions } from 'react-native'
var { height, width } = Dimensions.get('window');
export default {
  SCREEN_HEIGHT: height,
  SCREEN_WIDTH: width,
  SCREEN_MIN_DEMENTION: height > width ? width : height,
  SCREEN_MAX_DEMENTION: height < width ? width : height,

  SPLASH_MINIMUM_TIME: 3000,
  SPLASH_LOGO_SIZE: .3, // percent of min dimensions
  HEADER_ICON_SIZE: .065, // percent of min dimensions
  HEADING_TEXT_SIZE: .06, // percent of min dimensions

  HOME_ANIMATION_MAX_WIDTH: .35//percent of min dimensions
}