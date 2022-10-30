import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantScreen } from "../../features/restaurants/screens/restauran.screen";
import { NavigationContainer } from "@react-navigation/native";
const RestaurantsStack = createNativeStackNavigator();

const RestaurantsNavigator = () => {
	return (
		<RestaurantsStack.Navigator>
			<RestaurantsStack.Screen
				name="Restaurants"
				component={RestaurantScreen}
			/>
		</RestaurantsStack.Navigator>
	);
};

export default RestaurantsNavigator;
