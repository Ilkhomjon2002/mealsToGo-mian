import React, { useContext, useEffect } from "react";
import { Pressable, TouchableOpacity } from "react-native";
import { Colors } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { RestaurantInfo } from "../components/restaurant-info-component";
import Search from "../components/search.component";
import { Loading, LoadingContainer, RestaurantList } from "./style";
export const RestaurantScreen = ({ navigation }) => {
	console.log(navigation);
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
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("RestaurantDetail", { restaurant: item })
						}
					>
						<RestaurantInfo restaurant={item}></RestaurantInfo>
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	);
};
