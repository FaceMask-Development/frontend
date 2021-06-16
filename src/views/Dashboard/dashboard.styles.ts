import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f8fafd;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  min-height: 100%;
  padding: 65px 101px;
`;

export const Header = styled.div`
  height: 96px;
  width: 100%;
  background-color: white;
  padding: 0 101px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
