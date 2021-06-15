import React from 'react';

import * as S from './footer.styles';

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();
  
  return (
    <S.Footer>
      <span>Copyright © { currentYear } Facemask</span>
    </S.Footer>
  );
};
