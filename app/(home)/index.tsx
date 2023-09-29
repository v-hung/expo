import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, TextInput, View, FlatList, StyleSheet, Image, ScrollView, Animated } from 'react-native';
import tw from 'twrnc';
import { Link, Stack } from 'expo-router';
import Container from '../../components/widgets/Container';
import { useState } from 'react';
import AppBar from '../../components/widgets/AppBar';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Button from "../../components/form/Button";
import useTheme from '../../stores/theme';
import { useRef, useEffect } from "react";


export default function Page() {
  const [data, setData] = useState([
    { id: 1, title: 'My products', description: '4 Crops', image: 'https://png.pngtree.com/png-vector/20210915/ourlarge/pngtree-fresh-vegetable-canola-png-image_3925482.jpg'},
    { id: 2, title: 'My products  My products My products My products', description: '4 Crops', image: 'https://png.pngtree.com/png-vector/20210915/ourlarge/pngtree-fresh-vegetable-canola-png-image_3925482.jpg'},
    { id: 3, title: 'My products', description: '4 Crops', image: 'https://png.pngtree.com/png-vector/20210915/ourlarge/pngtree-fresh-vegetable-canola-png-image_3925482.jpg'},
    { id: 4, title: 'My products', description: '4 Crops', image: 'https://png.pngtree.com/png-vector/20210915/ourlarge/pngtree-fresh-vegetable-canola-png-image_3925482.jpg'}
  ])

  const { primary } = useTheme()

  const scrollY = useRef(new Animated.Value(0)).current
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    scrollY.addListener(({ value }) => {
      if (value >= 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    });

    return () => {
      scrollY.removeAllListeners();
    };
  }, []);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  )

  const appBarBackgroundColor = scrollY.interpolate({
    inputRange: [0, 20], // Khoảng giá trị y khi màu bắt đầu thay đổi và kết thúc thay đổi
    outputRange: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'], // Giá trị màu của App Bar ở hai điểm cuối
    extrapolate: 'clamp', // Giữ cho giá trị giữa inputRange
  })

  return (
    <View style={tw`flex-1`}>
      <AppBar
        style={{...tw`${!isScrolled ? 'shadow-none' : ''}`, backgroundColor: appBarBackgroundColor as any}}
        title={<Text>Xin chào <Text style={tw`font-semibold`}>Việt Hùng</Text></Text>}
        actions={<View style={{...tw`w-8 h-8 rounded-full flex justify-center items-center`, backgroundColor: primary}}>
          <MaterialIcons name='person' color="white" size={24} />
        </View>}
      />
      <ScrollView onScroll={handleScroll}>
        <View>
          <FlatList
            data={data}
            renderItem={({item, index}) =>
              <View style={tw`w-60 bg-white rounded-xl p-3 mr-4 flex-row ${index == 0 ? 'ml-4' : ''} items-center`}>
                <Image source={{uri: item.image}} style={tw`w-20 h-20 rounded-2xl bg-green-100 mr-4`} />
                <View style={tw`flex-1`}>
                  <Text style={tw`font-semibold`} numberOfLines={2}>{item.title}</Text>
                  <Text style={tw`text-xs text-gray-500 mt-1`}>{item.description}</Text>
                </View>
              </View>
            }
            keyExtractor={item => `${item.id}`}
            horizontal
          />
        </View>

        <Container>
          <View style={tw`w-full bg-white rounded-xl p-3 mt-6`}>
            <Image source={{uri: data[0].image}} style={{...tw`w-full rounded-2xl bg-green-100 mr-4`, aspectRatio: 3/2}} />
            <View style={tw`mt-2 flex-row items-center`}>
              <Text style={tw`flex-1 font-semibold mr-2`} numberOfLines={1}>Learn Mint Easily</Text>
              <Button style={tw`px-6 py-2`} textStyle={tw`text-xs uppercase`}>show tips</Button>
            </View>
          </View>

          <View style={tw`mt-6 flex-row flex-wrap -mx-2`}>
            { new Array(10).fill(0).map((v,i) =>
              <View key={i} style={tw`w-1/2 px-2 mb-4`}>
                <View style={tw`bg-white rounded-xl p-3 flex-col items-center`}>
                  <Image source={{uri: data[0].image}} style={{...tw`w-2/5 rounded-2xl bg-green-100`, aspectRatio: 1/1}} />
                  <Text style={tw`font-semibold mt-2`} numberOfLines={2}>{data[0].title}</Text>
                  <Text style={tw`text-xs text-gray-500 mt-1`}>{data[0].description}</Text>
                </View>
              </View>
            )}
          </View>
        </Container>
      </ScrollView>
    </View>
  )
}