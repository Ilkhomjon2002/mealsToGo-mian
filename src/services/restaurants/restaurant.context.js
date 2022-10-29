import React, {
	useState,
	createContext,
	useEffect,
	useMemo,
	useContext,
} from "react";
import { LocationContext } from "./location/location.context";

import { restaurantsRequest, restaurantTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
	const [restaurants, setRestaurants] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const { location } = useContext(LocationContext);
	const retrieveRestaurants = (location) => {
		setIsLoading(true);
		setRestaurants([]);
		setTimeout(() => {
			restaurantsRequest(location)
				.then(restaurantTransform)
				.then((res) => {
					console.log(res, "transform checking");
					setIsLoading(false);
					setRestaurants(res);
				})
				.catch((err) => {
					setIsLoading(false);
					setError(err);
				});
		});
	};
	useEffect(() => {
		if (location) {
			const locationString = `${location.lat},${location.lng}`;
			retrieveRestaurants(locationString);
		}
	}, [location]);

	return (
		<RestaurantsContext.Provider
			value={{
				restaurants,
				isLoading,
				error,
			}}
		>
			{children}
		</RestaurantsContext.Provider>
	);
};
