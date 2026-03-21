import styles from "@/styles/components/ProjectTile.module.scss"
import InternalLink from "./InternalLink"

interface ProjectTileProps {
  link: string
  title?: string
  headline?: string
  image?: string
}

const ProjectTile = ({ link, title, headline, image }: ProjectTileProps) => (
  <InternalLink link={link}>
    <div
      className={styles.tile}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
      >
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.headline}>
            {headline}
          </div>
          <div className={styles.title}>
            {title}
          </div>
        </div>
      </div>
    </div>
  </InternalLink>
)

export default ProjectTile
