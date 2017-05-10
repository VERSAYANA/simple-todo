import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	todoRow: {
		backgroundColor: 'white',
		height: 50,
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0, 0, 0, 0.12)',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	left: {
		flex: 1,
		flexDirection: 'row',
	},
	checkBox: {
		height: 50,
		paddingLeft: 16,
		paddingRight: 16,
		justifyContent: 'center',
	},
	titleContainer: {
		justifyContent: 'center',
		flex: 1,
	},
	text: {
		color: 'rgba(0, 0, 0, 0.54)'
	},
})

export default style;
