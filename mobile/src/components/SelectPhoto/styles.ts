import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        position: "absolute",
        bottom: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#00000066',
    },

    content: {
        backgroundColor: '#6842C2',
        height: 600,
        width: "95%",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        borderColor: '#774DD6',
        borderWidth: 2
    },

    imageBox: {
        backgroundColor: '#9871F5',
        width: 260,
        height: 260,
        borderRadius: 130,
        justifyContent: "center",
        alignItems: "center"
    },

    image:{
        width: 250,
        height: 250,
        borderRadius: 125
    },

    buttonSelectPictureGroup: {
        marginVertical: 50,
        flexDirection: "row",
        justifyContent:"center",
        alignItems: "center",
    },

    buttonSelectPicture:{
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 8,
        backgroundColor: "#8257E5",
        justifyContent:"center",
        alignItems: "center",
        borderColor: '#FFF',
        borderWidth: 1
    },

    buttonText:{
        color: "#FFF",
        fontFamily: "Archivo_700Bold",
        fontSize: 11,
    },

    buttonActionsGroup: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
    },

    buttonAction:{
        flexDirection: "row",
        justifyContent:"center",
        alignItems: "center",
        marginHorizontal: 14,
        padding: 10,
        borderRadius: 4,
        borderColor: '#FFF',
        borderWidth: 1
    },

    buttonSave:{
        backgroundColor: "#04D361"
    },

    buttonDelete:{
        backgroundColor: "#E33D3D"
    },

    buttonClose:{
        backgroundColor: "#828282"
    },
})

export default styles;