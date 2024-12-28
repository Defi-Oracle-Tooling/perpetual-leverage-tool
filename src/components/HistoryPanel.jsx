import React from 'react';
import { useSelector } from 'react-redux';
import { HistoryContainer, HistoryItem } from '../styles/HistoryStyles';

const HistoryPanel = () => {
  const history = useSelector(state => state.calculator.history);

  return (
    <HistoryContainer>
      <h2>Calculation History</h2>
      {history.map((item, index) => (
        <HistoryItem key={index}>
          <div>{item.expression} = {item.result}</div>
          <small>{new Date(item.timestamp).toLocaleString()}</small>
        </HistoryItem>
      ))}
    </HistoryContainer>
  );
};

export default HistoryPanel; 