import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,} from 'react-native';

export default class Header extends Component {
  render () {
    return (
      <View style={{backgroundColor: "yellow"}}>
      <Text style={{textAlign: "center", marginTop:30}}> TUGAS 3 REACT NATIVE </Text>
      </View>
    )
  }
}
