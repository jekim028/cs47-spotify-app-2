import { StyleSheet, Text, View, Image, ScrollView, Pressable } from "react-native";
import { Themes } from "../assets/Themes";
import { millisToMinutesAndSeconds } from "../utils";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import PreviewScreen from "../screens/PreviewScreen";
import DetailsScreen from "../screens/DetailsScreen";

const SongArtists = ({SongArtists}) => {
    return (
        <Text style={styles.songArtists} numberOfLines={1}>
            {SongArtists.map(
                ({name}) => `${name}`
            ).join(", ")}
        </Text>
    );
};

const PreviewScreenButton = (props) => {
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => (
                navigation.navigate('PreviewScreen')
            )}>
            <Ionicons name="play-circle" style={styles.playButton} size={20} />
        </Pressable>
    );
};

const Song = ({ imageUrl, songTitle, songArtists, albumName, duration, previewUrl, externalUrl }) => {
    const navigation = useNavigation();
    console.log(externalUrl);

    return (
        <View style={styles.song}>
            <View style={styles.playBox}>
                <Pressable
                    onPress={() => (
                        navigation.navigate('PreviewScreen', {url: previewUrl})
                )}>
                    <Ionicons name="play-circle" style={styles.playButton} size={20} />
                </Pressable>
            </View>
            <Image style={[styles.image, styles.albumCover]} source={{uri: imageUrl}}/>
            <View style={styles.songArtistContainer}>
                <Pressable
                    onPress={() => (
                        navigation.navigate('DetailsScreen', {external_url: externalUrl})
                )}>
                    <Text style={[styles.songTitle]} numberOfLines={1}>{songTitle}</Text>
                </Pressable>
                <SongArtists SongArtists={songArtists} />
            </View>
            <Text style={[styles.albumName]} numberOfLines={1}>{albumName}</Text>
            <Text style={[styles.duration]} numberOfLines={1}>{millisToMinutesAndSeconds(duration)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    song: {
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        alignItems: "center",
        width: '100%',
        justifyContent: 'center',
    },
    playBox: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.05,
        marginRight: 2
    },
    playButton: {
        color: Themes.colors.spotify,
    },
    albumCover: {
        resizeMode: "contain",
        flex: 0.2,
        width: 50,
        height: 50,
    },
    songArtistContainer: {
        flex: 0.4,
        margin: 5
    },
    songTitle: {
        color: Themes.colors.white,
        fontSize: 12,
    },
    songArtists: {
        color: Themes.colors.gray,
        fontSize: 12,
    },
    albumName: {
        color: Themes.colors.white,
        flex: 0.22,
        fontSize: 12,
        margin: 5,
    },
    duration: {
        color: Themes.colors.gray,
        flex: 0.1,
        fontSize: 12,
        marginLeft: 2,
    },
  });

export default Song;