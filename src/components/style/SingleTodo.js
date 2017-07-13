import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	todoWrapper: {
		// borderBottomColor: 'rgba(0, 0, 0, 0.12)',
		// borderBottomWidth: 1,
		backgroundColor: '#263238',
		justifyContent: 'space-around'
	},
	todoRow: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 50,
	},
	left: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	checkBox: {
		height: 40,
		paddingLeft: 16,
		paddingRight: 16,
		justifyContent: 'center',
	},
	textContainer: {
		justifyContent: 'center',
		flex: 1,
		// height: 50,
	},
	text: {
		color: 'rgba(255, 255, 255, 0.80)'
	},
	completedText: {
		color: 'rgba(0, 0, 0, 0.54)',
		textDecorationLine: 'line-through',
	},
	textInput: {
		flex: 1,
		paddingLeft: 0,
		marginLeft: 0,
		color: 'rgba(255, 255, 255, 0.80)'
	},
	// iconsContainer: {
	// 	flexDirection: 'row',
	// },
	// icon: {
	// 	paddingLeft: 6,
	// 	paddingTop: 4,
	// },
	iconStar: {
		height: 50,
		justifyContent: 'center',
		paddingRight: 16,
		paddingLeft: 16,
	}
})

export default style;
