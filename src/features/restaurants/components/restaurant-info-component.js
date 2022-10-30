import React, { useEffect } from "react";
import { View, Image } from "react-native";
import {
	CardCover,
	RestaurantCard,
	Title,
	Info,
	Rating,
	Address,
	Section,
	SectionEnd,
	Icon,
} from "./restaurant-info-style";
import { SvgXml } from "react-native-svg";

import { star } from "../../../../assets/star";
import svgOpen from "../../../../assets/svgOpen";
import Spacer from "../../../components/spacer/spacer";
import { Text } from "../../../components/typohraphy/text.component";
export const RestaurantInfo = ({ restaurant = {} }) => {
	const {
		name = "Restaurant",
		icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
		photos = [
			"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
		],
		vicinity = "100 some random street",
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily = true,
		placeId = "",
	} = restaurant;
	useEffect(() => console.log(restaurant), [restaurant]);
	const ratingArray = Array.from(new Array(Math.floor(rating)));
	return (
		<View>
			<RestaurantCard elevation={5}>
				<CardCover key={name} source={{ uri: photos[0] }}></CardCover>
				<Info>
					<Text variant="label">{name}</Text>
					<Section>
						<Rating>
							{ratingArray.map((_, i) => (
								<SvgXml
									key={`star-${placeId}-${i}`}
									xml={star}
									width={20}
									height={20}
								/>
							))}
						</Rating>
						<SectionEnd>
							{isClosedTemporarily && (
								<Text variant="error"> CLOSED TEMPORARILY</Text>
							)}
							<Spacer position="left" size="large" />
							{isOpenNow && <SvgXml xml={svgOpen} width={20} height={20} />}

							<Spacer position="left" size="large" />
							<Icon style={{ width: 15, height: 15 }} source={{ uri: icon }} />
						</SectionEnd>
					</Section>
					<Address>{vicinity}</Address>
				</Info>
			</RestaurantCard>
		</View>
	);
};
