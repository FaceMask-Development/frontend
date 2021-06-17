import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: #f8fafd;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  min-height: 100%;
  padding: 65px 101px;

  @media only screen and (max-width: 1050px) {
    flex-direction: column-reverse;
  }
`;

export const Header = styled.div`
  height: 65px;
  width: 100%;
  background-color: white;
  padding: 0 101px;
  display: flex;
  justify-content: space-between;
  padding: 17px 104px;
`;

export const Logo = styled.div`
  width: 100px;
`;

export const User = styled.div`
  display: flex;
  width: 87px;
  border-right: 1px solid #eef0f7;
  align-content: center;
  align-items: center;
  justify-content: space-around;
`;

export const UserLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

export const UserImage = styled.div`
  height: 27px;
  width: 27px;
  border-radius: 50%;
  border: 1px solid #eef0f7;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > div:not(:last-child) {
    margin-right: 33px;
  }

  @media only screen and (max-width: 1050px) {
    flex-direction: column;

    & > div:not(:last-child) {
      margin-bottom: 33px;
      margin-right: 0px;
    }
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 375px;
  background-color: white;
  border-radius: 10px;
  margin-top: 67px;
  box-shadow: 0 3px 10px rgba(96, 96, 96, 0.3);

  @media only screen and (max-width: 1050px) {
    margin-top: 0px;
    margin-bottom: 67px;
  }
`;

export const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 30px;
  border-bottom: 1px solid #eef0f7;
  height: 74px;
`;

const HeaderTitles = css`
  font-weight: 500;
  font-size: 14px;
  align-self: center;
`;

export const LabelHeader = styled.label`
  ${HeaderTitles};
`;

export const LabelMarker = styled.label`
  ${HeaderTitles};
  color: #a6acbe;
  position: relative;

  & ::before {
    content: '';
    background: #6f52ed;
    border-radius: 50%;
    height: 8px;
    width: 8px;
    position: absolute;
    right: calc(100% + 12px);
    top: 25%;
  }
`;

export const ChartBody = styled.div`
  height: 301px;
`;
