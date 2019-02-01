//uas
//4 menu
//1. profile -> 15
//2. deskripsi selama hidup 15
//3. sosmed 15
//4. map rumah 25
//5. berita anda / diary anda (networking) -> 30


import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import Drawer from "./nav";
import Splash from "./komponen/splash";
import axios from 'axios';
// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        timePassed: false,
    };
  }
  componentDidMount() {
    setTimeout( () => {
        this.setTimePassed();
    },3000);
}

setTimePassed() {
    this.setState({timePassed: true});
}

render() {
    if (!this.state.timePassed) {
        return <Splash/>;
    } else {
        return <Drawer/>;
    }
}
}
