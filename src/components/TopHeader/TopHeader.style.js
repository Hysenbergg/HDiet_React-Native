import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default StyleSheet.create({
    container: {
        height: 100,
        alignItems: 'center',
        flexDirection: 'row'
    },
    title_container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    title: {
        fontSize: 24,
        color: colors.black,
        fontWeight: '600'
    },

    // for icon
    icon_container: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginHorizontal: 5,
    }
})