import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,TextInput,Altert,TouchableOpacity,SafeAreaView, Platform ,StatusBar} from "react-native";
import firebase from "firebase";
import {RFValue} from "react-native-responsive-fontsize";

export default class LoginScreen extends Component{
constructor(){
    super();
    this.state={
        email:"",
        password:"",
        userSignedIn: false,
    };
}
signIn=async(email,password)=>{
 
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(()=>{this.props.navigation.replace("Profile")})
    .catch(error=>{Altert.altert("error.message")})
}



render(){
    <View style={style.container}>
<SafeAreaView style={styles.DroidSafeArea}/>
<Text>MusicApp</Text>
<TextInput 
style={styles.TextInput}
onChangeText={text=>this.setState({email:text})}
placeHolder={"Enter Email"}
placeHolderTextColor={"black"}
autoFocus
/>
<TextInput
style={styles.TextInput }
onChangeText={text=>this.setState({password:text})}
placeHolder={"Enter Password"}
placeHolderTextColor={"black"}
secureTextEntery
/>
<TouchableOpacity
style={styles.button}
onPress={this.signIn (email,password)}
>
    <Text
    style={styles.buttonText}
    >LogIn</Text>
</TouchableOpacity>
    </View>
}

}
 const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#151936",
        alignItems:"center",
        justifyContent:"center"
    },
DroidSafeArea:{
    marginTop:Platform.OS==="android"? StatusBar.currentHeight:RFValue(35),

},
AppTitle:{
    fontSize:RFValue(40),
    color:"white",
    textAlign:"center",
    marginBottom:20,

},
TextInput:{
    width:RFValue(250),
    height:RFValue(250),
    padding:RFValue(10),
    marginBottom:RFValue(10),
    borderRadius:RFValue(10),
    borderWidth:RFValue(5),
    color:"#FFFFFF",
    fontSize:RFValue(20),

},button:{
    width:RFValue(200),
    height:RFValue(50),
    borderRadius:RFValue(30),
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#ffffff"

},
buttonText:{
    fontSize:RFValue(25),
    color:"RED",

},
 })