import styled from "styled-components";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";

const SearchView = styled(View)`
	padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;

export { SearchView, RestaurantList };
