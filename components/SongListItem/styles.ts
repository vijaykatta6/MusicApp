import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      margin: 15,
      
    },
    rightContainer: {
      justifyContent: 'space-around',
      marginLeft: 10,
    },
    image: {
        width: 50,
        height: 50
    },
    title: {
        color: 'white',
        fontSize: 20,
    },
    artist: {
        color: 'lightgray',
        fontSize: 15,
    }
})

export default styles;