import styles from "@/styles/templates/about.module.scss"
import Layout from "@/components/Layout"
import FadeWrapper from "@/components/FadeWrapper"
import Button from "@/components/Button"
import ExternalLink from "@/components/ExternalLink"
import InternalLink from "@/components/InternalLink"
import { sanityFetch } from "@/sanity/lib/live"
import { urlFor } from "@/sanity/lib/image"
import { ABOUT_QUERY } from "@/sanity/lib/queries"

const AboutPage = async () => {
  const { data: about } = await sanityFetch({ query: ABOUT_QUERY })

  return (
    <Layout
      verticallyCentered={true}
      horizontallyCentered={true}
      >
      <FadeWrapper>
        <div className={styles.about}>
          {about?.profileImage && (
            <img
              className={styles.pic}
              src={urlFor(about.profileImage).width(400).url()}
              alt={(about.profileImage as any).alt || "Rick Segal"}
            />
          )}
          <div className={styles.bio}>
            <h2 className={styles.greeting}>
              {about?.heading}
            </h2>
            <div className={styles.buttons}>
              <InternalLink link="/resume">
                <Button>résumé</Button>
              </InternalLink>
              <ExternalLink link={about?.socialLinks?.linkedin || "https://www.linkedin.com/in/rsegal"}>
                <Button>linkedin</Button>
              </ExternalLink>
              <ExternalLink link={about?.socialLinks?.instagram || "https://www.instagram.com/riiyaack"}>
                <Button>instagram</Button>
              </ExternalLink>
              {about?.funButton && (
                <ExternalLink link={about.funButton.url}>
                  <Button>{about.funButton.text}</Button>
                </ExternalLink>
              )}
            </div>
            <ExternalLink link={`mailto:${about?.email}`}>
              <h4>{about?.email}</h4>
            </ExternalLink>
          </div>
        </div>
      </FadeWrapper>
    </Layout>
  )
}

export default AboutPage
