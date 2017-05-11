import React from 'react';
import { createStore } from 'redux';
import reducer from './reducers';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

let store = null;
if (__DEV__) {
	const { composeWithDevTools } = require('remote-redux-devtools');
	store = createStore(reducer, composeWithDevTools(autoRehydrate()));
} else {
	store = createStore(reducer, autoRehydrate());
}
persistStore(store, { storage: AsyncStorage });

export default store;
