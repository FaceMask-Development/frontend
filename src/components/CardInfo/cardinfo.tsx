import React from 'react';
import { CardInfoProps } from './cardinfo.type';

import * as S from './cardinfo.styles';

const CardInfo = ({
  value,
  label,
  color,
  icon,
}: CardInfoProps): JSX.Element => {
  return (
    <S.Container>
      <S.IconContainer bgColor={color}>
        <S.IconWrapper>{icon}</S.IconWrapper>
      </S.IconContainer>
      <S.ContentWrapper>
        <S.Value>{value}</S.Value>
        <S.Label>{label}</S.Label>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default CardInfo;
export { CardInfo };
