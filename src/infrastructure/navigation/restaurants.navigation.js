import React from "react";
import {
	createNativeStackNavigator,
	TransitionPresets,
} from "@react-navigation/native-stack";
import { RestaurantScreen } from "../../features/restaurants/screens/restauran.screen";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import RestaurantDetailScreen from "../../features/restaurants/screens/restaurantDetailScreen";

const RestaurantsStack = createNativeStackNavigator();
const RestaurantsNavigator = () => {
	return (
		<RestaurantsStack.Navigator headerMode={"none"}>
			<RestaurantsStack.Screen
				name="Restaurants"
				component={RestaurantScreen}
			/>
			<RestaurantsStack.Screen
				name="RestaurantDetail"
				component={<RestaurantDetailScreen></RestaurantDetailScreen>}
			/>
		</RestaurantsStack.Navigator>
	);
};

export default RestaurantsNavigator;
