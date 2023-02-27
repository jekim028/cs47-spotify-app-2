import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

export default PreviewScreen = ({ route, navigation }) => {
    const { url } = route.params
    return (
        <WebView 
            source={{
                uri: url,
            }}
        />
    );
};

// export default PreviewScreen;

const styles = StyleSheet.create({});