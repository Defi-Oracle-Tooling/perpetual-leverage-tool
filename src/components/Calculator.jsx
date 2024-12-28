import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCalculation } from '../store/calculatorSlice';
import { CalculatorContainer, Display, ButtonGrid, Button } from '../styles/CalculatorStyles';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const dispatch = useDispatch();

  const handleNumberClick = (number) => {
    setDisplay(prev => prev === '0' ? number : prev + number);
  };

  const handleOperatorClick = (operator) => {
    setDisplay(prev => prev + operator);
  };

  const calculateResult = () => {
    try {
      // Using Function constructor for calculation (with input validation)
      const sanitizedExpression = display.replace(/[^0-9+\-*/().]/g, '');
      const result = new Function(`return ${sanitizedExpression}`)();
      
      dispatch(addCalculation({
        expression: display,
        result: result.toString(),
        timestamp: new Date().toISOString()
      }));

      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

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

export default Calculator; 