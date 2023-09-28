import { View, Text } from 'react-native'
import tw from '../../lib/tailwind';
import { ReactNode } from 'react';
import Container from './Container';
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;

const AppBar = ({
  title, leading, actions, style, textStyle, containerStyle
}: {
  title: string,
  leading?: ReactNode,
  actions?: ReactNode,
  style?: any, textStyle?: any,
  containerStyle?: any
}) => {

  return (
    <View style={{...tw`shadow bg-white`, ...{paddingTop: statusBarHeight}, ...style}}>
      <Container style={{...tw`h-14 flex-row space-x-4 items-center`, ...containerStyle}}>
        { leading ? leading : null }
        <Text style={{...tw`flex-1 text-lg text-center`, ...textStyle}}>{title}</Text>
        { actions ? actions : null }
      </Container>
    </View>
  )
}

export default AppBar