import { Image } from 'react-native';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';

export default Header = (props) => {
    return (

        <Appbar.Header style={styles.header}>
        <Text style={styles.text}>{props.user}</Text>
        <Image style={styles.image} source={require('./rt0.png')}/>
        </Appbar.Header>

    )
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#d3d3d3',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        position: 'absolute',
        left: 15,
    }
})
