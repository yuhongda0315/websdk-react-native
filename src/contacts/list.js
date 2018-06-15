import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import HeaderView from '../common/header';
import { CommonStyle } from '../common/stylesheet';

export default class ContactListView extends React.Component{
  render(){
    return (
      <ScrollView>
        <View style={ styles.conversation }>
          <Image style={CommonStyle.avatar} source={{uri: 'http://oojs2ztoq.bkt.clouddn.com/e5b42a6c71c8705f5fb765de1f4f4523150X150.jpg'}} />
          <View style={styles.header}>
            <Text style={styles.title}>Martin</Text>
          </View>
        </View>
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
    top: 22,
    left: 75
  },
  title: {
    fontSize: 18
  }
});
