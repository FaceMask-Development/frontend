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
      <S.IconContainer bgColor={color}>{icon}</S.IconContainer>
      <S.ContentWrapper>
        <span>{value}</span>
        <span>{label}</span>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default CardInfo;
