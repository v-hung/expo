import { View, Text, Animated, ViewStyle, TextStyle } from 'react-native'
import tw from '../../lib/tailwind';
import { ReactNode } from 'react';
import Container from './Container';
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;

const AppBar = ({
  title, leading, actions, style, titleStyle, containerStyle
}: {
  title: string | ReactNode,
  leading?: ReactNode,
  actions?: ReactNode,
  style?: ViewStyle, titleStyle?: TextStyle,
  containerStyle?: ViewStyle
}) => {

  return (
    <Animated.View style={{...tw`shadow bg-white`, ...{paddingTop: statusBarHeight}, ...style}}>
      <Container style={{...tw`h-14 flex-row items-center`, ...containerStyle}}>
        { leading ? leading : null }
        { typeof title == "string"
          ? <Text style={{...tw`flex-1 text-lg text-center`, ...titleStyle}}>{title}</Text>
          : <View style={tw`flex-1`}>{title}</View>
        }
        { actions ? actions : null }
      </Container>
    </Animated.View>
  )
}

export default AppBar