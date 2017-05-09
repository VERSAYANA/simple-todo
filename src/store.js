import React from 'react';
import { createStore } from 'redux';
import reducer from './reducers';
import { composeWithDevTools } from 'remote-redux-devtools';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

const store = createStore(reducer, composeWithDevTools(autoRehydrate()));
persistStore(store, { storage: AsyncStorage });

export default store;
