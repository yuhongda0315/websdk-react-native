import React from 'react';
import { AppRegistry, StyleSheet, View, ScrollView, Text, Image, AlertIOS, TouchableOpacity } from 'react-native';


import { CommonStyle } from '../common/stylesheet';
import ChatView from './chat';

export default class ConversationListView extends React.Component{
    constructor(props){
        super(props);
    }
  _gotoChat(){
  }
  render(){
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <TouchableOpacity onPress={() => {  navigate('Chat', { name: 'Jane' })}}>
          <View style={ styles.conversation }>
            <Image style={CommonStyle.avatar} source={{uri: 'http://oojs2ztoq.bkt.clouddn.com/e5b42a6c71c8705f5fb765de1f4f4523150X150.jpg'}} />
            <View style={styles.header}>
              <Text style={styles.title}>Martin</Text>
            </View>
            <View style={styles.message}>
              <Text style={styles.content}>我是尼奥</Text>
            </View>
            <View style={styles.time}>
              <Text>20:50</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  conversation: {
    padding: 10,
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 1
  },
  header: {
    position: 'absolute',
    top: 10,
    left: 75
  },
  title: {
    fontSize: 18
  },
  message: {
    position: 'absolute',
    top: 38,
    left: 75
  },
  content: {
    color: '#8e969f'
  },
  time: {
    position: 'absolute',
    top: 8,
    right: 8
  },
});
AppRegistry.registerComponent('ListNavigator', () => ListNavigator);
