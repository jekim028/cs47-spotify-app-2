import { StyleSheet, Text, SafeAreaView, Image } from "react-native";
import SpotifyLogo from '../assets/spotify-logo.png';

const Header = () => {
    return (
        <SafeAreaView style={styles.headerContainer}>
            <Image style={styles.logo} source={SpotifyLogo}/>
            <Text style={styles.headerText}>My Top Tracks</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    logo: {
        width: 30,
        height: 30,
        margin: 5
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5,
    }
});

export default Header;