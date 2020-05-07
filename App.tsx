import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navigation from './navigations/appNavigation';
import Loader from './components/loader'

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <Loader></Loader>
    </Provider>
  );
}