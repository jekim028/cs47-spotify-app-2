// import { StyleSheet, SafeAreaView, Text } from "react-native";
// import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
// import SpotifyAuthButton from "./components/SpotifyAuthButton.js";
// import SongList from "./components/SongList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import PreviewScreen from "./screens/PreviewScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Themes.colors.background,
          },
          headerTitleStyle: {
            color: Themes.colors.white,
          },
          headerTintColor: Themes.colors.spotify,
        }}
      >
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name="DetailsScreen" 
          component={DetailsScreen} 
          options={{ 
            title: 'Song Details',
            headerBackTitleVisible: false
          }}
        />
        <Stack.Screen 
          name="PreviewScreen" 
          component={PreviewScreen} 
          options={{ 
            title: 'Song Preview',
            headerBackTitleVisible: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};