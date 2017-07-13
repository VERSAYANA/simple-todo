import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	contentContainer: {
		// backgroundColor: '#263238'
	},
	todayContainer: {
		borderBottomColor: 'rgba(255, 255, 255, 0.12)',
		borderBottomWidth: 1,
		backgroundColor: '#263238'
	},
	focusContainer: {
		// borderBottomColor: 'rgba(255, 255, 255, 0.12)',
		// borderBottomWidth: 1,
		backgroundColor: '#263238'
	},
	subheaderContainer: {
		justifyContent: 'center',
		height: 48,
		paddingLeft: 16,
	},
	subheader: {
		color: 'rgba(255, 255, 255, 0.87)',
		fontSize: 16,
	},
	textInputContainer: {
		backgroundColor: '#263238',
		height: 50,
		flexDirection: 'row',
		// borderBottomWidth: 1,
		// borderBottomColor: 'rgba(0, 0, 0, 0.12)',
		alignItems: 'center',
	},
	textInput: {
		flex: 1,
		paddingLeft: 0,
		marginLeft: 0,
		color: 'rgba(255, 255, 255, 0.68)',
	},
	checkBox: {
		paddingLeft: 16,
		paddingRight: 16,
	},
})

export default style;
