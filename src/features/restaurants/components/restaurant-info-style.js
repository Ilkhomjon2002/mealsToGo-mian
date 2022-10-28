import styled from "styled-components";
import { Card } from "react-native-paper";
import { Text, View } from "react-native";

const RestaurantCard = styled(Card)`
	background-color: ${({ theme: { colors } }) => colors.bg.primary};
	padding: ${(props) => props.theme.space[3]};
	margin-bottom: ${(props) => props.theme.space[3]};
`;
const CardCover = styled(Card.Cover)`
	background-color: ${({ theme: { colors } }) => colors.bg.primary};
`;
const Info = styled(View)`
	padding-top: ${(props) => props.theme.space[3]};
`;
const Rating = styled(View)`
	flex-direction: row;
`;
const Section = styled(View)`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-bottom: ${(props) => props.theme.space[2]};
	padding-top: ${(props) => props.theme.space[2]};
`;
const SectionEnd = styled(View)`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-bottom: ${(props) => props.theme.space[2]};
	padding-top: ${(props) => props.theme.space[2]};
`;
const Address = styled(Text)`
	font-family: ${(props) => props.theme.fonts.body};
	font-size: ${(props) => props.theme.fontSizes.caption};
`;
const Icon = styled.Image`
	width: 15px;
	height: 15px;
`;
export {
	RestaurantCard,
	CardCover,
	Info,
	Address,
	Rating,
	Section,
	SectionEnd,
	Icon,
};
