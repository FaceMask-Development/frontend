import React from 'react';
import { InputWrapper } from '@styles/utils';
import { Input } from '@components/Input';
import { Checkbox } from '@components/Checkbox';
import { Button } from '@components/Button';

export function SignUp(): JSX.Element {
  return (
    <InputWrapper>
      <h1>Registre-se</h1>
      <span>
        ou
        <a href="#"> acesse sua conta</a>
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
    </InputWrapper>
  );
}
