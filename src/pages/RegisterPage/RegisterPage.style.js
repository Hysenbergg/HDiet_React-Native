import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    top_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom_container: {
        flex: 1.5,
    }
})