import React from 'react';
import { CardInfoProps } from './cardinfo.type';

import * as S from './cardinfo.styles';

const CardInfo = ({
  value,
  label,
  color,
  icon,
  enablePercent,
  percentValue,
}: CardInfoProps): JSX.Element => {
  return (
    <S.Container>
      <S.IconContainer>
        <S.IconWrapper bgColor={color}>{icon}</S.IconWrapper>
      </S.IconContainer>
      <S.ContentContainer>
        <S.ValueContainer>
          <S.Value>{value}</S.Value>
          {enablePercent && <S.ValuePercent>({percentValue}%)</S.ValuePercent>}
        </S.ValueContainer>
        <S.Label>{label}</S.Label>
      </S.ContentContainer>
    </S.Container>
  );
};

export default CardInfo;
export { CardInfo };
