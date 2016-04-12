import React,{
  Component,
  StyleSheet,
  Image,
  View,
  Text,
  PropTypes,
} from 'react-native';

export default class HomeGoodsStyle1 extends Component {

  static propTypes:{
    img:PropTypes.string,
    originalPrice:PropTypes.string,
    shopPrice:PropTypes.string,
  };

  constructor(props) {
    super(props);
  }



  render(){
    return(
      <View style={styles.view}>
        <Image style={styles.img} source={{uri:this.props.img}}/>
        <Text>{this.props.shopPrice}</Text>
        <Text>{this.props.originalPrice}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  view:{
    flex:1,
    width:100,
    height:140,
    paddingLeft:10,
  },
  img:{
    flex:1,
    height:130,
  },
});
