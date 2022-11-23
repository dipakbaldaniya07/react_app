import React, {useRef} from 'react';
import {colors} from '../componants/themeContext';
import {
  View,
  Text,
  PanResponder,
  Animated,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomButton from '../componants/button';
import {useContext} from 'react';
import {ThemeContext} from '../componants/changetheme';

let isAnimate = false;

export default function AnimationPage() {
  const {theme} = useContext(ThemeContext);
  let activeColor = colors[theme.mode];
  const position = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const rotation = position.x.interpolate({
    inputRange: [0, 20],
    outputRange: ['0deg', '360deg'],
  });

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  const pan = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        position.setOffset({
          x: position.x._value,
          y: position.y._value,
        });
      },
      onPanResponderMove: Animated.event(
        [null, {dx: position.x, dy: position.y}],
        {
          useNativeDriver: false,
        },
      ),
      onPanResponderRelease: () => {
        position.flattenOffset();
      },
    }),
  ).current;

  let x = 0;

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: activeColor.primary,
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          isAnimate == false
            ? Animated.timing(position, {
                toValue: {x: 20, y: 400},
                duration: 500,
                useNativeDriver: false,
              }).start()
            : Animated.timing(position, {
                toValue: {x: 0, y: 0},
                duration: 500,
                bounciness: 2,
                speed: 0.1,
                useNativeDriver: false,
              }).start();

          isAnimate = !isAnimate;
        }}>
        <Animated.View
          style={{
            opacity: fadeAnim,
            height: 140,
            width: 140,
            justifyContent: 'center',
            alignItems: 'center',
            transform: [
              {translateX: position.x},
              {translateY: position.y},
              {rotate: rotation},
            ],
          }}>
          <Image
            style={{
              height: 150,
              width: 140,
              resizeMode: 'stretch',
              margin: 20,
            }}
            source={{
              uri: 'https://img.freepik.com/premium-vector/cute-kangaroo-is-having-many-little-stars-pocket-illustration_194428-2429.jpg',
            }}
          />
        </Animated.View>
      </TouchableOpacity>
      <View style={styles.container1}>
        <CustomButton title={'fade in view'} onpress={fadeIn} />
        <CustomButton title={'fade out view'} onpress={fadeOut} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'black',
  },
  container1: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 30,
  },
});

// on drag animation

// <Animated.View
// // {...pan.panHandlers}
// style={{
//   height: 112,
//   width: 110,
//   backgroundColor: 'orange',
//   justifyContent: 'center',
//   alignItems: 'center',

//   transform: [
//     {translateX: position.x},
//     {translateY: position.y},
//     // {rotate: rotation},
//   ],
// }}>
// <Image
//   style={{
//     height: 112,
//     width: 110,
//   }}
//   source={{
//     uri: 'https://img.freepik.com/premium-vector/cute-kangaroo-is-having-many-little-stars-pocket-illustration_194428-2429.jpg',
//   }}
// />
// </Animated.View>

// on touch animation
// <TouchableOpacity
//         activeOpacity={1}
//         onPress={() => {
//           isAnimate == false
//             ? Animated.spring(position, {
//                 toValue: {x: 200, y: 500},
//                 duration: 10000,
//                 bounciness: 1,
//                 speed: 0.1,
//                 useNativeDriver: false,
//               }).start()
//             : Animated.spring(position, {
//                 toValue: {x: 0, y: 0},
//                 duration: 2500,
//                 bounciness: 2,
//                 speed: 0.1,
//                 useNativeDriver: false,
//               }).start();

//           isAnimate = !isAnimate;
//         }}>
//         <Animated.View
//           style={{
// height: 112,
// width: 110,
// backgroundColor: 'orange',
// justifyContent: 'center',
// alignItems: 'center',
//             transform: [
//               {translateX: position.x},
//               {translateY: position.y},
//               {rotate: rotation},
//             ],
//           }}>
//           <Text style={styles.text}> Animation </Text>
//         </Animated.View>
//       </TouchableOpacity>
