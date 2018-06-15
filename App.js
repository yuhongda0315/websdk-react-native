import React from 'react';
import {AppRegistry, StyleSheet, View, DeviceEventEmitter } from 'react-native';

import LoginView from './src/login';
import MainView from './src/main';

export default class App extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     isLogined: false
   };
  }

  componentDidMount(){
    this.emitter = DeviceEventEmitter.addListener('onshowlogin', (isLogined) => {
      this.setState({
        isLogined
      });
    });
  }
  componentWillUnmount() {
    this.emitter.remove();
  }

  render(){
    if (this.state.isLogined) {
      return (
        <View style={ styles.container }>
          <MainView></MainView>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <LoginView></LoginView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FC',
  }
});

AppRegistry.registerComponent('App', () => App);
