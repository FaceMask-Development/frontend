import React from 'react';
import { PageWrapper } from '@styles/utils';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignUp(): JSX.Element {
  return (
    <PageWrapper>
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
        <input type="checkbox" name="" id="" />
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
    </PageWrapper>
  );
}
