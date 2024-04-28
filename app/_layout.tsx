import "@/styles/global.css"
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native"
import { Stack } from "expo-router"
import { useColorScheme } from "nativewind"

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from "expo-router"

// Ensure that reloading on `/edit` keeps a back button present.
export const unstable_settings = {
	initialRouteName: "index",
}

export default function RootLayout() {
	// Load Assets here

	return <RootLayoutNavigation />
}

function RootLayoutNavigation() {
	const { colorScheme } = useColorScheme()

	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						title: "Split",
						headerLargeTitle: true,
					}}
				/>
			</Stack>
		</ThemeProvider>
	)
}
