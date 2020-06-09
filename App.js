import 'react-native-gesture-handler';

import React from 'react';
import MyDrawer from './MyDrawer';
import {Provider} from 'react-redux';
import generateStore from './redux/store';

export default function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <MyDrawer />
    </Provider>
  );
}
