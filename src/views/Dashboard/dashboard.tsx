import React, { useState, useEffect } from 'react';

import * as S from './dashboard.styles';
import { CardInfo } from '@components/CardInfo';

const Dashboard = (): JSX.Element => {
  const [quantity, setQuantity] = useState<string | number>(0);

  useEffect(() => {
    setQuantity(100);
  }, []);

  return (
    <>
      <S.Header></S.Header>
      <S.Container>
        <S.InfoWrapper>
          <CardInfo value={quantity} label="Quantity" />
          <CardInfo value={quantity} label="Quantity" />
          <CardInfo value={quantity} label="Quantity" />
        </S.InfoWrapper>
      </S.Container>
    </>
  );
};

export default Dashboard;
