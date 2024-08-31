import { StyleSheet } from "react-native";

import validationSchema from "./AddPizzeria_valid";

const styles = StyleSheet.create({
    textBox: {
        borderColor: "#CCCCCC",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 15,
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
    content: {
        padding: 20,
        backgroundColor: "#ffffff",
        width: "100%",
        height: "100%",
    },
    addButton: {
        borderWidth: 1,
        borderColor: "#007BFF",
        backgroundColor: "#007BFF",
        padding: 15
    },
    container: {
        paddingTop: 50
    },
    title: {
        fontSize: 20,
        color: "black",
        textAlign: "center",
        paddingBottom: 20
    }
})

export default styles;