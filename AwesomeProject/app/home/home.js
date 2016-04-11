import React,{
  StyleSheet,
  View,
  Text,
  Image,
  Component,
  ScrollView,
  Dimensions,
} from 'react-native';

import Header from '../components/header';
import ViewSwiper from 'react-native-swiper';
import MenuItem from '../components/menuItem';
import CellHeaderStyle1 from '../components/cellHeaderStyle1';
import HomeGoodsStyle1 from '../components/homeGoodsStyle1'

const MenuImages = [
  require('../../images/menuImages/category_0.png'),
  require('../../images/menuImages/category_1.png'),
  require('../../images/menuImages/category_2.png'),
  require('../../images/menuImages/category_3.png'),
  require('../../images/menuImages/category_4.png'),
  require('../../images/menuImages/category_5.png'),
  require('../../images/menuImages/category_6.png'),
  require('../../images/menuImages/category_7.png')
];

export default class Home extends Component {
  constructor() {
    super();
  }
  render(){
    var BANNER_1 = 'http://www.shequjiayuan.com/data/afficheimg/20160220hwgdwi.jpg';
    var BANNER_2 = 'http://www.shequjiayuan.com/data/afficheimg/20160220frnwoc.jpg';
    var BANNER_3 = 'http://www.shequjiayuan.com/data/afficheimg/20160220kfijtt.jpg';



    return(
      <View>
      <Header/>
      <ScrollView style={styles.scrollView}>
      <ViewSwiper style={styles.wrapper} height={130} showsButtons={false} loop={true} autoplay={true} autoplayTimeout={2.5} >
        <Image style={styles.slide1} source={{uri:BANNER_1}}/>
        <Image style={styles.slide2} source={{uri:BANNER_2}}/>
        <Image style={styles.slide3} source={{uri:BANNER_3}}/>
      </ViewSwiper>
      <View style={styles.menuView}>
        <MenuItem style={styles.menuItem} img={MenuImages[0]} showText={'食品|生鲜|乳品'}/>
        <MenuItem style={styles.menuItem} img={MenuImages[1]} showText={'服装|户外|箱包'}/>
        <MenuItem style={styles.menuItem} img={MenuImages[2]} showText={'美容|化妆|洗护'}/>
        <MenuItem style={styles.menuItem} img={MenuImages[3]} showText={'手机|数码|生活'}/>
      </View>
      <View style={styles.menuView}>
        <MenuItem style={styles.menuItem} img={MenuImages[4]} showText={'家电|五金|个护'}/>
        <MenuItem style={styles.menuItem} img={MenuImages[5]} showText={'家纺|家居|洗护'}/>
        <MenuItem style={styles.menuItem} img={MenuImages[6]} showText={'酒类|饮料|保健'}/>
        <MenuItem style={styles.menuItem} img={MenuImages[7]} showText={'母婴|益智|滋补'}/>
      </View>

      <Image style={{height:70,marginTop:10}} resizeMode='stretch' source={{uri:'http://www.shequjiayuan.com/data/afficheimg/1437500451024703742.jpg'}}/>

      <View style={{flexDirection:'row',marginTop:1}}>
      <Image style={{height:140,flex:1}} resizeMode='stretch' source={{uri:'http://www.shequjiayuan.com/data/afficheimg/1437443598413319761.jpg'}}/>
      <Image style={{height:140,flex:1}} resizeMode='stretch' source={{uri:'http://www.shequjiayuan.com/data/afficheimg/1437443618115141919.jpg'}}/>
      <Image style={{height:140,flex:1}} resizeMode='stretch' source={{uri:'http://www.shequjiayuan.com/data/afficheimg/1437443639216982079.jpg'}}/>
      <Image style={{height:140,flex:1}} resizeMode='stretch' source={{uri:'http://www.shequjiayuan.com/data/afficheimg/1437443671970687539.jpg'}}/>
      <Image style={{height:140,flex:1}} resizeMode='stretch' source={{uri:'http://www.shequjiayuan.com/data/afficheimg/1437443689808458163.jpg'}}/>
      </View>

      <View style={styles.cell1}>
        <CellHeaderStyle1 title={'秒杀·12点场'} subtitle={'佳能大牌秒杀日'}/>
        <ScrollView
          style={styles.scrollView_1}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
        <HomeGoodsStyle1 style={styles.goodsStyle1} img={'http://www.shequjiayuan.com/data/afficheimg/1437443598413319761.jpg'}/>
        <HomeGoodsStyle1 style={styles.goodsStyle1} img={'http://www.shequjiayuan.com/data/afficheimg/1437443618115141919.jpg'}/>
        <HomeGoodsStyle1 style={styles.goodsStyle1} img={'http://www.shequjiayuan.com/data/afficheimg/1437443671970687539.jpg'}/>
        <HomeGoodsStyle1 style={styles.goodsStyle1} img={'http://www.shequjiayuan.com/data/afficheimg/1437443689808458163.jpg'}/>
        <HomeGoodsStyle1 style={styles.goodsStyle1} img={'http://www.shequjiayuan.com/data/afficheimg/1437443598413319761.jpg'}/>
        <HomeGoodsStyle1 style={styles.goodsStyle1} img={'http://www.shequjiayuan.com/data/afficheimg/1437443618115141919.jpg'}/>
        <HomeGoodsStyle1 style={styles.goodsStyle1} img={'http://www.shequjiayuan.com/data/afficheimg/1437443671970687539.jpg'}/>
        <HomeGoodsStyle1 style={styles.goodsStyle1} img={'http://www.shequjiayuan.com/data/afficheimg/1437443689808458163.jpg'}/>
        <HomeGoodsStyle1 style={styles.goodsStyle1} img={'http://www.shequjiayuan.com/data/afficheimg/1437443598413319761.jpg'}/>
        <HomeGoodsStyle1 style={styles.goodsStyle1} img={'http://www.shequjiayuan.com/data/afficheimg/1437443618115141919.jpg'}/>
        <HomeGoodsStyle1 style={styles.goodsStyle1} img={'http://www.shequjiayuan.com/data/afficheimg/1437443671970687539.jpg'}/>
        <HomeGoodsStyle1 style={styles.goodsStyle1} img={'http://www.shequjiayuan.com/data/afficheimg/1437443689808458163.jpg'}/>
        <HomeGoodsStyle1 style={styles.goodsStyle1} img={'http://www.shequjiayuan.com/data/afficheimg/1437443598413319761.jpg'}/>
        <HomeGoodsStyle1 style={styles.goodsStyle1} img={'http://www.shequjiayuan.com/data/afficheimg/1437443618115141919.jpg'}/>
        <HomeGoodsStyle1 style={styles.goodsStyle1} img={'http://www.shequjiayuan.com/data/afficheimg/1437443671970687539.jpg'}/>
        <HomeGoodsStyle1 style={styles.goodsStyle1} img={'http://www.shequjiayuan.com/data/afficheimg/1437443689808458163.jpg'}/>
        <Text style={{width:20,textAlign:'center',justifyContent:'center',alignItems:'center',}} numberOfLines={4}>{'查看更多'}</Text>

        </ScrollView>

      </View>



      <Text>HOME</Text>
      <Image style={styles.imageV} source={{uri:BANNER_1}}/>
      </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
  },
  scrollView:{
    height:Dimensions.get('window').height-122,
  },
  slide1: {
    flex: 1,
    height:130,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    height:130,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    height:130,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageV:{
    height:100,
    width:100,
    backgroundColor:'#FF0000'
  },
  menuView:{
    marginTop:10,
    flexDirection:'row',
  },
  menuItem:{
    height:60,
  },
  cell1:{
    marginTop:10,
    height:190,
  },
  scrollView_1:{
    flexDirection:'row',
    marginTop:10,
  },
  goodsStyle1:{
    width:100,
    height:150,
  }

})
