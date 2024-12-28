import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Calculator from './components/Calculator';
import HistoryPanel from './components/HistoryPanel';
import PerformanceMonitor from './components/PerformanceMonitor';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AppContainer } from './styles/AppStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppContainer>
            <Calculator />
            <HistoryPanel />
            <PerformanceMonitor />
          </AppContainer>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App; 