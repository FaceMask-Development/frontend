import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 10px;
  height: 151px;
  width: 256px;
  padding: 0 25px;
  justify-content: space-between;
  flex-flow: row;
  background-color: grey;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 50%;
  padding: 0 30px;
  flex-flow: column;
  justify-content: center;
`;

export type IconProp = { bgColor?: string };
export const IconContainer = styled.div<IconProp>`
  display: flex;
  align-items: center;
  width: 50%;
  align-content: center;
  justify-content: center;
  height: 100%;
`;

export const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: black;
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const Value = styled.span`
  font-weight: 500;
  font-size: 28px;
`;
