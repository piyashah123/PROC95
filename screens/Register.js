import React ,{Componemt} from "react";
import {View,StyleSheet,Text,SafeAreaView,Platform,Image,TextInput,TouchableOpacity} from "react-native";
import {firebase} from "firebase";
 import {RFValue} from "react-native-responsive-fontSize";
export default class RegisterScreen extends Componemt{
    constructor(){
        super();
        this.state={
            firstName : "",
            lastName : "",
            Email: "",
            password: "",
            confirmPassword:"",

        }

    }
    
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.DriodSafeArea}/>
            <Text style={styles.AppTitle}>Register</Text>
            <TextInput
             style={styles.textInput}
             onChangeText={text=>this.setState({firstName:text})}
             placeholder={"Enter first Name"}
             placeholderTextColor={"#ff00f4"}
             />
             <TextInput
             style={styles.textInput}
             onChangeText={text=>this.setState({lastName:text})}
             placeholder={"Enter last Name"}
             placeholderTextColor={"#ff00f4"}
             />
             <TextInput
             style={styles.textInput}
             onChangeText={text=>this.setState({Email:text})}
             placeholder={"Enter Email"}
             placeholderTextColor={"#ff00f4"}
             />
             <TextInput
             style={styles.textInput}
             onChangeText={text=>this.setState({password:text})}
             placeholder={"Enter password"}
             placeholderTextColor={"#ff00f4"}
             secureTextEntry
             />
             <TextInput
             style={styles.textInput}
             onChangeText={text=>this.setState({confirmPassword:text})}
             placeholder={"re-enter password" }
             placeholderTextColor={"#ff00f4"}
             secureTextEntry
             />
             <TouchableOpacity style={styles.Button} 
             onPress={()=>this.prpos.navigation.replace("LoginScreen")}
             ><Text>Register</Text></TouchableOpacity>
            </View>
        )
    }


}
const styles=StyleSheet.create(
    {
        container:{
            flex:1
        },
        DriodSafeArea:{
            marginTop:Platform.OS==="android"? StatusBar.currentHeight:RFValue(35),

        },
        AppTitle:{
            color:"#ffffff",
            fontSize: RFValue(30),
            marginBottom: RFValue(10),
            textAlign:"center"
        },
        textInput:{
            width:RFValue(250),
            height:RFValue(50),
            alignItems:"center",
            backgroundColor:"white",
            borderRadius:RFValue(10),
            borderColor:"#fff45f",
            marginTop:RFValue(10)
        },
        Button:{
            width:RFValue(250),
            height:RFValue(20),
            justifyContent:"space-evenly",
            borderRadius:RFValue(30),
            backgroundColor:"black",
            margineBotton: RFValue(20)

        },
    }
)