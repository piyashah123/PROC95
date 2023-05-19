import React, { Component } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import addMusic from '../screens/addMusic';
import musicCategory from '../screens/musicCategory';



const Tab=createBottomTabNavigator();



const BottomTabNavigator=()=>{
    return{
        <Tab.Navigator 
        screenOptions={
            ({route})=>({
                tabBarIcon:({focused,color,size})=>{
                    let IocnName;
                    if (route.name=='musicCategory'){
                        IocnName='music';
                        
                    }
                    else if (route.name=='addMusic'){
                        IocnName='create';
                    }
                    return <IocnName name={IocnName} size={size} color={color} />


                } 
            }) }
            tabBarOption = {{
                activeTindcolor: 'red',
                inactiveTindcolor: 'grey'
            }}
            

        
        >
        
            <Tab.Screen name="musicCategory" component={musicCategory} options={{headerShown: false}}/>
            <Tab.Screen name="addMusic" component={addMusic} options={{headerShown: false}}/>

        
        
        </Tab.Navigator>
    }
}
export default BottomTabNavigator;