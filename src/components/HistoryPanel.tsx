import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { HistoryPanelContainer, HistoryItem } from '../styles/HistoryPanelStyles';
import { withPerformanceTracking } from '../utils/performance';

const HistoryPanel: React.FC = () => {
  const history = useSelector((state: RootState) => state.calculator.history);

  return (
    <HistoryPanelContainer data-testid="history-panel">
      <h2>Calculation History</h2>
      {history.map((item, index) => (
        <HistoryItem key={index} data-testid={`history-item-${index}`}>
          {item.expression} = {item.result}
        </HistoryItem>
      ))}
    </HistoryPanelContainer>
  );
};

export default withPerformanceTracking('HistoryPanel', HistoryPanel); 