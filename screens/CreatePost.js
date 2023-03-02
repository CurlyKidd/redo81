import *as React from 'react';
import {Text, StyleSheet, View} from 'react-native';

//Inheritance ---> the process of deriving a class from another class
//the keyword "extends" derives the class from one another
export default class CreatePost extends React.Component{
 render(){
    return(
        <View style = {styles.container}>
            <Text style = {styles.textStyle}>CREATE POST</Text>
        </View>
    )
 }
}


//JSON --> Java Script Object Notation --> {key1:value, key2:value}
//JSX --> {{}} 
const styles = StyleSheet.create({
    container:{flex:1, backgroundColor:"yellow"}, 
    textStyle:{marginTop:200, alignSelf:"center", fontSize:30, fontWeight:"bold"}
}) 