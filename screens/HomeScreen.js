import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { useSpotifyAuth } from "../utils";
import { Themes } from "../assets/Themes";
import SpotifyAuthButton from "../components/SpotifyAuthButton.js";
import SongList from "../components/SongList";

export default function HomeScreen(props) {
    const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
    const navigation = props.navigation

    let contentDisplayed = null;

    if (token) {
        contentDisplayed = <SongList tracks={tracks} />;
    } else {
        contentDisplayed = (
            <SpotifyAuthButton authenticationFunction={getSpotifyAuth} />
        );
    }

    return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        {contentDisplayed}
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
