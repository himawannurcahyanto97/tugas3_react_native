/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity } from "react-native";
import Barang from "./Component/Barang";
import Header from "./Component/Header";

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
      <StatusBar backgroundColor = "green" />
      <Header />
      <Barang data="SELAMAT DATANG" />
      </View>
      )
  }
}
