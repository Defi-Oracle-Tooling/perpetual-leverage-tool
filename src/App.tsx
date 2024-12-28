import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Calculator from './components/Calculator';
import HistoryPanel from './components/HistoryPanel';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AppContainer } from './styles/AppStyles';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AppContainer>
          <Calculator />
          <HistoryPanel />
        </AppContainer>
      </Provider>
    </ErrorBoundary>
  );
};

export default App; 