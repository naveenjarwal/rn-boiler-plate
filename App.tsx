// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/app/store';
import MainNavigator from '../src/navigation/navigation'; // Assuming a navigator

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
