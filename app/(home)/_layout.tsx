import { View, Text } from 'react-native'
import { Tabs , Slot, usePathname, Link } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ReactNode, useState } from 'react';
import tw from '../../lib/tailwind';
import Container from '../../components/widgets/Container';

const _layout = () => {
  const [tabs, setTabs] = useState<{
    label: string, href: string, icon: keyof typeof MaterialIcons.glyphMap;
  }[]>([
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'About', href: '/about', icon: 'book' },
    // { label: 'Home', href: '/4', icon: 'home' },
    // { label: 'Home', href: '/5', icon: 'home' }
  ])

  const pathname = usePathname()

  const focused = (href: string) => {
    return pathname.startsWith(href)
  }

  return (
    <View style={tw`flex-1`}>
      <Slot></Slot>

      <View style={tw`shadow bg-white`}>
        <View style={{...tw`h-14 p-2 overflow-hidden`}}>
          <View style={{...tw`flex-row -mx-2 justify-around items-center`}}>
            {tabs.map(({label, href, icon}) =>
              <View key={href} style={tw`flex-1 px-2`}>
                <View key={href} style={tw`w-full flex-col space-y-2 items-center`}>
                  <View style={tw`px-4 py-1 rounded-full ${focused(href) ? 'bg-blue-500' : ''}`}>
                    <MaterialIcons name={icon} color={tw.color(focused(href) ? 'text-white' : 'text-gray-700')} size={20} />
                  </View>
                  <Text style={tw`text-xs text-center ${focused(href) ? 'text-blue-600' : 'text-gray-600'}`} numberOfLines={2}>{label}</Text>
                </View>
              </View>
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

export default _layout