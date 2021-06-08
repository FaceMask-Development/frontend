import React, { useContext } from 'react';
import Head from 'next/head';

import { Presentation } from '@views/Presentation/Presentation';
import { SignUp } from '@views/SignUp/SignUp';
import { SignIn } from '@views/SignIn';
import { LinkContext, LinkProvider } from '@context/LinkContext';

import { Container } from '@styles/utils';

export default function Home(): JSX.Element {
  const { hasClickedLink } = useContext(LinkContext);

  return (
    <Container>
      <Head>
        <title>Inicio | Facemask</title>
      </Head>
      <section>
        <Presentation />
        <LinkProvider>{hasClickedLink ? <SignUp /> : <SignIn />}</LinkProvider>
      </section>
    </Container>
  );
}
