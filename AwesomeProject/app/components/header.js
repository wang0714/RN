import React,{
  Component,
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Header extends Component {
  constructor() {
    super();
  }

  render(){
    return(
      <View style={styles.headerView}/>
    );
  }
}

const styles = StyleSheet.create({
  headerView:{
    flex:1,
    height:64,
    backgroundColor:'#96ce54',
  },
});
