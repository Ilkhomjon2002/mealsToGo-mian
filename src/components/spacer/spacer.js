import React, { Children } from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components";

const sizes = {
	small: 1,
	medium: 2,
	large: 3,
};
const positionVariant = {
	top: "marginTop",
	left: "marginLeft",
	right: "marginRight",
	bottom: "marginBottom",
};
const getVariant = (position, size, theme) => {
	const sizeIndex = sizes[size];
	const property = positionVariant[position];
	const value = theme.space[sizeIndex];
	return `${property}:${value}`;
};
const SpacerView = styled(View)`
	${({ variant }) => variant}
`;
export const Spacer = ({ position, size, Children }) => {
	const theme = useTheme();

	const variant = getVariant(position, size, theme);

	return <SpacerView variant={variant}>{Children}</SpacerView>;
};

Spacer.defaultProps = {
	position: "top",
	size: "small",
};
export default Spacer;
