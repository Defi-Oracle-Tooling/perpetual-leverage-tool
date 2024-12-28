import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Calculator from '../Calculator';
import { calculatorReducer } from '../../store/calculatorSlice';

const renderWithRedux = (
  component: React.ReactElement,
  { initialState = {}, store = configureStore({
    reducer: { calculator: calculatorReducer },
    preloadedState: initialState
  }) } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        {component}
      </Provider>
    ),
    store,
  };
};

describe('Calculator', () => {
  it('renders calculator display with initial value', () => {
    renderWithRedux(<Calculator />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('handles number input correctly', () => {
    renderWithRedux(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));
    expect(screen.getByText('123')).toBeInTheDocument();
  });

  it('performs basic calculations correctly', () => {
    renderWithRedux(<Calculator />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('handles invalid input gracefully', () => {
    renderWithRedux(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('0')).toBeInTheDocument();
  });
}); 