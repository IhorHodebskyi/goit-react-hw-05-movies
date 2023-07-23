import styled from 'styled-components';
export const StyledList = styled.ul`
  margin-top: 12px;
`;
export const Item = styled.li`
  font-size: 14px;
  padding: 6px;
  list-style: none;
  border-radius: 14px;

  :not(:last-child) {
    margin-bottom: 12px;
  }
`;
export const SubTitle = styled.p`
  margin-top: 6px;
`;
