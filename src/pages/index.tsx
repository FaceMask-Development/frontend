import Presentation from '../components/Presetation'
import Registration from '../components/Registration'
import { Container } from '../styles/pages/home'

export default function Home() {
  return (
    <Container>
      <section>
        <Presentation />
        <Registration />
      </section>
    </Container>
  )
}
