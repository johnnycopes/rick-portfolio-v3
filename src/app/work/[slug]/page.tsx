import { notFound } from "next/navigation"

import styles from "@/styles/templates/project.module.scss"
import Layout from "@/components/Layout"
import InternalLink from "@/components/InternalLink"
import Button from "@/components/Button"
import Video from "@/components/Video"
import FadeWrapper from "@/components/FadeWrapper"
import { sanityFetch } from "@/sanity/lib/live"
import { WORK_PROJECT_QUERY, WORK_PROJECT_SLUGS_QUERY } from "@/sanity/lib/queries"
import { client } from "@/sanity/lib/client"

export async function generateStaticParams() {
  const slugs = await client.fetch(WORK_PROJECT_SLUGS_QUERY)
  return slugs.map((item: any) => ({ slug: item.slug }))
}

const ProjectPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const { data: project } = await sanityFetch({
    query: WORK_PROJECT_QUERY,
    params: { slug },
  })

  if (!project) notFound()

  const videos: any[] = project.videos || []

  return (
    <Layout>
      <FadeWrapper>
        <div className={styles.header}>
          <InternalLink className={styles.back}
            link="/work"
            >
            <Button>back to work</Button>
          </InternalLink>
          <div className={styles.info}>
            <p className={styles.headline}>
              {project.headline}
            </p>
            <p className={styles.title}>
              {project.title}
            </p>
          </div>
        </div>
        {videos.map((video, index) => (
          <div className={styles.video}
            key={index}
            >
            <Video
              type={video.type}
              url={video.url}
            />
          </div>
        ))}
      </FadeWrapper>
    </Layout>
  )
}

export default ProjectPage
