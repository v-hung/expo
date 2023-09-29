import { View, Text, TouchableOpacity, Pressable, TouchableOpacityProps, GestureResponderEvent, ViewStyle } from 'react-native'
import { RefAttributes, ReactNode } from "react";
import tw from '../../lib/tailwind';
import { LinearGradient } from 'expo-linear-gradient';
import useTheme from '../../stores/theme';

const Button = (props: {
  textStyle?: ViewStyle,
  children: ReactNode,
  isGradient?: boolean
  onPress?: (event: GestureResponderEvent) => void
  style?: ViewStyle
}) => {
  const { isGradient = true, onPress, style } = props

  const { primary, primary2 } = useTheme()

  return (
    <TouchableOpacity onPress={onPress}>
      <ItemColor
        isGradient={true}
        style={{...tw`px-4 py-1 rounded-full shadow`, backgroundColor: primary, ...style}}
      >
        <Text style={{...tw`text-base text-center font-semibold text-white`, ...props.textStyle}}>{props.children}</Text>
      </ItemColor>
    </TouchableOpacity>
    
  )
}

const ItemColor = ({
  isGradient = true, children, style
}: {
  isGradient: boolean,
  children: ReactNode,
  style?: ViewStyle
}) => {
  const { primary, primary2 } = useTheme()

  const commonStyle = {...tw`px-4 py-1 rounded-full`, ...style}

  if (isGradient) {
    return <LinearGradient 
      colors={[primary, primary2]} 
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      locations={[0.6, 1]}
      style={commonStyle}
    >
      {children}
    </LinearGradient>
  }
  else {
    return <View style={commonStyle}>{children}</View>
  }
}

export default Button