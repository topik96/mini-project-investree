import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from 'react-native'
import Style from './style'
import axios from 'axios'
import FBSDK, {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} from 'react-native-fbsdk'
// import { checkingNUmber } from '../../helpers'

class Custom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phoneNumber: 0,
      result: ''
    }
  }

  _fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      function(result) {
        console.log(result)
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {
          AccessToken.getCurrentAccessToken().then(res => {
            axios
              .get(
                'https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' +
                  res.accessToken
              )
              .then(res => {
                console.log(res.avatar)
                console.log(res.friends)
              })
          })
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString()
          )
        }
      },
      function(error) {
        console.log('Login fail with error: ' + error)
      }
    )
  }
  async initUser(token) {
    const data = await axios(
      'https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' +
        token
    )
    if (data) {
      console.log(data)
    } else {
      console.log('error')
    }
  }

  // checkingNUmber = phoneNumb => {
  //   let BASE_URL = 'http://apilayer.net/api'
  //   let API_KEY = '0d56058a6fde19aebda4107c604325a5'
  //   axios
  //     .get(
  //       `${BASE_URL}/validate?access_key=${API_KEY}&number=${phoneNumb}&country_code=&format=1`
  //     )
  //     .then(res => {
  //       this.setState({ result: res.data.carrier })
  //       console.log(res.data)
  //     })
  //     .catch(err => console.log(err))
  // }
  render() {
    // if (this.state.phoneNumber.length == 0) {
    //   return (
    //     <View>
    //       <ActivityIndicator size="large" />
    //     </View>
    //   )
    // } else {
    //   return (
    //     <View>
    //       <Text>{JSON.stringify(this.state.phoneNumber)}</Text>
    //     </View>
    //   )
    // }

    return (
      <View style={Style.container}>
        <TouchableOpacity
          onPress={() => {
            this._fbAuth()
          }}
        >
          <Text>Login via fb</Text>
        </TouchableOpacity>

        {/* <TextInput
          placeholder="Masukan Nomer"
          onChangeText={inputNumber => {
            this.setState({
              phoneNumber: inputNumber
            })
          }}
        />
        <TouchableOpacity
          onPress={() => {
            this.checkingNUmber(this.state.phoneNumber)
          }}
        >
          <Text>Input</Text>
        </TouchableOpacity>
        <Text>{this.state.result == '' ? 'loading' : this.state.result}</Text> */}
      </View>
    )
  }
}

export default Custom
