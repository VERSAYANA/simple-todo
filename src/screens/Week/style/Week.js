import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	dayContainer: {
		borderBottomColor: 'rgba(255, 255, 255, 0.12)',
		borderBottomWidth: 1,
		backgroundColor: '#263238'
	},
	lastContainer: {
		backgroundColor: '#263238'
	},
	subheaderContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 48,
		paddingLeft: 16,
		paddingRight: 16,
	},
	subheader: {
		color: 'rgba(255, 255, 255, 0.80)',
		fontSize: 16,
		fontWeight: "bold",
	},
	todaySubheader: {
		color: 'rgba(255, 255, 255, 1)',
		fontSize: 16,
		fontWeight: "bold",
	},
	textInputContainer: {
		backgroundColor: '#263238',
		height: 50,
		flexDirection: 'row',

		alignItems: 'center',
	},
	textInput: {
		flex: 1,
		paddingLeft: 0,
		marginLeft: 0,
		color: '#26c9b3',
	},
	plusIcon: {
		paddingLeft: 16,
		paddingRight: 16,
	},

})

export default style;
