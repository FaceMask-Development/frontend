import React, { useContext } from 'react';
import { PageWrapper } from '@styles/utils';
import { LinkContext } from '@context/linkContext';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignIn(): JSX.Element {
  const { handleClickLink } = useContext(LinkContext);

  return (
    <PageWrapper>
      <h1>Acesse</h1>
      <span>
        sua conta do Facemask ou
        <a href="#" onClick={handleClickLink}>
          {' '}
          crie uma nova conta
        </a>
      </span>

      <Input type="email" value="" placeholder="E-mail" />
      <Input type="password" value="" placeholder="Senha" />

      <div>
        <input type="checkbox" name="" id="" />
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
    </PageWrapper>
  );
}
