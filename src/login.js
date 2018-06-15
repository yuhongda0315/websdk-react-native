import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TextInput, DeviceEventEmitter } from 'react-native';
import HeaderView from './common/header';

import Button from 'apsl-react-native-button'

const {height, width} = Dimensions.get('window');

const ImageFactory = {
  BG: require('./res/login-bg.png'),
  LOGO: require('./res/login-logo.png')
};

export default class LoginView extends React.Component{
  render(){
    return (
      <View style={ styles.container }>
          <Image
            style={ styles.logo }
            source = { ImageFactory.LOGO }
          />
        <Image style={ styles.bg }
         source = { ImageFactory.BG }
       />

       <TextInput
        style={ [styles.center, styles.input, styles.username] }
        placeholder = '手机'
        placeholderTextColor = '#FFF'
        underlineColorAndroid='transparent'
       />

       <TextInput
        style={ [styles.center, styles.input, styles.password] }
        placeholder = '密码'
        placeholderTextColor = '#FFF'
        underlineColorAndroid='transparent'
        password = {true}
       />

       <Button
       style={[styles.center, styles.loginBtn]}
       textStyle={{color: '#FFF'}}
       onPress = {() => { DeviceEventEmitter.emit('onshowlogin', true); }}
       >
          登录
       </Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    position: 'absolute',
    left: width * 0.1,
    width: width * 0.8,
  },
  logo: {
    height: 100,
    width: 100,
    position: 'absolute',
    zIndex: 10,
    left: width * 0.38,
    top: height * 0.15
  },
  bg: {
    position: 'absolute',
    zIndex: 0,
    height: height,
    width: width
  },
  input: {
    height: 65,
    zIndex: 30,
    borderBottomColor: '#444444',
    borderBottomWidth: 1
  },
  username: {
    top: height * 0.38
  },
  password: {
    top: height * 0.48
  },
  loginBtn: {
    top: height * 0.62,
    zIndex: 11,
    backgroundColor: '#40B1FC',
    borderWidth: 0
  }
});
