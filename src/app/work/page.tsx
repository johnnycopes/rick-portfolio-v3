import styles from "@/styles/pages/work.module.scss"
import Layout from "@/components/Layout"
import ProjectTile from "@/components/ProjectTile"
import FadeWrapper from "@/components/FadeWrapper"

interface Project {
  slug: string
  title: string
  headline: string
  thumbnail?: string
}

const projects: Project[] = []

const WorkPage = () => (
  <Layout>
    <FadeWrapper>
      <div className={styles.work}>
        {projects.map((project, index) => (
          <ProjectTile
            key={index}
            link={`/work/${project.slug}`}
            title={project.title}
            headline={project.headline}
            image={project.thumbnail}
          />
        ))}
      </div>
    </FadeWrapper>
  </Layout>
)

export default WorkPage
