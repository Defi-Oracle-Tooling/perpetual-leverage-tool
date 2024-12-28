import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Calculator from './components/Calculator';
import HistoryPanel from './components/HistoryPanel';
import { AppContainer } from './styles/AppStyles';

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <Calculator />
        <HistoryPanel />
      </AppContainer>
    </Provider>
  );
}

export default App; 