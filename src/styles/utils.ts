import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  margin-left: 3rem;
  
  display: grid;
  grid-template-columns: 1fr 30rem;
  grid-template-rows: 4rem 1fr 4rem;
  grid-template-areas: 
    'header input'
    'presentation input'
    'footer input';

  gap: 2rem;
`;

export const InputWrapper = styled.div`
  grid-area: input;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: var(--background);
  padding: 2.5rem;

  h1 {
    font-size: 1.6rem;
  }

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
`;
