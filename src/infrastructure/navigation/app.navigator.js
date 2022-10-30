import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import RestaurantsNavigator from "./restaurants.navigation";
import { RestaurantScreen } from "../../features/restaurants/screens/restauran.screen";
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
const AppNavigator = () => {
	return (
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
							<Ionicons name={iconName} size={size} color={color}></Ionicons>
						);
					},
					tabBarActiveTintColor: "tomato",
					tabBarInactiveTintColor: "gray",
					headerShown: false,
				})}
			>
				<Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
				<Tab.Screen name="Map" component={Map} />
				<Tab.Screen name="Settings" component={Settings} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
