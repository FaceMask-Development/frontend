import { useContext } from 'react'
import Head from 'next/head'

import { Presentation } from '../components/Presetation'
import { SingUp } from '../components/SingUp'
import { SingIn } from '../components/SingIn'
import { LinkContext, LinkProvider } from '../context/LinkContext'

import { Container } from '../styles/pages/utils'

export default function Home() {
  const { hasClickedLink } = useContext(LinkContext)
  console.log(hasClickedLink)

  return (
    <Container>
      <Head>
        <title>Inicio | Facemask</title>
      </Head>
      <section>
        <Presentation />
        <LinkProvider>
          {hasClickedLink ? (
            <SingUp />
          ) : (
            <SingIn />
          )}
        </LinkProvider>
      </section>
    </Container>
  )
}
