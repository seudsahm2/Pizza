import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, Text, Button } from 'react-native'

class DetailView extends Component {
    render(){
        return (
            <SafeAreaView style = {styles.center}>
                <Text style = {styles.title}>Detail View</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    center: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 36,
        marginBottom: 16,
    },
});

export default DetailView;

