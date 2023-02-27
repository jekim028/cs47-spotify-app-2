import { FlatList, Text, View, StyleSheet, ScrollView } from "react-native";
import { Themes } from "../assets/Themes";
import Song from "./Song";
import Header from "./Header";


const renderSong = ({item}) => (
    <Song
        imageUrl={item.imageUrl}
        songTitle={item.songTitle}
        songArtists={item.songArtists}
        albumName={item.albumName}
        duration={item.duration}
        previewUrl={item.previewUrl}
        externalUrl={item.externalUrl}
    />
);

const SongList = ({tracks}) => {
    console.log(tracks)
    return (
        <View style={styles.container}>
            <Header>{Header}</Header>
            <FlatList
                data={tracks}
                renderItem={(item, index) => renderSong(item)}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: '100%',
        marginTop: 20,
        marginLeft: 5,
        marginBottom: 20,
    },
    text: {
        color: Themes.colors.gray,
    }
});

export default SongList;