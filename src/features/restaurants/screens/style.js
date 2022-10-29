import styled from "styled-components";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;
const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`;
const LoadingContainer = styled.View`
	position: absolute;
	top: 50%;
	left: 50%;
`;

export { RestaurantList, Loading, LoadingContainer };
