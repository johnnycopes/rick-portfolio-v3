import styles from "@/styles/pages/work.module.scss"
import Layout from "@/components/Layout"
import ProjectTile from "@/components/ProjectTile"
import FadeWrapper from "@/components/FadeWrapper"
import { sanityFetch } from "@/sanity/lib/live"
import { urlFor } from "@/sanity/lib/image"
import { WORK_PROJECTS_QUERY } from "@/sanity/lib/queries"

const WorkPage = async () => {
  const { data: projects } = await sanityFetch({ query: WORK_PROJECTS_QUERY })

  return (
    <Layout>
      <FadeWrapper>
        <div className={styles.work}>
          {projects.map((project: any) => (
            <ProjectTile
              key={project._id}
              link={`/work/${project.slug}`}
              title={project.title}
              headline={project.headline ?? undefined}
              image={project.thumbnail
                ? urlFor(project.thumbnail).width(800).height(300).fit("crop").url()
                : undefined
              }
              lqip={project.thumbnailLqip ?? undefined}
            />
          ))}
        </div>
      </FadeWrapper>
    </Layout>
  )
}

export default WorkPage
