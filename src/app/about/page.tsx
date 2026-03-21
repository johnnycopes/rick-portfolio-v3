import styles from "@/styles/templates/about.module.scss"
import Layout from "@/components/Layout"
import FadeWrapper from "@/components/FadeWrapper"
import Button from "@/components/Button"
import ExternalLink from "@/components/ExternalLink"
import InternalLink from "@/components/InternalLink"

const AboutPage = () => (
  <Layout
    verticallyCentered={true}
    horizontallyCentered={true}
    >
    <FadeWrapper>
      <div className={styles.about}>
        <div className={styles.bio}>
          <h2 className={styles.greeting}>
            Hey, it&apos;s me — Rick.
          </h2>
          <div className={styles.buttons}>
            <InternalLink link="/resume">
              <Button>résumé</Button>
            </InternalLink>
            <ExternalLink link="https://www.linkedin.com/in/rsegal">
              <Button>linkedin</Button>
            </ExternalLink>
            <ExternalLink link="https://www.instagram.com/riiyaack">
              <Button>instagram</Button>
            </ExternalLink>
            <ExternalLink link="https://en.wikipedia.org/wiki/Special:Random">
              <Button>Random Wiki</Button>
            </ExternalLink>
          </div>
          <ExternalLink link="mailto:risegal4@gmail.com">
            <h4>risegal4@gmail.com</h4>
          </ExternalLink>
        </div>
      </div>
    </FadeWrapper>
  </Layout>
)

export default AboutPage
