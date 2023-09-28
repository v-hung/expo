import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, Text, TextInput, View } from 'react-native';
import tw from 'twrnc';
import { Link, Stack } from 'expo-router';
import Container from '../../components/widgets/Container';
import { useState } from 'react';
import AppBar from '../../components/widgets/AppBar';

export default function Page() {
  const [count, setCount] = useState(0);
  return (
    <View style={tw`flex-1`}>
      <SafeAreaView>
        <AppBar title='About' />

        <Container>
          <Text>about: {count}</Text>
          <TextInput
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
        </Container>
      </SafeAreaView>
    </View>
  )
}