import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfo } from "../components/restaurant-info-component";

const RestaurantDetailScreen = ({ route }) => {
	const { restaurant } = route.params;
	console.log(route.params);
	return (
		<SafeArea>
			<RestaurantInfo restaurant={restaurant}></RestaurantInfo>
		</SafeArea>
	);
};

export default RestaurantDetailScreen;
