import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantsRequest, restaurantTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
	const [restaurants, setRestaurants] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const retrieveRestaurants = () => {
		setIsLoading(true);
		setTimeout(() => {
			restaurantsRequest()
				.then(restaurantTransform)
				.then((res) => {
					setIsLoading(false);
					setRestaurants(res);
					console.log(res);
				})
				.catch((err) => {
					setIsLoading(false);
					setError(err);
				});
		});
	};
	useEffect(() => {
		retrieveRestaurants();
	}, []);

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
