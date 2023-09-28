import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function Page() {
  return (
    <View style={tw`flex-1 bg-white items-center justify-center`}>
      <Text style={tw`text-red-600`}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}