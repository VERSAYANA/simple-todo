import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
		// opacity: 0.85
  },
	cat: {
		borderBottomColor: 'rgba(0, 0, 0, 0.12)',
		borderBottomWidth: 1,
	},
	catTitle: {
		paddingLeft: 16,
		marginTop: 6,
		marginBottom: 16,
	},
	catText: {
		color: '#00BCD4',
		fontSize: 11,
	},
	row: {
		height: 45,
		paddingLeft: 16,
		paddingRight: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	picker: {
		width: 90,
	},
});

export default style;
