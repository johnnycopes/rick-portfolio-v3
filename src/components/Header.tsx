import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLinkedin, faInstagram, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons"
import cx from "classnames"

import styles from "@/styles/components/Header.module.scss"
import Name from "./Name"
import InternalLink from "./InternalLink"
import ExternalLink from "./ExternalLink"

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <nav className={styles.left}>
        <InternalLink className={cx(styles.item, styles.name)}
          link="/"
          >
          <Name />
        </InternalLink>
        <span className={cx(styles.item, styles.divider)}>
          |
        </span>
        <ExternalLink className={cx(styles.item, styles.icon)}
          link="mailto:risegal4@gmail.com"
          >
          <FontAwesomeIcon icon={faEnvelope} />
        </ExternalLink>
        <ExternalLink className={cx(styles.item, styles.icon)}
          link="https://www.linkedin.com/in/rsegal"
          >
          <FontAwesomeIcon icon={faLinkedin} />
        </ExternalLink>
        <ExternalLink className={cx(styles.item, styles.icon)}
          link="https://www.instagram.com/riiyaack/"
          >
          <FontAwesomeIcon icon={faInstagram} />
        </ExternalLink>
        <ExternalLink className={cx(styles.item, styles.icon)}
          link="https://twitter.com/seinfeld2000"
          >
          <FontAwesomeIcon icon={faSquareXTwitter} />
        </ExternalLink>
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

export default Header
