import styled from 'styled-components';

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
