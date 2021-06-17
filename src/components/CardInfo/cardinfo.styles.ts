import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 10px;
  height: 151px;
  width: 256px;
  padding: 0 25px;
  justify-content: space-between;
  flex-flow: row;
  background-color: white;
  box-shadow: 0 3px 10px rgba(96, 96, 96, 0.3);
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 50%;
  padding: 0 30px;
  flex-flow: column;
  justify-content: center;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  align-content: center;
  justify-content: center;
  height: 100%;
`;

export type IconProp = { bgColor?: string };
export const IconWrapper = styled.div<IconProp>`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: relative;
  background: rgb(0 0 0 / 5%);

  & > svg {
    position: absolute;
    top: 35%;
    left: 35%;
    height: 22px;
    width: 22px;
  }

  ${({ bgColor }) => bgColor && { background: bgColor }};
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #a6acbe;
`;

export const Value = styled.span`
  font-weight: 500;
  font-size: 18px;
`;

export const ValuePercent = styled.span`
  font-weight: 500;
  font-size: 12px;
  margin-left: 8px;
  align-self: flex-end;
  color: #a6acbe;
`;

export const ValueContainer = styled.div`
  display: flex;
`;
