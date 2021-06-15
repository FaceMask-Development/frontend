import styled, { css } from 'styled-components';

import { ButtonProps } from './button.type';

export const Button = styled.button<ButtonProps>`
  ${({ variant }) => styles[variant]}
`;

export const Label = styled.span``;

export const Img = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.6rem;
  text-rendering: optimizeLegibility;
  shape-rendering: crispEdges;
`;

const styles = {
  normal: css`
    height: 3.5rem;
    margin-top: 1.2rem;
    padding: 0 1.5rem 0 1.5rem;

    border: 0.06rem solid rgb(216, 216, 216);
    background: var(--button);
    color: #ffffff;

    text-align: center;
    font-size: 1.2rem;
  `,
  google: css`
    height: 3.5rem;
    margin-top: 1.2rem;
    padding: 0 1.5rem 0 1.5rem;

    border: 0.06rem solid rgb(216, 216, 216);

    background: #ffffff;
    color: var(--title);

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1rem;
  `,
};
