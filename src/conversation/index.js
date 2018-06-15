import { createStackNavigator } from 'react-navigation';
import ListView from './list';
import ChatView from './chat';

const ConversationNavi = createStackNavigator({
  List: { screen: ListView },
  Chat: { screen: ChatView },
}, {
    initialRouteName: 'List',
    navigationOptions: {
      headerStyle: {height: 40, backgroundColor: '#40B1FC'}
    },
    mode: 'card',
    headerMode: 'screen'
});

export default ConversationNavi;
