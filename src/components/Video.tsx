import styles from "@/styles/components/Video.module.scss"

interface VideoProps {
  type?: string
  url: string
}

const Video = ({ type, url }: VideoProps) => (
  <>
    <div className={styles.video}>
      <iframe
        src={url}
        title={url}
        allow="fullscreen"
        >
      </iframe>
    </div>
    <p className={styles.type}>
      {type}
    </p>
  </>
)

export default Video
