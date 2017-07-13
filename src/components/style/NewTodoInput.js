import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
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
		color: '#80CBC4',
		// color: 'rgba(255, 255, 255, 0.87)',
	},
	plusIcon: {
		paddingLeft: 16,
		paddingRight: 16,
	},
})

export default style;
