// import React, {useState} from 'react';
// import {View, Text, FlatList, Image, Alert, Button} from 'react-native';
// import {useTheme} from 'react-native-paper';
// import CustomButton from '../componants/button';
// import CheckBox from '../componants/checkbox';
// import {colors} from '../componants/themeContext';
// import {ThemeContext} from '../componants/changetheme';
// import {useContext} from 'react';
// class Apipage extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [],
//     };
//   }

//   componentDidMount() {
//     this.CallApi();
//   }

//   async CallApi() {
//     // let resp = await fetch('https://reactnative.dev/movies.json');
//     let access_token =
//       'sk_test_51LSe3LSH013l6bBmtCw03OMFSeKyamW8mK6EgyPDtpBDaq7BQMf7YW3SMmd22l4KxX8bmKvOBoynQVs7X3ZNK5jE00ZMWzqs8I';

//     let resp = await fetch('https://api.stripe.com/v1/payment_intents', {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         Authorization: 'Bearer ' + access_token,
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     });
//     let respJson = await resp.json();
//     this.setState({data: respJson.data});
//   }

//   render() {
//     // console.warn(this.state.data);
//     requestOptions = {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({postName: 'React updates '}),
//     };

//     postData = async () => {
//       try {
//         await fetch('https://reqres.in/api/posts', requestOptions).then(
//           response => {
//             response.json().then(data => {
//               Alert.alert('post data :', data.postName);
//             });
//           },
//         );
//       } catch (error) {
//         console.warn(error);
//       }
//     };

//     const {theme} = useState(ThemeContext);
//     let activeColor = colors[theme.mode];
//     return (
//       <View
//         style={{
//           height: '100%',
//           width: '100%',
//           backgroundColor: activeColor.primary,
//           justifyContent: 'space-around',
//         }}>
//         <CustomButton title={'Post'} onpress={postData} />
//       </View>
//       // <FlatList
//       //   data={this.state.data}
//       //   renderItem={({item}) => (
//       //     <Text
//       //       style={{
//       //         backgroundColor: 'skyblue',
//       //         color: 'black',
//       //         fontSize: 17,
//       //       }}>
//       //       {item.id} ==== INR {item.amount}
//       //     </Text>
//       //   )}
//       // />
//     );
//   }
// }

// export default Apipage;

import React, {useState} from 'react';
import {View, Text, FlatList, Image, Alert, Button} from 'react-native';
import {useTheme} from 'react-native-paper';
import CustomButton from '../componants/button';
import CheckBox from '../componants/checkbox';
import {colors} from '../componants/themeContext';
import {ThemeContext} from '../componants/changetheme';
import {useContext} from 'react';

const Apipage = () => {
  const [Data, Setdata] = useState('');

  CallApi = async () => {
    // let resp = await fetch('https://reactnative.dev/movies.json');
    let access_token =
      'sk_test_51LSe3LSH013l6bBmtCw03OMFSeKyamW8mK6EgyPDtpBDaq7BQMf7YW3SMmd22l4KxX8bmKvOBoynQVs7X3ZNK5jE00ZMWzqs8I';

    let resp = await fetch('https://api.stripe.com/v1/payment_intents', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + access_token,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    let respJson = await resp.json();
    Setdata(respJson.data);
    return respJson.data;
    this.setState(Setdata({data: respJson.data}));
  };

  // console.warn(this.state.data);
  requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({postName: 'React updates '}),
  };

  postData = async () => {
    try {
      await fetch('https://reqres.in/api/posts', requestOptions).then(
        response => {
          response.json().then(data => {
            Alert.alert('post data :', data.postName);
          });
        },
      );
    } catch (error) {
      console.warn(error);
    }
  };

  const {theme} = useContext(ThemeContext);
  let activeColor = colors[theme.mode];
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: activeColor.primary,
        justifyContent: 'space-around',
      }}>
      <FlatList
        data={Data}
        renderItem={({item}) => (
          <Text
            style={{
              backgroundColor: 'skyblue',
              color: 'black',
              fontSize: 17,
            }}>
            {item.id} ==== INR {item.amount}
          </Text>
        )}
      />
      <CustomButton title={'fetch'} onpress={CallApi} />
      <CustomButton title={'Post'} onpress={postData} />
    </View>
    // <FlatList
    //   data={this.state.data}
    //   renderItem={({item}) => (
    //     <Text
    //       style={{
    //         backgroundColor: 'skyblue',
    //         color: 'black',
    //         fontSize: 17,
    //       }}>
    //       {item.id} ==== INR {item.amount}
    //     </Text>
    //   )}
    // />
  );
};

export default Apipage;
