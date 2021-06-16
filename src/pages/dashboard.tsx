import React from 'react';
import Head from 'next/head';

import { Container } from '@styles/utils';
import Dashboard from '@views/Dashboard/dashboard';

export default function DashboardPage(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Dashboard | Facemask</title>
      </Head>
      <Dashboard />
    </Container>
  );
}
