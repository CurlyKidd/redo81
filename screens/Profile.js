import * as React from 'react';
import {Text,View,StyleSheet} from 'react-native'

export default class Profile extends React.Component{
    render(){
       return(
           <View style = {styles.container}>
               <Text style = {styles.textStyle}>Profile</Text>
           </View>
       )
    }
   }
   
   const styles = StyleSheet.create({
       container:{flex:1, backgroundColor:"yellow"}, 
       textStyle:{marginTop:200, alignSelf:"center", fontSize:30, fontWeight:"bold"}
   }) 