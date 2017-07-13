import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	contentContainer: {
		backgroundColor: 'white'
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
