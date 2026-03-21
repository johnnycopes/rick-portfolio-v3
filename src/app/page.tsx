import styles from "@/styles/pages/index.module.scss"
import Layout from "@/components/Layout"
import Name from "@/components/Name"
import Button from "@/components/Button"
import InternalLink from "@/components/InternalLink"

const IndexPage = () => (
  <Layout
    showHeader={false}
    verticallyCentered={true}
    horizontallyCentered={true}
    >
    <h1 className={styles.name}>
      <Name />
    </h1>
    <div className={styles.links}>
      <InternalLink className={styles.link}
        link="/work"
        >
        <Button>
          work
        </Button>
      </InternalLink>
      <InternalLink className={styles.link}
        link="/about"
        >
        <Button>
          about
        </Button>
      </InternalLink>
      <InternalLink className={styles.link}
        link="/misc"
        >
        <Button>
          misc
        </Button>
      </InternalLink>
    </div>
  </Layout>
)

export default IndexPage
