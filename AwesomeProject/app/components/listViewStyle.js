import React,{
  Component,
  StyleSheet,
  ListView,
  Image,
  View,
  Text,
  Dimensions,
  TouchableHighlight
} from 'react-native';

export default class ListViewStyle extends Component {

  constructor(){
    super();
    this.state = {
      dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(['row1','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3'])
    };
  }

  render(){
    return(
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  }

  _renderRow(rowData:string,sectionID:number,rowID:number){
    return(
      <TouchableHighlight>
            <View style={styles.row}>
              <Image style={styles.thumb} source={{uri:'http://www.shequjiayuan.com/data/afficheimg/1437443598413319761.jpg'}} />
              <Text style={styles.text} numberOfLines={2}>
                {rowData + 'Apple iPad Pro 平板电脑12.9英寸（32GWLAN 64GWLAN)'}
              </Text>
              <Text style={styles.price}>
              {'￥2888'}
              </Text>
            </View>
        </TouchableHighlight>
    );
  }

}



var styles = StyleSheet.create({
  list:{
    marginTop:5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row:{
    // justifyContent: 'flex-start',
    marginLeft:6,
    marginTop:2,
    width: (Dimensions.get('window').width-18)/2,
    height: 280,
    // alignItems: 'flex-start',
  },
  text:{
    flex:1,
    fontSize:16,
    color:'#000000',
    marginTop:4,
    paddingLeft:2,
    paddingRight:2,
  },
  price:{
    flex:1,
    fontSize:16,
    fontWeight:'bold',
    lineHeight:30,
    paddingLeft:2,
    color:'#FF0000',
  },
  thumb:{
    width: (Dimensions.get('window').width-18)/2,
    height: 200,
    backgroundColor:'#FF0000',
  },
});
