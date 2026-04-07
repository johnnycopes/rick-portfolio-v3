import cx from "classnames"

import styles from "@/styles/components/Header.module.scss"
import Name from "./Name"
import InternalLink from "./InternalLink"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.left}>
          <InternalLink className={cx(styles.item, styles.name)}
            link="/"
            >
            <Name />
          </InternalLink>
        </nav>
        <nav className={styles.right}>
          <InternalLink className={styles.item}
            link="/work"
            applyActiveClass={true}
            >
            work
          </InternalLink>
          <InternalLink className={styles.item}
            link="/about"
            applyActiveClass={true}
            >
            about
          </InternalLink>
          <InternalLink className={cx(styles.item, styles.misc)}
            link="/misc"
            applyActiveClass={true}
            >
            misc
          </InternalLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
