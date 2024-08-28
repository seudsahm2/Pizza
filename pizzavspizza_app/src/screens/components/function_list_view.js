import React, { useState, useEffect } from 'react'

import { StyleSheet, SafeAreaView, Image, Text, Button, FlatList, TouchableOpacity, View } from 'react-native'

import client from './../../api/client'

import Card from './shared/card'

const ListView = ({navigation}) => {

    const [data, setData] = useState([])

    const getList = async () => {
    
        const response = await client.get("/")
        setData(response.data)

    }
    useEffect(() => {
        getList()
    },[])

    const mytext = "seud abdulsemed"
    return (
        
        <SafeAreaView>
            <View style={styles.container}>
                <FlatList
                    data = {data}
                    keyExtractor = {(item) => item.id.toString()}
                    renderItem = {({item}) => {
                        return(
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("Detail", {objurl:item.absolute_url, hey: "Best Pizza"})
                                }}
                            >
                                <Card 
                                    logo = {item.logo_image}
                                    title = {item.pizzeria_name}
                                    details = {item.city}
                                />
                            </TouchableOpacity>
                        )            
                    }}
                />
            </View>
        </SafeAreaView>
    )

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
    },
    container: {
        backgroundColor: "#eeeeee",
        padding: 20,
      }
});

export default ListView;

