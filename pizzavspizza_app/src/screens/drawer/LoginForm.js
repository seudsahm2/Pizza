import React, { Component } from 'react'
import { StyleSheet, View, Text,SafeAreaView, TextInput, Button } from 'react-native'

import { Formik } from 'formik'

import client from '../../api/client'
import styles from './LoginForm_style'
import validationSchema from './LoginForm_valid'

const LoginForm = () => {

    const handleSubmit = async (values) => {
        const data = new FormData();
        data.append("username", values.username);
        data.append("password", values.password);
        try {
            console.log(data)
            const response = await client.post('/api-auth/',data,{
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            alert(response.data.token)
        }catch(error){
            console.log(error)
        }
    
    }
    return(
        
            
        <Formik
            initialValues={{
                username: "",
                password: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({ handleChange, handleSubmit, values, errors }) => (
            <SafeAreaView style = {styles.content}>
            <View style={styles.container}>
                    <Text style = {styles.title}>Login to your account</Text>
                    <TextInput
                        style={styles.textBox}
                        value={values.username}
                        type="text"
                        placeholder="Username"
                        onChangeText={handleChange("username")}
                    />
                    <Text style={styles.error}>{errors.username}</Text>

                    <TextInput
                        style={styles.textBox}
                        value={values.password}
                        placeholder="Password"
                        onChangeText={handleChange("password")}
                    />
                    <Text style={styles.error}>{errors.password}</Text>

                    
                    <Button
                        style={styles.addButton}
                        onPress={handleSubmit}
                        title="Submit"
                    />
                </View>
            </SafeAreaView>
            )}
        </Formik>
        
    )
    
}




export default LoginForm;