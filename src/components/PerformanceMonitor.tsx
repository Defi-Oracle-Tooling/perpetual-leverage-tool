import React, { useState, useEffect } from 'react';
import { getPerformanceMetrics } from '../utils/performance';
import styled from 'styled-components';

const MonitorContainer = styled.div`
  padding: 1rem;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 4px;
  margin: 1rem;
`;

const MetricsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
  }
`;

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState(getPerformanceMetrics());

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(getPerformanceMetrics());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MonitorContainer>
      <h2>Performance Metrics</h2>
      <MetricsTable>
        <thead>
          <tr>
            <th>Component</th>
            <th>Render Time (ms)</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((metric, index) => (
            <tr key={index}>
              <td>{metric.componentName}</td>
              <td>{metric.renderTime.toFixed(2)}</td>
              <td>{new Date(metric.timestamp).toLocaleTimeString()}</td>
            </tr>
          ))}
        </tbody>
      </MetricsTable>
    </MonitorContainer>
  );
};

export default PerformanceMonitor; 