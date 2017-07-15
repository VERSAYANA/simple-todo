import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	newlistInput: {
		flexDirection: 'row',
		backgroundColor: '#263238',
		alignItems: 'center',
	},
	textInput: {
		flex: 1,
		height: 55,
		backgroundColor: '#263238',
    paddingLeft: 16,
    paddingRight: 16,
		// borderBottomWidth: 1,
		// borderBottomColor: 'rgba(0, 0, 0, 0.12)',
		color: '#26c9b3',
	},
	plusIcon: {
		paddingRight: 16,
		height: 45,
		justifyContent: 'center',
	}

})

export default style;
