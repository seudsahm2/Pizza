import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, Image, Text, Button } from 'react-native'

class ListView extends Component {
    render(){
        const mytext = "seud abdulsemed"
        return (
            <SafeAreaView style = {styles.center}>
                <Image 
                    source={require('../../../assets/pizza_image2.png')} 
                    style={styles.pizzaImage} 
                />
                {/* <Image
                    style={styles.pizzaImage}
                    source={{
                    uri: "https://bit.ly/book-pizza",
                    }}
                />     this is to incllude image from web*/}
                <Text style={styles.baseText}>Pizza vs Pizza App</Text>
                <Text style = {styles.newText}>{mytext}</Text>
                <Text style = {styles.title}>List View</Text>
                <Button 
                    title="list Item, click for details" 
                    onPress={() => this.props.navigation.navigate("Detail")}
                />
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
    baseText: {
        color: 'navy',
        fontSize: 30,
        fontStyle: 'italic',
    },
    newText: {
        color: 'red',
    },
    pizzaImage: {
        width: 300,
        height: 200,
    },
});

export default ListView;

