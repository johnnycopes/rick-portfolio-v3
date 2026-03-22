import Image from "next/image"

import styles from "@/styles/components/ProjectTile.module.scss"
import InternalLink from "./InternalLink"

interface ProjectTileProps {
  link: string
  title?: string
  headline?: string
  image?: string
  lqip?: string
}

const ProjectTile = ({ link, title, headline, image, lqip }: ProjectTileProps) => (
  <InternalLink link={link}>
    <div className={styles.tile}>
      {image && (
        <Image
          src={image}
          alt={title || ""}
          fill
          sizes="(min-width: 700px) 50vw, 100vw"
          style={{ objectFit: "cover" }}
          placeholder={lqip ? "blur" : "empty"}
          blurDataURL={lqip}
        />
      )}
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
