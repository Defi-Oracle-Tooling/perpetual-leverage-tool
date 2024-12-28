import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCalculation } from '../store/calculatorSlice';
import { CalculatorContainer, Display, ButtonGrid, Button } from '../styles/CalculatorStyles';
import { calculateExpression } from '../utils/calculator';
import { withPerformanceTracking } from '../utils/performance';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>('0');
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleNumberClick = useCallback((number: string) => {
    setError(null);
    // Prevent multiple decimal points
    if (number === '.' && display.includes('.')) return;
    // Prevent leading zeros
    setDisplay(prev => prev === '0' ? number : prev + number);
  }, [display]);

  const handleOperatorClick = useCallback((operator: string) => {
    setError(null);
    // Prevent consecutive operators
    const lastChar = display.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
      setDisplay(prev => prev.slice(0, -1) + operator);
    } else {
      setDisplay(prev => prev + operator);
    }
  }, [display]);

  const calculateResult = useCallback(() => {
    try {
      // Validate expression before calculation
      if (!/^[0-9+\-*/.() ]+$/.test(display)) {
        throw new Error('Invalid characters in expression');
      }

      const result = calculateExpression(display);
      
      if (!Number.isFinite(result)) {
        throw new Error('Invalid calculation result');
      }

      dispatch(addCalculation({
        expression: display,
        result: result.toString(),
        timestamp: new Date().toISOString()
      }));

      setDisplay(result.toString());
      setError(null);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Calculation error');
      setDisplay('0');
    }
  }, [display, dispatch]);

  // Add keyboard support
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key;
      
      if (/[0-9.]/.test(key)) {
        handleNumberClick(key);
      } else if (['+', '-', '*', '/'].includes(key)) {
        handleOperatorClick(key);
      } else if (key === 'Enter' || key === '=') {
        calculateResult();
      } else if (key === 'Escape') {
        setDisplay('0');
      } else if (key === 'Backspace') {
        setDisplay(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleNumberClick, handleOperatorClick, calculateResult]);

  return (
    <CalculatorContainer>
      <Display data-testid="display">{display}</Display>
      {error && <div data-testid="error" className="error">{error}</div>}
      <ButtonGrid>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map(
          (btn) => (
            <Button
              key={btn}
              data-testid={`button-${btn}`}
              onClick={() => {
                if (btn === '=') {
                  calculateResult();
                } else if (['+', '-', '*', '/'].includes(btn)) {
                  handleOperatorClick(btn);
                } else {
                  handleNumberClick(btn);
                }
              }}
            >
              {btn}
            </Button>
          )
        )}
      </ButtonGrid>
    </CalculatorContainer>
  );
};

export default withPerformanceTracking('Calculator', Calculator); 