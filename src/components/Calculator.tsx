import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCalculation } from '../store/calculatorSlice';
import { CalculatorContainer, Display, ButtonGrid, Button } from '../styles/CalculatorStyles';
import { calculateExpression } from '../utils/calculator';
import { withPerformanceTracking } from '../utils/performance';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>('0');
  const dispatch = useDispatch();

  const handleNumberClick = useCallback((number: string) => {
    setDisplay(prev => prev === '0' ? number : prev + number);
  }, []);

  const handleOperatorClick = useCallback((operator: string) => {
    setDisplay(prev => prev + operator);
  }, []);

  const calculateResult = useCallback(() => {
    try {
      const result = calculateExpression(display);
      
      dispatch(addCalculation({
        expression: display,
        result: result.toString(),
        timestamp: new Date().toISOString()
      }));

      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
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
      <Display>{display}</Display>
      <ButtonGrid>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map(
          (btn) => (
            <Button
              key={btn}
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