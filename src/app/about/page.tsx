import Image from "next/image"

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
  console.log(about);

  return (
    <Layout
      verticallyCentered={true}
      horizontallyCentered={true}
      >
      <FadeWrapper>
        <div className={styles.about}>
          {about?.profileImage && (
            <Image
              className={styles.pic}
              src={urlFor(about.profileImage).width(800).url()}
              alt={(about.profileImage as { alt?: string }).alt || "Rick Segal"}
              loading="eager"
              width={about.profileImageWidth ?? 800}
              height={about.profileImageHeight ?? 800}
              sizes="(min-width: 900px) 400px, 70vw"
              style={{ width: "100%", height: "auto" }}
              placeholder={about.profileImageLqip ? "blur" : "empty"}
              blurDataURL={about.profileImageLqip ?? undefined}
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
