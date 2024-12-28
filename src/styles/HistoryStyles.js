import styled from 'styled-components';

export const HistoryContainer = styled.div`
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  min-width: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

export const HistoryItem = styled.div`
  background: white;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  
  small {
    color: #666;
    display: block;
    margin-top: 0.25rem;
  }
`; 