import React from 'react';
import Head from 'next/head';

import { Container } from '@styles/utils';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Presentation } from '@views/Presentation';
import { SignUp } from '@views/SignUp';

export default function Home(): JSX.Element {

  return (
    <Container>
      <Head>
        <title>Inicio | Facemask</title>
      </Head>

      <Header />
      <Presentation />
      <SignUp />
      <Footer />

    </Container>
  );
}
