import React from 'react';

import * as S from './button.styles';
import { ButtonProps } from './button.type';

export const Button = ({ variant, label, img }: ButtonProps): JSX.Element => {
  return (
    <S.Button variant={variant}>
      {img && <S.Img alt={img.alt} src={img.path} />}
      <S.Label>{label}</S.Label>
    </S.Button>
  );
};
