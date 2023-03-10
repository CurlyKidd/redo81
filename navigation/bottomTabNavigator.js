import *as React from 'react';
import CreatePost from '../screens/CreatePost';
import Feed from '../screens/Feed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ()=>{
 return(
   <Tab.Navigator>
    <Tab.Screen name="Feed" component={Feed}/>
    <Tab.Screen name="Add Post" component={CreatePost}/>
   </Tab.Navigator>
 )
}

export default BottomTabNavigator;