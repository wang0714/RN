import React,{
    Component,
    StyleSheet,
    Image,
} from 'react-native';

import FramePage from './framepage';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        var {navigator} = props;
        setTimeout(()=> {
            navigator.replace({name: 'FramePage', component: FramePage})
        }, 1000);
    }

    render() {
        return (
            <Image source={require('./images/Guide1.png')} style={styles.backgroundImage}/>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});
