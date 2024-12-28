import styled from 'styled-components';

export const CalculatorContainer = styled.div`
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Display = styled.div`
  background: white;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  text-align: right;
  font-size: 1.5rem;
  min-height: 2.5rem;
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
`;

export const Button = styled.button`
  padding: 1rem;
  font-size: 1.25rem;
  border: none;
  border-radius: 4px;
  background: #e0e0e0;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #d0d0d0;
  }
`; 