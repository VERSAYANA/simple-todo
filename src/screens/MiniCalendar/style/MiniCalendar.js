import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

	week: {
		borderBottomColor: 'rgba(0, 0, 0, 0.12)',
		borderBottomWidth: 1,
		// marginLeft: 16,
		// marginRight: 16,
		// marginTop: 16,
		backgroundColor: 'white',
	},
	titleContainer: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: 16,
	},
	titleText: {
		color: 'rgba(0, 0, 0, 0.9)',
	},
	titleColoredText: {
		color: '#00BCD4',
	},
	plus: {
		height: 50,
		paddingLeft: 16,
		paddingRight: 16,
		justifyContent: 'center',
	},
	textInputContainer: {
		backgroundColor: 'white',
		height: 50,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0, 0, 0, 0.12)',
		alignItems: 'center',
	},
	textInput: {
		flex: 1,
		paddingLeft: 0,
		marginLeft: 0,
		color: 'rgba(0, 0, 0, 0.68)',
	},
	checkBox: {
		paddingLeft: 16,
		paddingRight: 16,
	},
})

export default style;
