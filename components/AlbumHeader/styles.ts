import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 15,
    },
    image: {
        width: 200,
        height: 200,
        margin: 15,
    },
    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    creatorContainer: {
        flexDirection: 'row'
    },
    creator: {
        color: 'lightgray',
        margin: 5,
        fontSize: 20,
    },
    likes: {
        color: 'lightgray',
        margin: 5,
        fontSize: 20,
    },
    button: {
        backgroundColor: '#6da45f',
        height: 50,
        width: 150,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'lightgray',
        fontWeight: 'bold',
        fontSize: 24,

    }

})

export default styles;