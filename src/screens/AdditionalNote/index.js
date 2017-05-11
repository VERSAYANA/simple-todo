import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class AdditionalNote extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      note: ''
    };

		this.goBack = this.goBack.bind(this);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

	setNoteText(value) {
		this.setState({ note: value });
	}

	goBack () {
		this.props.navigator.dismissModal({
			animated: true
		});
	}


	onNavigatorEvent(event) {
		if (event.id === 'done-note') {
			this.props.additionalNote(this.state.note, this.props.id)
			this.goBack();

		}
	}





	render() {
		const { note } = this.props;

		return (
			<View style={style.noteTextInputWrapper}>

				<TextInput
					style={style.noteTextInput}
					autoFocus={true}
					placeholder="Your note ..."
					defaultValue={note ? note : ''}
					multiline={true}
					underlineColorAndroid='transparent'
					onChangeText={(text) => { this.setNoteText(text.trim()) }}
					// onSubmitEditing={(note) => {
					// 	additionalNote(note.nativeEvent.text, this.state.id);
					// 	this.popToRoot();
					// }}
				/>
			</View>
		)
	}
}

const style = StyleSheet.create({
	noteTextInputWrapper: {
		flex: 1,
	},
	noteTextInput: {
		flex: 1,
		paddingLeft: 16,
		paddingRight: 16,
		textAlignVertical: 'top',
		justifyContent: 'flex-start',
		color: 'rgba(0, 0, 0, 0.87)',
		// fontSize: 14,
	}
});

const mapStateToProps = (state, ownProps) => ({
	id: ownProps.id,
	note: ownProps.note
});

const mapDispatchToProps = {
	additionalNote: (note, id) => ({
    type: 'ADDITIONAL_NOTE',
    note,
    id
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalNote);
