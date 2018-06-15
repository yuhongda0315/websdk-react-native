import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import ConversationListView from './conversation/index'
import ChatView from './conversation/chat'
import ContactListView from './contacts/list'
import FoundListView from './found/list'
import MySelfView from './myself/index'

const deviceW = Dimensions.get('window').width;

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

export default class MainView extends React.Component{
  state= {
    selectedTab: '会话'
  };
  constructor(props){
    super(props.navigation);
  }
  render() {
    return (
      <View style={styles.container} >
          <TabNavigator>
            <TabNavigator.Item
                selected={this.state.selectedTab === '会话'}
                title='会话'
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} size={px2dp(22)} source={require('./res/tab_chat.png')} />}
                renderSelectedIcon={() => <Image style={styles.icon} size={px2dp(22)} source={require('./res/tab_chat_hover.png')} />}
                onPress={() => this.setState({ selectedTab: '会话' })}>
                <ConversationListView/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === '通讯录'}
                title='通讯录'
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} size={px2dp(22)} source={require('./res/tab_contacts.png')} />}
                renderSelectedIcon={() => <Image style={styles.icon} size={px2dp(22)} source={require('./res/tab_contacts_hover.png')} />}
                onPress={() => this.setState({ selectedTab: '通讯录' })}>
                <ContactListView/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === '发现'}
                title='发现'
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} size={px2dp(22)} source={require('./res/tab_found.png')} />}
                renderSelectedIcon={() => <Image style={styles.icon} size={px2dp(22)} source={require('./res/tab_found_hover.png')} />}
                onPress={() => this.setState({ selectedTab: '发现' })}>
                <FoundListView/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === '我'}
                title='我'
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} size={px2dp(22)} source={require('./res/tab_me.png')} />}
                renderSelectedIcon={() => <Image style={styles.icon} size={px2dp(22)} source={require('./res/tab_me_hover.png')} />}
                onPress={() => this.setState({ selectedTab: '我' })}>
                <MySelfView />
            </TabNavigator.Item>
          </TabNavigator>
        </View>
      );
  }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        color: "#000000",
        fontSize: 13
    },
    selectedTabText: {
        color: "#999999",
        fontSize: 13
    },
    icon: {
        width: 20,
        height: 20
    }
});
