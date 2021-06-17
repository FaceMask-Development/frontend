import React, { useState, useEffect, useCallback } from 'react';
import { ResponsiveBar } from '@nivo/bar';

import * as S from './dashboard.styles';
import { CardInfo, Icons } from '@components/CardInfo';

const Dashboard = (): JSX.Element => {
  const [persons, setPersons] = useState<string | number>(0);
  const [satisfaction, setSatisfaction] = useState<string | number>(0);
  const [insatisfaction, setInsatisfaction] = useState<string | number>(0);
  const [data, setData] = useState<Record<string, unknown>[]>([{}]);

  useEffect(() => {
    setPersons(1);
    setSatisfaction('10.0');
    setInsatisfaction('0');
    setData(
      [
        { month: 'Jan', Quantidade: 0 },
        { month: 'Feb', Quantidade: 0 },
        { month: 'Mar', Quantidade: 0 },
        { month: 'Apr', Quantidade: 0 },
        { month: 'May', Quantidade: 0 },
        { month: 'Jun', Quantidade: 1 },
        { month: 'Jul', Quantidade: 0 },
        { month: 'Aug', Quantidade: 0 },
        { month: 'Sep', Quantidade: 0 },
        { month: 'Oct', Quantidade: 0 },
        { month: 'Nov', Quantidade: 0 },
        { month: 'Dec', Quantidade: 0 },
      ].map((data) => ({
        ...data,
        color: '#6F52ED',
      })),
    );
  }, []);

  const getBarColor = useCallback(
    (bar: { data: { color: string } }) => bar.data.color,
    [],
  );

  return (
    <>
      <S.Header>
        <S.Logo></S.Logo>
        <S.User>
          <S.UserLabel>TEKO</S.UserLabel>
          <S.UserImage />
        </S.User>
      </S.Header>
      <S.Container>
        <S.InfoWrapper>
          <CardInfo
            value={persons}
            label="Pessoas"
            color="rgba(113, 59, 219, 0.05)"
            icon={<Icons.Person />}
          />
          <CardInfo
            value={satisfaction}
            label="Satisfação"
            color="rgba(51, 214, 159, 0.07)"
            icon={<Icons.RateUp />}
          />
          <CardInfo
            value={insatisfaction}
            label="Insatisfação"
            color="rgba(255, 76, 97, 0.05)"
            icon={<Icons.RateDown />}
            enablePercent={true}
            percentValue={
              (Number(insatisfaction) / Number(persons) / 100) * 100
            }
          />
        </S.InfoWrapper>
        <S.ChartWrapper>
          <S.ChartHeader>
            <S.LabelHeader>Frequência no estabelecimento</S.LabelHeader>
            <S.LabelMarker>Quantidade</S.LabelMarker>
          </S.ChartHeader>
          <S.ChartBody>
            <ResponsiveBar
              margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
              data={data}
              indexBy="month"
              keys={['Quantidade']}
              labelTextColor="inherit:darker(1.4)"
              labelSkipWidth={16}
              labelSkipHeight={16}
              padding={0.9}
              borderRadius={5}
              valueScale={{ type: 'linear' }}
              indexScale={{ type: 'band', round: true }}
              colors={getBarColor}
              defs={[
                {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: '#38bcb2',
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: '#eed312',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              axisBottom={{
                tickSize: 0,
                tickPadding: 10,
                tickRotation: 0,
              }}
              axisLeft={{
                tickSize: 0,
                tickPadding: 5,
                tickRotation: 0,
              }}
            />
          </S.ChartBody>
        </S.ChartWrapper>
      </S.Container>
    </>
  );
};

export default Dashboard;
