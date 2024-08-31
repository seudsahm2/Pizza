import React, { useState, useEffect } from 'react'
import { Text, View, Image, FlatList, ScrollView, Dimensions } from 'react-native'
import client from './../../api/client'
import styles from './detail_styles'

const DetailView = ({navigation, route}) => {

    const {objurl} = route.params;
    const {hey} = route.params;
    const [detail, setDetail] = useState(" ")

    const getDetail = async(url) => {
        try{
            const response = await client.get(url);
            if(!response.ok){
                setDetail(response.data);
            }
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getDetail(objurl);
    },[])

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <FlatList
                horizontal = {true}
                data={detail.pizzeria_images}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                return (
                    <Image
                    style={styles.pizzaImage}
                    source={{
                        uri: item.image,
                    }}
                    />
                );
                }}
            />
            <Text style={styles.title}>Pizzeria: {detail.pizzeria_name}</Text>  
            <Text style={styles.details}>Address: {detail.street}</Text>
            <Text style={styles.details}>City: {detail.city}, {detail.state},{detail.zip_code}</Text>
            <Text style={styles.details}>Web: {detail.website}</Text>   
            <Text style={styles.details}>Ph: {detail.phone_number}</Text>
            <Text style={styles.details}>Description: {detail.description}</Text>
            <Text style={styles.details}>Email: {detail.email}</Text>
        </ScrollView>
    )
    
}


export default DetailView;

