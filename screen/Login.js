import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from 'react-native';

const Login = (props) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState({
        loadingLogin: false,
        loadingSign: false
    })

    const AuthSign = async () => {
        try {
            setLoading({ loadingSign: true })
            const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBCkNcfpBOa6YDdfV53KV2QCBoRG3RrQJc", {
                method: "post",
                headers: {
                    'Content-type':'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            })

            const resData = await response.json()
            if (response.ok) {
                props.navigation.navigate('Album')
            } else {
                Alert.alert('An Error Occured!', resData.error.message, [
                    {
                        text: 'Ok'
                    }
                ])
            }
            setLoading({ loadingSign: false })
        } catch (error) {
            setLoading({ loadingSign: false })
        }
    }

    const AuthLogin = async () => {
        try {
            setLoading({ loadingLogin: true })
            
            const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBCkNcfpBOa6YDdfV53KV2QCBoRG3RrQJc", {
                method: "post",
                headers: {
                    'Content-type':'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            })
            
            const resData = await response.json()
            if (response.ok) {
                props.navigation.navigate('Album')
            } else {
                Alert.alert("An Error Occured!", resData.error.message, [
                    {
                        text: 'Okay'
                    }
                ])
            }   
            setLoading({ loadingLogin: false })
        } catch (error) {
            setLoading({ loadingLogin: false })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>
                MyApp
            </Text>
            <View style={styles.inputView}>
                <TextInput 
                 style={styles.inputText} 
                 placeholder="Email.." 
                 placeholderTextColor="#0003f5" 
                 onChangeText={(text) => {
                    setEmail(text)
                 }}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput 
                 secureTextEntry 
                 style={styles.inputText} 
                 placeholder="Password.." 
                 placeholderTextColor="#0003f5" 
                 onChangeText={(text) => {
                    setPassword(text)
                 }}
                />
            </View>
            <TouchableOpacity onPress={ () => {
                console.log('forget password')
            }}>
                <Text style={styles.forget}>
                    Forgot Password
                </Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.loginButton} onPress={AuthLogin}>
                { loading.loadingLogin ? <ActivityIndicator size="small" color="white" /> : <Text style={styles.loginText}>
                    Login
                </Text> }
            </TouchableOpacity>
            
            <TouchableOpacity onPress={AuthSign}>
                { loading.loadingSign ? <ActivityIndicator size="small" color="white" /> : <Text style={styles.signupText}>
                    Signup
                </Text> }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#003f5c",
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fb5b5a',
        marginBottom: 30,
    },
    inputView: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20
    },
    inputText: {
        height: 50,
        color: '#000',
        padding: 10,
    },
    loginButton: {
        width: '80%',
        backgroundColor: '#fb5b5a',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    loginText: {
        color: '#fff'
    },
    forget: {
        color: '#fff',
        fontSize: 11
    },
    signupText: {
        color: '#fff',
        fontSize: 11
    }

})

export default Login