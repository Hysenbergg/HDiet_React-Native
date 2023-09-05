import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 10,
        marginHorizontal: 5,
        marginVertical: 10
    },
    input_title: {
        position: "absolute",
        top: -11,
        left: 6,
        backgroundColor: colors.white,
        paddingHorizontal: 5
    },
    input: {
        fontSize: 15,
        marginLeft: 5,
        color: colors.black
    }
})