import React, { useState, useCallback, ChangeEvent } from 'react';

import * as S from './input.styles';
import { InputProps } from './input.type';

export const Input = ({
  placeholder,
  value,
  type,
  getValue,
}: InputProps): JSX.Element => {
  const [currentValue, setValue] = useState<string>(value);

  const change = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (getValue) getValue(e.target.value);
    },
    [getValue],
  );

  return (
    <S.Input
      placeholder={placeholder}
      value={currentValue}
      type={type}
      onChange={change}
    />
  );
};
