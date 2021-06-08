import { GroupAbout, PresentationContainer, GroupCards, Card, GroupOurDifference } from '../styles/components/presentantion'

export default function Presentation() {
    return (
        <PresentationContainer>
            <header>
                <h1>FACEMASK</h1>
            </header>
            <main>
                <GroupAbout>
                    <h2>AI-Powered Autonomous Checkout</h2>
                    <p>
                        Enabling autonomous checkout for brick & mortar
                        retailers with our modern AI-powered computer vision platform. Just grab and go!
                    </p>
                </GroupAbout>
                <GroupOurDifference>
                    <h2>What Makes Us Different</h2>
                    <span>We’re putting the customer and retail relationship first</span>
                    <p>
                        Standard’s technology is a giant leap forward for retailers who want 
                        autonomous checkout, but don’t want to build new stores to get it.
                        Our five driving principles are:
                    </p>
                </GroupOurDifference>
                <GroupCards>
                    <Card>
                        <img src="icons/shield.svg" alt="" />
                        <h4>01. Privacy</h4>
                        <p>
                            Standard doesn't use any facial recognition or other biometrics.
                            All of our deployments are on-premise to ensure maximum performance and
                            security for retailers and their customers.
                        </p>
                    </Card>
                    <Card>
                        <img src="icons/scability.svg" alt="" />
                        <h4>02. Scalability</h4>
                        <p>
                            Standard’s solution is camera-first - no turnstiles or gates. 
                            That means simple and quick installs with no disruption to customers or the business.
                        </p>
                    </Card>
                    <Card>
                        <img src="icons/happy.svg" alt="" />
                        <h4>03. Experience</h4>
                        <p>
                            Standard believes good retail is predicated on happy customers having a great experience. 
                            Customers want to find the right products and, importantly, avoid waiting in long checkout lines.
                        </p>
                    </Card>
                    <Card>
                        <img src="icons/flexibility.svg" alt="" />
                        <h4>04. Flexibility</h4>
                        <p>
                            Standard supports retailers’ existing environments, and can integrate with existing technology. 
                            Our installation requires primarily ceiling-mounted cameras. 
                            No need to change up your store layout to accommodate our system - we adjust to your store.
                        </p>
                    </Card>
                    <Card>
                        <img src="icons/graph.svg" alt="" />
                        <h4>05. Insights</h4>
                        <p>
                            Analytics is in Standard’s DNA. We work with retailers to understand product 
                            performance and provide real-time inventory updates.
                        </p>
                    </Card>
                </GroupCards>
            </main>
            <footer>© 2021 Facemask</footer>
        </PresentationContainer>
    )
}
