import React,{
  Component,
  Navigator,
  Text,
  View,
} from 'react-native';

import Home from './home';

export default class RouteHome extends Component{
  render() {
          let defaultName = 'Home';
          let defaultComponent = Home;

          return (<Navigator
              initialRoute={{ name: defaultName, component: defaultComponent }}
              configureScene={(route) => {
                  return Navigator.SceneConfigs.HorizontalSwipeJump;
              }}
              renderScene={(route,navigator)=>{
                  let Component = route.component;
                  return <Component {...route.params} navigator={navigator}/>
              }}
          />);
      }
}
