import react  from "react";
import {createDawerNavigator} from "@react-navigation/dawer";
import musicCategory from "../screens/musicCategory";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";



const Dawer=createDawerNavigator();
const DawerNavigator= ()=>{
    return(
        <Drawer.Navigator screenOptions={{headerShown: false}}> 
        <Drawer.screen name="Home" component={TabNavigator}/> 
        <Drawer.screen name="Profile" component={Profile}/> 
    
        <Drawer.Navigator/>
    )
    
    


}
export default DrawerNavigator;
