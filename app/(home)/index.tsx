import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, Text, TextInput, View } from 'react-native';
import tw from 'twrnc';
import { Link, Stack } from 'expo-router';
import Container from '../../components/widgets/Container';
import { useState } from 'react';
import AppBar from '../../components/widgets/AppBar';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Page() {
  const [count, setCount] = useState(0);
  return (
    <View style={tw`flex-1`}>
      {/* <SafeAreaView style={tw`flex-1 bg-white`}> */}
        <AppBar title='Home' 
          leading={<Link href="/" style={tw`hover:bg-blue-500`}>
            <MaterialIcons name='arrow-back-ios' size={14} />
          </Link>}
        />

        <Container>
          <Text>about: {count}</Text>
          <TextInput
            style={tw`border border-gray-300 px-2 py-2 rounded bg-white`}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
        </Container>
      {/* </SafeAreaView> */}
    </View>
  )
}