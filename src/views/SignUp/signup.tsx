import React, { useContext } from 'react';
import { LinkContext } from '@context/linkContext';

import { Input } from '@components/Input';
import { Checkbox } from '@components/Checkbox';
import { Button } from '@components/Button';

import * as S from '@styles/utils';

export function SignUp(): JSX.Element {
  const { handleClickLink } = useContext(LinkContext);

  return (
    <S.InputWrapper>
      <h1>Registre-se</h1>
      <span>
        ou
        <label onClick={handleClickLink}> 
          {' '}
          acesse sua conta 
        </label>
      </span>

      <Input type="text" value="" placeholder="Nome" />
      <Input type="email" value="" placeholder="E-mail" />
      <Input type="password" value="" placeholder="Senha" />
      <Input type="text" value="" placeholder="CNPJ" />

      <div>
        <Checkbox name="agree_term" id="agree_term" />
        <span>
          Concordo com os <a>Termos do Facemask</a>
        </span>
      </div>

      <Button variant="normal" label="Registre-se" />
      <Button
        variant="google"
        label="Registrar-se pelo Google"
        img={{
          alt: 'Google',
          path: 'icons/google.svg',
        }}
      />
    </S.InputWrapper>
  );
}
