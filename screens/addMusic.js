import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default class addMusic extends Component {
    render() {
        return (
            <View style={styles.container}><Text>addMusic page</Text></View>

        )
    }


}
const style=StyleSheet.create({
container:{
flex:1,
justifyContent: "center",
alignItems: "center"
}




})