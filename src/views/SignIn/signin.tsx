import React, { useContext } from 'react';
import { LinkContext } from '@context/linkContext';

import { Input } from '@components/Input';
import { Checkbox } from '@components/Checkbox';
import { Button } from '@components/Button';

import * as S from '@styles/utils';

export function SignIn(): JSX.Element {
  const { handleClickLink } = useContext(LinkContext);

  return (
    <S.InputWrapper>
      <h1>Acesse</h1>
      <span>
        sua conta do Facemask ou
        <label onClick={handleClickLink}>
          {' '}
          crie uma nova conta
        </label>
      </span>

      <Input type="email" value="" placeholder="E-mail" />
      <Input type="password" value="" placeholder="Senha" />

      <div>
        <Checkbox name="remeber_mydatas" id="remeber_mydatas" />
        <span>Lembrar meus dados</span>
      </div>

      <Button variant="normal" label="Acessar" />
      <Button
        variant="google"
        label="Fazer login com o Google"
        img={{
          path: 'icons/google.svg',
          alt: 'Google',
        }}
      />
    </S.InputWrapper>
  );
}
