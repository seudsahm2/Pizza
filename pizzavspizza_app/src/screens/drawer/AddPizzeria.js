import React, {useState} from 'react'
import {TextInput,
    Button,
    Text,
    Image,
    ScrollView,
    SafeAreaView,
    NativeModules,
    Alert,
    View,
  } from "react-native";


import {Formik} from 'formik'

import styles from './AddPizzeria_styles'
import validationSchema from './AddPizzeria_valid'
import client from '../../api/client'
import PhotoPicker from '../components/shared/photo'


const AddPizzeria = () => {

    const [photo, setPhoto] = useState("");


    const postedAlert = () => {
        Alert.alert("Success!", "Thank you!",[
            {
                text: "Go to main screen",
                onPress: () => NativeModules.DevSettings.reload()
            }
        ])
    }


    const handleSubmit = async(values) => {
        const data = new FormData();
        data.append("pizzeria_name", values.pizzeria);
        data.append("street", values.street);
        data.append("city", values.city);
        data.append("state", values.state);
        data.append("zip_code", values.zip_code);
        data.append("website", values.website);
        data.append("phone_number", values.phone_number);
        data.append("pizzeria_name", values.pizzeria);
        data.append("description", values.description);
        data.append("email", values.email);
        data.append("logo_image",{
            uri:photo,
            name: "filename.jpg",
            type: "image/jpg"
        })

        try{
            const response = await client.post('/create/',data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            .then(function(response){
                console.log(response)
            })
            .catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.error('Response data:', error.response.data);
                    console.error('Response status:', error.response.status);
                    console.error('Response headers:', error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error('Request data:', error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error('Error message:', error.message);
                }
                console.error('Config:', error.config);
            });
            postedAlert();
        }catch (error){
            console.log(error)
        }
    }

    return(
        <Formik
            initialValues={{
                pizzeria: "",
                street: "",
                city: "",
                state: "",
                zip_code: "",
                website: "",
                phone_number: "",
                description: "",
                email: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
        {({ handleChange, handleSubmit, values, errors }) => (
          <SafeAreaView>
            <ScrollView>
                {/* <Image 
                    source={require('../../../assets/pizza_image2.png')} 
                    style={styles.image} 
                /> */}
                <PhotoPicker photo={photo} onPressPhoto={(uri)=> setPhoto(uri)} />

                <TextInput
                    style={styles.textBox}
                    value={values.pizzeria}
                    type="text"
                    placeholder="Enter Pizzeria"
                    onChangeText={handleChange("pizzeria")}
                />
                <Text style={styles.error}>{errors.pizzeria}</Text>

                <TextInput
                    style={styles.textBox}
                    value={values.street}
                    placeholder="Street address"
                    onChangeText={handleChange("street")}
                />
                <Text style={styles.error}>{errors.street}</Text>

                <TextInput
                    style={styles.textBox}
                    value={values.city}
                    placeholder="City"
                    onChangeText={handleChange("city")}
                />
                <Text style={styles.error}>{errors.city}</Text>
                <TextInput
                    style={styles.textBox}
                    value={values.state}
                    placeholder="State"
                    onChangeText={handleChange("state")}
                />
                <Text style={styles.error}>{errors.state}</Text>
                <TextInput
                    style={styles.textBox}
                    value={values.zip_code}
                    placeholder="Zip"
                    onChangeText={handleChange("zip_code")}
                />
                <Text style={styles.error}>{errors.zip_code}</Text>
                <TextInput
                    style={styles.textBox}
                    value={values.website}
                    placeholder="Website"
                    onChangeText={handleChange("website")}
                />
                <Text style={styles.error}>{errors.website}</Text>
                <TextInput
                    style={styles.textBox}
                    value={values.phone_number}
                    placeholder="Phone number"
                    onChangeText={handleChange("phone_number")}
                />
                <Text style={styles.error}>{errors.phone_number}</Text>
                <TextInput
                    style={styles.textBox}
                    value={values.description}
                    placeholder="Description"
                    onChangeText={handleChange("description")}
                />
                <Text style={styles.error}>{errors.description}</Text>
                <TextInput
                    style={styles.textBox}
                    value={values.email}
                    placeholder="Email"
                    onChangeText={handleChange("email")}
                />
                <Text style={styles.error}>{errors.email}</Text>
                <Button
                    style={styles.addButton}
                    onPress={handleSubmit}
                    title="Submit"
                />
            </ScrollView>
          </SafeAreaView>
        )}
      </Formik>
    )
}


export default AddPizzeria;