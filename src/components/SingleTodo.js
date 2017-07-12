import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Buttons from './Buttons';
import style from './style/SingleTodo';

export default class SingleTodo extends React.Component {
  render() {
    const {
      todo,
      complete,
      deleteTodo,
      editMode,
      textMode,
      textTodo,
			viewAdditionalNote,
			dateTodo,
			showListSelector,
      showDateIcon
    } = this.props;

    let checkBox = null;
    if (!todo.completed) {
      checkBox = (
        <Icon
          name="checkbox-blank-outline"
          size={23}
          color="rgba(0, 0, 0, 0.80)"
        />
      );
    } else {
      checkBox = <Icon name="checkbox-marked" size={23} color="#FF4081" />;
    }

    let todoTitle = null;
    if (!todo.editText) {
      if (!todo.completed) {
        todoTitle = <Text style={style.text}>{todo.text}</Text>;
      } else {
        todoTitle = <Text style={style.completedText}>{todo.text}</Text>;
      }
    } else {
      todoTitle = (
        <TextInput
          style={style.textInput}
          defaultValue={todo.text}
          autoFocus={true}
          onBlur={() => {
            textMode(todo.id);
            editMode(todo.id);
          }}
          returnKeyType={'done'}
          onSubmitEditing={v => {
            textTodo(v.nativeEvent.text, todo.id);
            textMode(todo.id);
            editMode(todo.id);
          }}
        />
      );
    }

    return (
      <TouchableNativeFeedback
        onPress={() => {
          editMode(todo.id);
        }}
      >

        <View style={style.todoWrapper}>
          <View style={style.todoRow}>

            <View style={style.left}>
              <TouchableWithoutFeedback
                onPress={() => {
                  complete(todo.id);
                }}
              >
                <View style={style.checkBox}>
                  {checkBox}
                </View>
              </TouchableWithoutFeedback>

              <View style={style.textContainer}>
                {todoTitle}
              </View>

            </View>

            <View style={style.iconsContainer}>
              {todo.note
                ? <Icon
										style={style.icon}
                    name="note-outline"
                    size={18}
                    color="rgba(0, 0, 0, 0.54)"
                  />
                : null}
              {showDateIcon && todo.date
                ? <Icon
									style={style.icon}
                    name="calendar-blank"
                    size={18}
                    color="rgba(0, 0, 0, 0.54)"
                  />
                : null}
            </View>

          </View>
          {todo.editMode
            ? <Buttons
                deleteTodo={deleteTodo}
                textMode={textMode}
                id={todo.id}
								note={todo.note}
								date={todo.date}
								list={todo.list}
								viewAdditionalNote={viewAdditionalNote}
								dateTodo={dateTodo}
								showListSelector={showListSelector}
              />
            : null}

        </View>
      </TouchableNativeFeedback>
    );
  }
}
