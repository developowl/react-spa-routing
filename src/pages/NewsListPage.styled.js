import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const HeaderTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.textColor};
  grid-column: 1 / -1;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  grid-column: 1 / -1;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 1.1em;
  color: #555;
  grid-column: 1 / -1;
`;

export const NoResultsMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #777;
  grid-column: 1 / -1;
`;
