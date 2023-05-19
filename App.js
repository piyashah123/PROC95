import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DawerNavigator from "./navigation/DrawerNavigator";

export default function App(){
  return(
<NavigationContainer>
  <DawerNavigator/>
</NavigationContainer>
  )
  
}