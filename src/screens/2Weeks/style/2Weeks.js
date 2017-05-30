import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	paiger: {
		height: 45,
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	paigerText: {
		fontSize: 15,
	},
	week: {
		borderBottomColor: 'rgba(0, 0, 0, 0.6)',
		borderBottomWidth: 1,
		backgroundColor: 'white',
	},
	titleContainer: {
		height: 40,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: 16,
		paddingRight: 16,
	},
	titleText: {
		color: 'rgba(0, 0, 0, 0.9)',
	}
})

export default style;
