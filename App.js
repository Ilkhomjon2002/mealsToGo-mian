import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, StatusBar, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { RestaurantScreen } from "./src/features/restaurants/screens/restauran.screen";
import { theme } from "./src/infrastructure/theme";
import {
	useFonts as useOswald,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurant.context";
const Tab = createBottomTabNavigator();

const Settings = () => {
	return (
		<SafeArea>
			<Text>Setting</Text>
		</SafeArea>
	);
};
const Map = () => {
	return (
		<SafeArea>
			<Text>Setting</Text>
		</SafeArea>
	);
};

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});
	const [latoLoaded] = useLato({
		Lato_400Regular,
	});
	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}
	return (
		<>
			<ThemeProvider theme={theme}>
				<RestaurantsContextProvider>
					<NavigationContainer>
						<Tab.Navigator
							screenOptions={({ route }) => ({
								tabBarIcon: ({ focused, color, size }) => {
									let iconName;
									if (route.name === "Restaurants") {
										iconName = focused ? "restaurant" : "restaurant-outline";
									} else if (route.name === "Map") {
										iconName = focused ? "map" : "map-outline";
									} else if (route.name === "Settings") {
										iconName = focused ? "settings" : "settings-outline";
									}

									return (
										<Ionicons
											name={iconName}
											size={size}
											color={color}
										></Ionicons>
									);
								},
								tabBarActiveTintColor: "tomato",
								tabBarInactiveTintColor: "gray",
								headerShown: false,
							})}
						>
							<Tab.Screen name="Restaurants" component={RestaurantScreen} />
							<Tab.Screen name="Map" component={Map} />
							<Tab.Screen name="Settings" component={Settings} />
						</Tab.Navigator>
					</NavigationContainer>
				</RestaurantsContextProvider>
				<ExpoStatusBar style="auto" />
			</ThemeProvider>
		</>
	);
}
