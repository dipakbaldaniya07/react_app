import React from 'react';
import {View, Text, FlatList, Image, Alert, Button} from 'react-native';
import {useTheme} from 'react-native-paper';
import CheckBox from '../componants/checkbox';

class Apipage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.CallApi();
  }

  async CallApi() {
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
    this.setState({data: respJson.data});
  }

  render() {
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
    return (
      <View
        style={{
          justifyContent: 'space-around',
        }}>
        <Button mode="contained" title="post" onPress={postData} />
        <CheckBox text="check box" color="red" size={50} />
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
  }
}

export default Apipage;
