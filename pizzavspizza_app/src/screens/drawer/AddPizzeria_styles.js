import { StyleSheet } from "react-native";

import validationSchema from "./AddPizzeria_valid";

const styles = StyleSheet.create({
    textBox: {
        borderColor: "#CCCCCC",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        paddingRight: 20,
        paddingLeft: 20,
    },
    error: {
        color: "red",
        fontSize: 13,
        marginBottom: 7,
        fontWeight: "600",
        paddingRight: 20
    },
    image: {
        width: 300,
        height: 200,
    },
    addButton: {
        borderWidth: 1,
        borderColor: "#007BFF",
        backgroundColor: "#007BFF",
        padding: 15
    },
    container: {
        justifyContent: "center",
        backgroundColor: "#000000",
        width: "100%",
        height: "100%",
    }
})

export default styles;