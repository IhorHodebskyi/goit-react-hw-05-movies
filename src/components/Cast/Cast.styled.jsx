import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
export const Item = styled.li`
  min-width: 182px;
  font-size: 14px;
  padding: 6px;
  max-width: min-content;
  border-radius: 14px;
  list-style: none;

  :not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const Image = styled.img`
  width: 182px;
  border-radius: 8px;
`;
