import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';

export default class HeaderView extends React.Component{
  render(){
    return (
      <View>
        <View style={styles.stripe}></View>
        <View style={styles.header}>
          <Image
            style = { styles.logo }
            resizeMode='contain'
            source={require('../res/seal-logo.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stripe: {
    backgroundColor: '#333',
    height: 20
  },
  header: {
    backgroundColor: '#40B1FC',
    height: 50
  },
  logo: {
    height: 25,
    marginTop: 13,
    marginLeft: -16
  }
});
