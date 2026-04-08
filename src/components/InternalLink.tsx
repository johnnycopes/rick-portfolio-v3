"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
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
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      className={cx(styles.link, className, { [styles.active]: isActive })}
      href={link}
      prefetch={hovered ? null : false}
      onMouseEnter={() => setHovered(true)}
    >
      {children}
    </Link>
  )
}

export default InternalLink
