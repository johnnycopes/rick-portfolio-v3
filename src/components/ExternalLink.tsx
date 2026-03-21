import cx from "classnames"

import styles from "@/styles/components/Link.module.scss"

interface ExternalLinkProps {
  link: string
  className?: string
  children: React.ReactNode
}

const ExternalLink = ({ link, className, children }: ExternalLinkProps) => (
  <a className={cx(styles.link, className)}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    >
    {children}
  </a>
)

export default ExternalLink
