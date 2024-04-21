import styled from "styled-components";

export const Container = styled.section`
  font-size: 2rem;
  margin-top: 3rem;
  ${({ theme }) => theme.mediaQuery.sm`


  `};
  ${({ theme }) => theme.mediaQuery.lg`


`};
`;
export const Tbody = styled.tbody`
  width: 100%;
`;
export const Tr = styled.tr``;
export const Td = styled.td`
  padding-right: 2.5rem;
`;
