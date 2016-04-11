import React,{
  Component,
  StyleSheet,
  View,
  Image,
  Text,
  PropTypes
} from 'react-native';

export default class CellHeaderStyle1 extends Component {
  static propTypes:{
    title:PropTypes.string,
    subtitle:PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <View style={styles.view}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.subtitle}>{this.props.subtitle}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  view:{
    flexDirection:'row',
  },
  title:{
    flex:1,
    fontSize:16,
    paddingLeft:10,
  },
  subtitle:{
    textAlign:'right',
    fontSize:16,
    color:'#FF0000',
    flex:1,
    paddingRight:10,
  },

});
