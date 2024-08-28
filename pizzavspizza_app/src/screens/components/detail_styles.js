import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 10,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'serif',
        margin: 10,
        marginBottom: 5,
        color: 'red',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    pizzaImage: {
        width: screenWidth * 0.9,  // Make the image take 90% of the screen width
        height: screenWidth * 0.9,  // Keep the image square
        marginBottom: 10,
        borderRadius: 20,
        resizeMode: 'cover', // To ensure the image doesn't get cut off
    },
    details: {
        margin: 10,
        marginBottom: 5,
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default styles;
