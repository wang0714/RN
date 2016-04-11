'user strict';

import React,{
  StyleSheet,
  Text,
  Image,
  Component,
  TouchableWithoutFeedback,
  PropTypes,
  View,
  Alert,
} from 'react-native';



export default class MenuItem extends Component {

  static propTypes:{
        // renderIcon: PropTypes.number.isRequired,  // 图片,加入.isRequired即为比填项
        img: PropTypes.string,
        showText: PropTypes.string,  // 显示标题\文字
        tag: PropTypes.string,  // Tag
        onClick: PropTypes.func  // 回调函数
    };

  constructor(props) {
    super(props);
    this._onclick = this._onclick.bind(this);//需要在回调函数中使用this,必须使用bind(this)来绑定
  }



  _onclick(){
    if(this.props.onClick){
      this.props.onClick(this.props.showText,this.props.tag); //回调Title和tag
    }
  }

// <Image style={styles.image} source={{uri:this.props.img}}/>

  render(){
    var outStyle={
      backgroundColor:this.props.color,
    }
    return(
      <TouchableWithoutFeedback onPress={()=>{alert('---')}}>
      <View style={[styles.item,outStyle]}>
        <Image style={styles.image} source={this.props.img}/>
        <Text style={styles.text}>{this.props.showText}</Text>
      </View>
      </TouchableWithoutFeedback>
    );
  }

}

var styles = StyleSheet.create({
  item:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginLeft:5,
    marginTop:5,
    marginRight:5,
    marginBottom:5,
    flex:1,
  },
  image:{
    width:48,
    height:48,
    borderRadius:5,
  },
  text:{
    marginTop:10,
    color:'#333333',
    alignItems:'center'
  }
});
