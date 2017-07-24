import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	section: {
		borderBottomColor: 'rgba(255, 255, 255, 0.12)',
		borderBottomWidth: 1,
		backgroundColor: '#263238'
	},
	lastSection: {
		backgroundColor: '#263238'
	},
	titileContainer: {
		justifyContent: 'center',
		height: 48,
		paddingLeft: 16
	},
	title: {
		color: 'rgba(255, 255, 255, 1)',
		fontSize: 16,
		fontWeight: 'bold'
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 50,
		paddingLeft: 16,
		// paddingRight: 16
	},
	itemText: {
		color: 'rgba(255, 255, 255, 0.87)'
	},
	icon: { paddingRight: 16 },
	switch: {
		marginRight: 6,
	}
});

export default style;
