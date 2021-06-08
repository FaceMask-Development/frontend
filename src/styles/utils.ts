import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  padding: 4.5rem;

  section {
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 30rem;
    gap: 3rem;
  }
`;
