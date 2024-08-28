import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, Image, Text, Button, FlatList } from 'react-native'

import client from './../../api/client'


class ListView extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: [],
        }
    }



    async componentDidMount(){
        try {
            const response = await client.get("/")
            if(!response.ok) {
                this.setState({data: response.data})
            }
        }catch (error) {
            console.log(error)
        }

    }

    render(){
        const {data} = this.state
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
                <Text>{data.length} Pizzerias</Text>
                <Text style = {styles.title}>List View</Text>
                <FlatList
                    data = {data}
                    keyExtractor = {(item) => item.id.toString()}
                    renderItem = {({item}) => (
                        <Text style = {styles.itemText}>
                            {item.pizzeria_name}, {item.city}
                            {/* {item.title}, {item.collections} */}
                        </Text>
                    )}
                />
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
        width: 150,
        height: 100,
    },
    itemText: {
        color:"green",
        fontSize: 10,
    }
});

export default ListView;

