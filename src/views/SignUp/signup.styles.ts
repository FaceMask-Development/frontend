import styled from 'styled-components';

export const Container = styled.div`
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

export const Input = styled.input`
  height: 3.5rem;
  padding: 0 1.5rem 0 1.5rem;

  border: 0.06rem solid rgb(216, 216, 216);

  display: flex;
  align-items: center;
  background: #ffffff;

  & + & {
    margin-top: 1.2rem;
  }
`;

export const Button = styled.button`
  height: 3.5rem;
  margin-top: 1.2rem;
  padding: 0 1.5rem 0 1.5rem;

  border: 0.06rem solid rgb(216, 216, 216);
  background: var(--button);
  color: #ffffff;

  text-align: center;
  font-size: 1.2rem;
`;

export const ButtonGoogle = styled(Button)`
  background: #ffffff;
  color: var(--title);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1rem;

  img {
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.6rem;
    text-rendering: optimizeLegibility;
    shape-rendering: crispEdges;
  }
`;
