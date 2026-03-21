import styles from "@/styles/templates/project.module.scss"
import Layout from "@/components/Layout"
import InternalLink from "@/components/InternalLink"
import Button from "@/components/Button"
import Video from "@/components/Video"
import Carousel from "@/components/Carousel"
import FadeWrapper from "@/components/FadeWrapper"

interface VideoItem {
  type?: string
  url: string
}

interface ImageItem {
  src: string
  alt?: string
}

interface ProjectData {
  title: string
  headline: string
  videos: VideoItem[]
  images: ImageItem[]
}

const getProject = (_slug: string): ProjectData => ({
  title: "",
  headline: "",
  videos: [],
  images: [],
})

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const project = getProject(params.slug)
  const videos = project.videos || []
  const images = project.images || []

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
        {images.length > 0 &&
          <Carousel images={images} />
        }
      </FadeWrapper>
    </Layout>
  )
}

export default ProjectPage
