import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, StatusBar, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { RestaurantScreen } from "./src/features/restaurants/screens/restauran.screen";
import { theme } from "./src/infrastructure/theme";
import {
	useFonts as useOswald,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurant.context";
import { LocationContextProvider } from "./src/services/restaurants/location/location.context";
import Navigation from "./src/infrastructure/navigation";
const Tab = createBottomTabNavigator();

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});
	const [latoLoaded] = useLato({
		Lato_400Regular,
	});
	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}
	return (
		<>
			<ThemeProvider theme={theme}>
				<LocationContextProvider>
					<RestaurantsContextProvider>
						<Navigation></Navigation>
					</RestaurantsContextProvider>
				</LocationContextProvider>
				<ExpoStatusBar style="auto" />
			</ThemeProvider>
		</>
	);
}
