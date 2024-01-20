import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Text,
	ImageBackground,
	Image,
	Alert,
	ToastAndroid,
	KeyboardAvoidingView,
} from 'react-native';
 
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
const bgImg = require("assets/background2.png")
const AppIcon =  require ("assets/appIcon.png")
const AppName = require("assets/appName.png")
 
export default class LoginScreen extends Component {
	constructor(props){
		super(props)
		this.state = {
			email : "",
			password : ""
		}
	}
	

handleLogin = (email,password)=>{
	const auth = getAuth()
	signInWithEmailAndPassword(auth,email,password).then(()=>{
		this.props.navigation.navigate("BottomTab")
	})
	.catch((error)=> {
		Alert.alert(error.message)
	
	})

	
}

	render(){
		return (
			<KeyboardAvoidingView behavior='padding' style={styles.container}>
				<ImageBackground source={bgImage} style={styles.bgImage}>
					<View style={styles.upperContainer}>
						<Image source={appIcon} style={styles.appIcon} />
						<Image source={appName} style={styles.appName} />
					</View>
					<View style={styles.lowerContainer}>
						<View style={styles.textinputContainer}>
							<TextInput
								style={styles.textinput}
								placeholder={'Username/Email'}
								placeholderTextColor={'#FFFFFF'}
								
								onChangeText={(text) => this.setState({ email: text })}
							/>
							
						
							<TextInput
								style={styles.textinput}
								placeholder={'Password'}
								placeholderTextColor={'#FFFFFF'}
								
								onChangeText={(text) => this.setState({ password: text })}
							/>
							
						</View>
						<TouchableOpacity
							style={[styles.button, { marginTop: 25 }]}
							onPress={this.handleLogin(email,password)}>
							<Text style={styles.buttonText}>Login</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</KeyboardAvoidingView>
		);
	}
}
	