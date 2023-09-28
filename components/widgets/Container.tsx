import { View, Text, StyleProp, ViewStyle } from 'react-native'
import tw from '../../lib/tailwind'
import { ReactNode } from 'react'
import { TailwindFn } from 'twrnc'

const Container = ({children, style}: {
  children?: ReactNode,
  style?: any
}) => {
  return (
    <View style={{...tw`px-4`, ...style}}>{children}</View>
  )
}

export default Container