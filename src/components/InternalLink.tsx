"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import cx from "classnames"

import styles from "@/styles/components/Link.module.scss"

interface InternalLinkProps {
  link: string
  className?: string
  applyActiveClass?: boolean
  children: React.ReactNode
}

const InternalLink = ({ link, className, applyActiveClass, children }: InternalLinkProps) => {
  const pathname = usePathname()
  const isActive = applyActiveClass && pathname.startsWith(link)

  return (
    <Link className={cx(styles.link, className, { [styles.active]: isActive })}
      href={link}
      >
      {children}
    </Link>
  )
}

export default InternalLink
