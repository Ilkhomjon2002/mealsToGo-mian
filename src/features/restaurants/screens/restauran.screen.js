import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import Spacer from "../../../components/spacer/spacer";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { RestaurantInfo } from "../components/restaurant-info-component";
import { RestaurantList, SearchView } from "./style";
export const RestaurantScreen = () => {
	const restaurantContext = useContext(RestaurantsContext);
	return (
		<SafeArea>
			<SearchView>
				<Searchbar placeholder="Search" />
			</SearchView>
			<RestaurantList
				data={restaurantContext.restaurants}
				renderItem={() => <RestaurantInfo></RestaurantInfo>}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	);
};
