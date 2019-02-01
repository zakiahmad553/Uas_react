import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import {
  StackNavigator, DrawerNavigator
} from 'react-navigation';

import ProfileSekolah from './komponen/profile';
import Home from './komponen/home';
import Info from './komponen/info';
 
const Stack2 = StackNavigator({
    Profile: {
      screen: ProfileSekolah,
      navigationOptions:({navigation}) => ({
        title: "Profile",
      })
    },
  });


const Homemenu = StackNavigator({
    Profile: {
      screen: Home,
      navigationOptions:({navigation}) => ({
        title: "Home",
      })
    },
  });

  const Infomenu = StackNavigator({
    Profile: {
      screen: Info,
      navigationOptions:({navigation}) => ({
        title: "Info api j",
      })
    },
  });



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white'}}>
        <Text style={{color:'blue',fontSize:27,fontWeight:'bold'}}>SELAMAT DATANG</Text>
        <Text style={{color:'black',}}>Di Teknonusantara.com</Text>
        <Text style={styles.container}>
        Teknonusantara membuat Belajar teknologi lebih menyenangkan, cepat, dan mudah.</Text>
         <Text style={{color:'black',}} onPress={this._handlePressdet}>Click Info lengkap Teknonusantara.</Text>
          <Text style={{color:'black',}} onPress={this._handlePressprof}> Click profile singkat Teknonusantara.</Text>
      </View>
    )
  }

  _handlePress = () => {
    this.props.navigation.navigate('Home');
  }

   _handlePressdet = () => {
    this.props.navigation.navigate('Detail');
  }

   _handlePressprof = () => {
    this.props.navigation.navigate('Profile');
  }
}

class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail'
  };

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handlePress}>ini detail Screen!</Text>
        <Text onPress={this._handlePresshome}>click disini menuju home!</Text>
      </View>
    )
  }

  _handlePresshome = () => {
    this.props.navigation.navigate('Home');
  }

   _handlePressdet = () => {
    this.props.navigation.navigate('Detail');
  }
}


export default DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Homemenu: {
    screen: Homemenu,
  },
  Profile: {
        screen: Stack2,
      },
  Detail: {
    screen: DetailScreen,
  },
  Info: {
    screen: Infomenu,
  },
});


const styles = StyleSheet.create({
    container: {width:200, height:125},
});