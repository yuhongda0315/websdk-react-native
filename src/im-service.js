import RongIMLib from '../lib/RongIMLib-2.3.2.js'
let {RongIMClient} = RongIMLib;

export default class IMService {
  constructor(_appkey, _opts) {
    this.isConnected = false;
    this.appkey = _appkey;
    this.opts = _opts;
  }
  connect() {
    return new Promise((resolve, reject) => {
      let appkey = this.appkey;
      let token = this.opts.token;
      RongIMClient.init(appkey);

      let {
        connected
      } = RongIMLib.ConnectionStatus;
      RongIMClient.setConnectionStatusListener({
        onChanged: status => {
          this.isConnected = (status == connected);
          resolve(this);
        }
      });

      RongIMClient.setOnReceiveMessageListener({
        onReceived: message => {
          console.log(message);
        }
      });

      RongIMClient.connect(token, {
        onSuccess: userId => {
          console.log("Connect successfully." + userId);
        },
        onTokenIncorrect: () => {
          console.log('token无效');
          reject();
        },
        onError: errorCode => {
          console.log(errorCode);
        }
      });
    });
  }
  getUser() {
    let xingList = "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张于";
    let xingSize = xingList.length;

    let nameList = "梦琪忆柳之桃慕青问兰尔岚元香初夏沛菡傲珊曼文乐菱痴珊恨玉惜文香寒新柔语蓉海安夜蓉涵柏水桃醉蓝春儿语琴从彤傲晴语兰又菱碧彤元霜怜梦紫寒妙彤曼易南莲紫翠雨寒易烟如萱若南寻真晓亦向珊慕灵以蕊寻雁映易雪柳孤岚笑霜海云";
    let nameSize = nameList.length;
    let portraits = [
      'https://fsprodrcx.cn.ronghub.com/B0qmIAdLpxPq9aYgB0qmIAdV5acHSrhp/timg.jpeg'
    ];

    let portraitSize = portraits.length;

    let getIndex = (max) => {
      return Math.floor(Math.random() * max);
    };

    let getName = (len) => {
      let names = [];
      for (let i = 0; i < len; i++) {
        let index = getIndex(nameSize);
        names.push(nameList[index]);
      }
      return names.join('');
    };


    let getXing = (index) => {
      return xingList.split('')[index];
    };

    let getPortrait = (index) => {
      return portraits[index];
    };

    let getNameLen = () => {
      return Math.floor(Math.random() * 2) || 2;
    };

    let name = getName(getNameLen());

    let xingIndex = getIndex(portraitSize);
    let xing = getXing(xingIndex);

    let portraitIndex = getIndex(portraitSize);
    let portrait = getPortrait(portraitIndex);
    name = xing + name;
    return {
      name,
      portrait
    };
  }
  getConversationList() {
    return new Promise((resovle, reject) => {
      RongIMClient.getInstance().getConversationList({
        onSuccess: (conversationList) =>  {
          conversationList.map(conversation => {
            conversation.target = this.getUser();
            conversation.sender = this.getUser();
            let {latestMessage: {content}} = conversation;
            conversation.latestcontent = content.content || ['消息类型暂未解析']
          });
          conversationList = conversationList.filter((conversation) => {
            return conversation.conversationType == 1;
          });
          resovle(conversationList);
        },
        onError: (error) => {
          console.error('getConversationlist', error);
          reject(error);
        }
      }, null);
    });
  }
  ready() {
    return this.isConnected ? Promise.resolve(this) : this.connect();
  }
}