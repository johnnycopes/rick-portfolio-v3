import styles from "@/styles/pages/404.module.scss"
import Layout from "@/components/Layout"
import InternalLink from "@/components/InternalLink"
import Button from "@/components/Button"

const NotFoundPage = () => (
  <Layout
    verticallyCentered={true}
    horizontallyCentered={true}
    >
    <div className={styles.text}>
      <h1 className={styles.header}>404 error</h1>
      <p>This page doesn&apos;t exist.</p>
    </div>
    <InternalLink link="/">
      <Button>
        back to home
      </Button>
    </InternalLink>
  </Layout>
)

export default NotFoundPage
