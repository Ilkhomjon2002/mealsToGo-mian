import React, { useContext, useEffect } from "react";
import { Colors } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { RestaurantInfo } from "../components/restaurant-info-component";
import Search from "../components/search.component";
import { Loading, LoadingContainer, RestaurantList } from "./style";
export const RestaurantScreen = () => {
	const { isLoading, error, restaurants } = useContext(RestaurantsContext);

	return (
		<SafeArea>
			{isLoading && (
				<LoadingContainer>
					<Loading size={50} animating={true} color={Colors.blue300} />
				</LoadingContainer>
			)}
			<Search></Search>
			<RestaurantList
				data={restaurants}
				renderItem={({ item }) => (
					<RestaurantInfo restaurant={item}></RestaurantInfo>
				)}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	);
};
