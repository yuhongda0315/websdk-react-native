import React from 'react';
import { StyleSheet, View, Text, DeviceEventEmitter, Dimensions,Image } from 'react-native';
import HeaderView from '../common/header';
import Button from 'apsl-react-native-button'

const {height, width} = Dimensions.get('window');

export default class MySelfView extends React.Component{
  render(){
    return (
      <View>
        <HeaderView></HeaderView>
        <Image style={styles.logo} source={require('../res/about-seal.png') } />

        <Button
        style={[styles.center, styles.logoutBtn]}
        textStyle={{color: '#FFF'}}
        onPress = {() => {  DeviceEventEmitter.emit('onshowlogin', false); }}
        >
           退出
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    position: 'absolute',
    left: width * 0.1,
    width: width * 0.8,
  },
  logoutBtn: {
    top: height * 0.7,
    backgroundColor: '#40B1FC',
    borderWidth: 0
  },
  logo: {
    position: 'absolute',
    top: height * 0.2,
    left: width * 0.19
  }
});
