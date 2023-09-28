import { View, Text } from 'react-native'
import tw from '../../lib/tailwind'
import LottieView from 'lottie-react-native';


const LoadingPage = () => {
  // const animation = useRef(null);
  // useEffect(() => {
  //   // You can control the ref programmatically, rather than using autoPlay
  //   // animation.current?.play();
  // }, []);

  return (
    <View style={tw`flex-1 bg-blue-500 text-white justify-center items-center`}>
      {/* <LottieView
        autoPlay
        // ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../assets/anims/anim_vegetable.json')}
      /> */}
    </View>
  )
}

export default LoadingPage