import {
  GroupAbout,
  PresentationContainer,
  GroupCards,
  Card,
} from './presentantion.styles';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

import * as S from './presentantion.styles';

export function Presentation(): JSX.Element {
  return (
    <PresentationContainer>
      <Header />
      <S.PresentationWrapper>
        <GroupAbout>
          <h2>AI-Powered Autonomous Checkout</h2>
          <p>
            Enabling autonomous checkout for brick & mortar retailers with our
            modern AI-powered computer vision platform. Just grab and go!
          </p>
        </GroupAbout>
        <GroupCards>
          <Card>
            <img src="icons/shield.svg" alt="Privacidade" />
            <h4>01. Privacy</h4>
            <p>
              Standard doesn&apos;t use any facial recognition or other
              biometrics. All of our deployments are on-premise to ensure
              maximum performance and security for retailers and their
              customers.
            </p>
          </Card>
          <Card>
            <img src="icons/scability.svg" alt="Escabilidade" />
            <h4>02. Scalability</h4>
            <p>
              Standard’s solution is camera-first - no turnstiles or gates. That
              means simple and quick installs with no disruption to customers or
              the business.
            </p>
          </Card>
          <Card>
            <img src="icons/happy.svg" alt="Experiencia" />
            <h4>03. Experience</h4>
            <p>
              Standard believes good retail is predicated on happy customers
              having a great experience. Customers want to find the right
              products and, importantly, avoid waiting in long checkout lines.
            </p>
          </Card>
          <Card>
            <img src="icons/flexibility.svg" alt="Flexiblidade" />
            <h4>04. Flexibility</h4>
            <p>
              Standard supports retailers’ existing environments, and can
              integrate with existing technology. Our installation requires
              primarily ceiling-mounted cameras. No need to change up your store
              layout to accommodate our system - we adjust to your store.
            </p>
          </Card>
          <Card>
            <img src="icons/graph.svg" alt="Grafico" />
            <h4>05. Insights</h4>
            <p>
              Analytics is in Standard’s DNA. We work with retailers to
              understand product performance and provide real-time inventory
              updates.
            </p>
          </Card>
        </GroupCards>
      </S.PresentationWrapper>
      <Footer />
    </PresentationContainer>
  );
}
