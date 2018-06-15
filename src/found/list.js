import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import HeaderView from '../common/header';
const {height, width} = Dimensions.get('window');

export default class FoundListView extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text  style={styles.content}>和我玩会～ 给你发现秘密的线索</Text>
        <Image style={styles.logo} resizeMode='contain' source={require('../res/found-bg.png') } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: height
  },
  content: {
    position: 'absolute',
    top: height * 0.1,
    left: width * 0.2,
    fontSize: 16,
    color: '#40B1FC'
  },
  logo:{
    position: 'absolute',
    top: height * 0.2,
    left: width * 0.2,
    height: height * 0.5,
    width: width * 0.5
  }
});
