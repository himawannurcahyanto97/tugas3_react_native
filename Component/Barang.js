import React, {Component} from 'react';
import {SafeAreaView,
  StyleSheet, ScrollView,
  View, Text,
  StatusBar, TouchableOpacity, Button, Alert} from 'react-native';

export default class Barang extends Component {

constructor () {
  super();
  this.state = {
    jumlah : 0
  }
}

handletambah = () => {
  this.setState({
    jumlah : this.state.jumlah + 1
  })
}

handlekurang = () => {
if (this.state.jumlah>0){
  this.setState({
    jumlah : this.state.jumlah - 1,
  })
} else { alert ("Jumlah Tidak Boleh Kurang dari 0")
;}
}

render () {
  return (
    <View style={{flex:1}}>
    <Text style={{flex:0.2,backgroundColor: "yellow", textAlign:"center", fontSize:30, marginBottom:10}}>{this.props.data}</Text>
    <Text style={{textAlign:"right", marginRight:20, marginBottom:20}}> jumlah : {this.state.jumlah} </Text>
    <Text style={{textAlign:"center", fontSize:18}}> Silahkan Tekan Tombol Di Bawah ini </Text>
    <View style={{flexDirection:"row"}}>

    <TouchableOpacity onPress = {this.handletambah} style={styles.jumlah} >
    <Text style={{backgroundColor: "pink", textAlign:"center", fontSize:30}}> + </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress = {this.handlekurang} style={styles.jumlah}>
      <Text style={{backgroundColor: "red", textAlign:"center", fontSize:30}}> - </Text>
    </TouchableOpacity>

    </View>

    <Text style={{color: "blue", textAlign:"center", marginTop:50, fontSize:50}}> {this.state.jumlah} </Text>
    </View>
  );
};
}

const styles = StyleSheet.create ({

  jumlah : {
    color : "white",
    textAlign : "center",
    margin: 20,
    flex : 1
  }
  })
