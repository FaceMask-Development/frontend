import React, { useContext } from 'react';
import Head from 'next/head';

import { LinkContext } from '../context/linkContext';

import { Container } from '@styles/utils';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Presentation } from '@views/Presentation';
import { SignIn } from '@views/SignIn';
import { SignUp } from '@views/SignUp';

export default function Home(): JSX.Element {
  const { hasClickedLink } = useContext(LinkContext);

  return (
    <Container>
      <Head>
        <title>Inicio | Facemask</title>
      </Head>

      <Header />
      <Presentation />
      {hasClickedLink ? <SignIn /> : <SignUp />}
      <Footer />

    </Container>
  );
}
