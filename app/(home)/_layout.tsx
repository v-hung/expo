import { View, Text, TouchableOpacity } from 'react-native'
import { Tabs , Slot, usePathname, Link, router } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode, useState } from 'react';
import tw from '../../lib/tailwind';
import useTheme from '../../stores/theme';

const _layout = () => {
  const { primary, primary2 } = useTheme()
  const [tabs, setTabs] = useState<{
    label: string, href: string, icon: keyof typeof MaterialIcons.glyphMap;
  }[]>([
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'Vegetable', href: '/about', icon: 'eco' },
    { label: 'Settings', href: '/settings', icon: 'settings' }
  ])

  const pathname = usePathname()

  const focused = (href: string) => {
    const paths = pathname.split('/')
    const hrefs = href.split('/')

    for (let i = 0; i < hrefs.length; i++) {
      if (hrefs[i] != paths[i]) {
        return false
      }
    }

    return true
  }

  return (
    <View style={tw`flex-1`}>
      <Slot></Slot>

      <View style={tw`shadow bg-white border-t border-gray-100`}>
        <View style={{...tw`h-14 p-2 overflow-hidden`}}>
          <View style={{...tw`h-full flex-row -mx-2 justify-around items-center`}}>
            {tabs.map(({label, href, icon}) =>
              <TouchableOpacity key={href} style={tw`flex-1 px-2`} onPress={() => router.push(href)}>
                <View key={href} style={tw`w-full flex-col items-center`}>
                  <ItemColor isGradient={focused(href)}>
                    <MaterialIcons name={icon} color={tw.color(focused(href) ? 'text-white' : 'text-gray-500')} size={20} />
                  </ItemColor>
                  {/* <Text style={{...tw`text-xs text-center`, color: focused(href) ? primary : tw.color('text-gray-600')}} numberOfLines={2}>{label}</Text> */}
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  )

  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen name='index' options={{ 
        href: '/', tabBarLabel: 'Home', 
        tabBarIcon: ({ focused, color, size }) => {
          return <MaterialIcons name='home' color={color} size={size} />
        }
      }} />
      <Tabs.Screen name='about' options={{
        href: '/about', tabBarLabel: 'About',
        tabBarIcon: ({ focused, color, size }) => {
          return <MaterialIcons name='settings' color={color} size={size} />
        }
      }} />
    </Tabs>
  )
}

const ItemColor = ({
  isGradient, children
}: {
  isGradient: boolean,
  children: ReactNode
}) => {
  const { primary, primary2 } = useTheme()
  if (isGradient) {
    return <LinearGradient 
      colors={[primary, primary2]} 
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      locations={[0.6, 1]}
      style={tw`px-4 py-1 rounded-full`}
    >
      {children}
    </LinearGradient>
  }
  else {
    return <View style={tw`px-4 py-1 rounded-full`}>{children}</View>
  }
}

export default _layout