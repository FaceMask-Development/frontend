import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 5px;
  min-height: 150px;
  min-width: 200px;
  padding: 0 25px;
  justify-content: space-between;
  flex-flow: row;
  background-color: white;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

export type IconProp = { bgColor?: string };
export const IconContainer = styled.div<IconProp>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
`;
