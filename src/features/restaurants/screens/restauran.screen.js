import React from "react";
import { FlatList } from "react-native";

import { Searchbar } from "react-native-paper";
import Spacer from "../../../components/spacer/spacer";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfo } from "../components/restaurant-info-component";
import { RestaurantList, SearchView } from "./style";

export const RestaurantScreen = () => {
	return (
		<SafeArea>
			<SearchView>
				<Searchbar placeholder="Search" />
			</SearchView>
			<RestaurantList
				data={[
					{ name: 1 },
					{ name: 2 },
					{ name: 3 },
					{ name: 4 },
					{ name: 5 },
					{ name: 6 },
				]}
				renderItem={() => <RestaurantInfo></RestaurantInfo>}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	);
};
