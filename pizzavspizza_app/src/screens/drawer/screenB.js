import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Button, Image } from 'react-native'

import * as ImagePicker from "expo-image-picker"

const ScreenB = () =>  {

    const [photo, setPhoto] = useState(null);

    const getPermission = async() => {
        const {status} = await ImagePicker.requestCameraPermissionsAsync();
        if(status !== "granted") {
            alert("Enable camera roll permissions")
        }    
    }

    useEffect(() => {
        getPermission()
    }, [])

    const selectPhoto = async() => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                // allowsEditing: true,
                // aspect: [4, 3],
                // quality: 1,
            });
            if (!result.canceled) {
                setPhoto(result.assets[0].uri)
            }
        }
        catch(error) {
            alert(" error try again")
        }
    }


    return(
        <View style={styles.center}>
            <Image style = {styles.photo} source={{uri:photo}} />
            <Button title="select image" onPress={selectPhoto} />
        </View>
    )

}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize:36,
        marginBottom:16,
    },
    photo: {
        width: 400,
        height: 400,
    },
})


export default ScreenB;