import *as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

export default class Feed extends React.Component {
  render(){
    return(
      <View>
        <Text >FEED SCREEN</Text>
      </View>
    )
  }
}//{key1:value, key2:value}
const styles = StyleSheet.create ({
  container: {flex:1, backgroundColor:"blue"},
  textStyle: {fontWeight:"bold",}
})