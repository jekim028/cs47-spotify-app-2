import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

export default DetailsScreen = ({route, navigation}) => {
    const { external_url } = route.params
    console.log(external_url)
    return (
        <WebView 
            source={{
                uri: external_url,
            }}
        />
    );
};

const styles = StyleSheet.create({});