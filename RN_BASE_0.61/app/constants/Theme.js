import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";
const dimension = ({ width, height } = Dimensions.get("window"));

const colors = {

	primary: "#f3f3f3",
	primaryDark: "#125183",
	primaryDark1: "#2E384D",
	bottombarBg: '#fafafa',
	headerColor: '#1b75bc',
	headerTitle: '#FFFF',
	active: '#1b75bc',
	defaultBg: '#f3f4f6',
	inactive: 'gray',
	indicator: "#24277e",
	borderTopColor: "#dedede",
};


const sizes = {
	font: 15,
	h1: 48,
	h2: 34,
	h3: 28,
	h4: 15,
	paragraph: 15,
	caption: 13,
	captionMedium: 12,

	// global sizes
	base: 16,
	font: 14,
	border: 15,
	padding: 25,
};

const fonts = {
	italic16: {
		fontSize: 16,
		fontFamily: "Roboto-Italic",
	},
	italic18: {
		fontSize: 18,
		fontFamily: "Roboto-Italic",
	},
	bold12: {
		fontFamily: "Roboto-Bold",
		fontSize: 12,
		lineHeight: 14,
	},
	bold17: {
		fontFamily: "Roboto-Bold",
		fontSize: 17,
		lineHeight: 45,
	},
};

const styles = StyleSheet.create({
	androidSafeView: {
		flex: 1,
		// paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},

	test: {
		flex: 1,
		backgroundColor: colors.primary,
		justifyContent: "center",
		alignItems: "center",
	},

	containter: {
		flex: 1,
		backgroundColor: colors.backgroundColor,
	},

	menu: {
		flex: 1,
		height: width * 0.25,
	},

	scrollHoz: {
		width: width * 0.9,
		height: height * 0.3,
		backgroundColor: colors.white,
		borderRadius: 15,
	},

});

export { colors, sizes, fonts, styles, dimension };
const theme = { colors, sizes, fonts, styles, dimension };
export default theme