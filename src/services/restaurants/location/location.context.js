import React, { createContext, useState, useEffect } from "react";

import { locationRequest, locationTransfrom } from "./location.service";
export const LocationContext = createContext();
export const LocationContextProvider = ({ children }) => {
	const [location, setLocation] = useState(null);
	const [keyword, setKeyword] = useState("san francisco");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const onSearch = (searchKeyword = "san francisco") => {
		setIsLoading(true);
		setKeyword(searchKeyword);
		if (!searchKeyword.length) return; // don`t do anything
		locationRequest(searchKeyword.toLowerCase())
			.then(locationTransfrom)
			.then((result) => {
				setIsLoading(false);
				setLocation(result);
				console.log(result);
			})
			.catch((error) => {
				setIsLoading(false);
				setError(error);
			});
	};
	useEffect(() => {
		onSearch();
	}, []);
	return (
		<LocationContext.Provider
			value={{ isLoading, error, location, search: onSearch, keyword }}
		>
			{children}
		</LocationContext.Provider>
	);
};
