import React, { Component } from 'react';
import { 
    AppRegistry,
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

class splash extends Component{
    render(){
        return (
             <View style = {styles.stylish}>
                   <Image 
                    style={styles.container}
                    source={require('./teknonusantara2160x120.png')}
                    />
                 </View>
                  
                );
            }
        }
export default splash;

const styles = StyleSheet.create({
    container: {width:160, height:125},
    stylish: {backgroundColor: 'rgb(0,0,0)', justifyContent:'center',flex:1, alignItems: 'center'}
});

