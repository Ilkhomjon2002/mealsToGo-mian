import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/restaurants/location/location.context";
import { SearchView } from "./search.component.style";

const Search = () => {
	const { keyword, search } = useContext(LocationContext);
	const [searchKeyword, setSearchKeyword] = useState(keyword);
	useEffect(() => {
		search(searchKeyword);
	}, []);
	return (
		<SearchView>
			<Searchbar
				placeholder="Search for a location"
				value={searchKeyword}
				onSubmitEditing={() => {
					search(searchKeyword);
				}}
				onChangeText={(text) => {
					setSearchKeyword(text);
				}}
			/>
		</SearchView>
	);
};

export default Search;
