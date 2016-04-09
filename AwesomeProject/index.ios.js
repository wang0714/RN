/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

let HOME_TAB = 'homeTab';
let HOME_NORMAL = require('./images/home.png');
let HOME_PRESS = require('./images/home_selected.png');

let MESSAGE_TAB = 'messageTab';
let MESSAGE_NORMAL = require('./images/category.png');
let MESSAGE_PRESS = require('./images/category_selected.png');

let DISCOVER_TAB = 'discoverTab';
let DISCOVER_NORMAL = require('./images/order.png');
let DISCOVER_PRESS = require('./images/order_selected.png');

let ME_TAB = 'meTab';
let ME_NORMAL = require('./images/me.png');
let ME_PRESS = require('./images/me_selected.png');

import TabNavigator from 'react-native-tab-navigator';

import RouteHome from './home';
import Message from './home';
import Discover from  './home';
import RouteMe from './home';

class AwesomeProject extends Component {


_renderTabItem(img,selectedImg,tag,title,badgeCount,childView){
  return(
    <TabNavigator.Item
      selected={this.state.selectedTab===tag}
      renderIcon={()=><Image style={styles.tabIcon} source={img}/>}
      title={title}
      selectedTitleStyle={styles.selectedTitleStyle}
      renderBadge={()=>this._renderBadge(badgeCount)}
      renderSelectedIcon={()=><Image style={styles.tabIcon} source={selectedImg}/>}
      onPress={()=>this.setState({selectedTab:tag})}>
      {childView}
    </TabNavigator.Item>
  );
}

_createChildView(tag){
  let renderView;
  switch (tag) {
            case HOME_TAB:
                renderView = <RouteHome />;
                break;
            case MESSAGE_TAB:
                renderView = <Message />;
                break;
            case DISCOVER_TAB:
                renderView = <Discover />;
                break;
            case ME_TAB:
                renderView = <RouteMe />;
                break;
            default:
                break;
        }
        return (<View style={styles.container}>{renderView}</View>)
}

  render() {
    return (
      <View>
        <TabNavigator
          hidesTabTouch={false}
          sceneStyle={{paddingBottom: 0}}
          tabBarStyle={tabBarShow ? styles.tabNav : styles.tabNavHide}>
          {this._renderTabItem(HOME_NORMAL, HOME_PRESS, HOME_TAB, '首页', 0, this._createChildView(HOME_TAB))}
          {this._renderTabItem(MESSAGE_NORMAL, MESSAGE_PRESS, MESSAGE_TAB, '消息', 1, this._createChildView(MESSAGE_TAB))}
          {this._renderTabItem(DISCOVER_NORMAL, DISCOVER_PRESS, DISCOVER_TAB, '发现', 0, this._createChildView(DISCOVER_TAB))}
          {this._renderTabItem(ME_NORMAL, ME_PRESS, ME_TAB, '我的', 0, this._createChildView(ME_TAB))}
        </TabNavigator>
      </View>


    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabNav: {
        height: 60,
        backgroundColor: '#FFF',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: '#E8E8E8'
    },
    tabNavHide: {
        position: 'absolute',
        top: Dimensions.get('window').height,
        height: 0
    },
    selectedTitleStyle: {
        color: '#11A984'
    },
    badgeBg: {
        width: 14,
        height: 14,
        marginTop: 6
    },
    badgeText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 10,
        backgroundColor: Platform.OS === 'android' ? null : 'transparent'
    },
    tabIcon: {
        height: 30,
        width: 30,
        resizeMode: 'cover'
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
