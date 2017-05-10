import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	listRow: {
		backgroundColor: 'white',
		height: 50,
		paddingLeft: 16,
		paddingRight: 16,
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0, 0, 0, 0.12)',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	left: {
		flex: 1,
	},
	listTitle: {
		color: 'rgba(0, 0, 0, 0.87)'
	},
	counterText: {
		color: 'rgba(0, 0, 0, 0.54)'
	}
})

export default style;
