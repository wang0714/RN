import React,{
  StyleSheet,
  View,
  Text,
  Component,
} from 'react-native';

import Header from './app/components/header';
export default class Home extends Component {
  constructor() {
    super();
  }
  render(){
    return(
      <View>
      <Header/>
      <Text>HOME</Text>
      </View>
    );
  }
}
