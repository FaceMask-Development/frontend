import styled from 'styled-components';

export const Container = styled.div`
  section {
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 30rem;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: var(--background);
  padding: 2.5rem;

  & > span {
    margin-bottom: 1.3rem;
  }

  a {
    color: var(--link);
  }

  & > div {
    margin-top: 1.2rem;

    display: flex;
    align-items: center;
  }

  & > div input[type='checkbox'] {
    margin-right: 0.6rem;
    width: 1.2rem;
    height: 1.2rem;
  }
`;
