import cx from "classnames"

import styles from "@/styles/components/FadeWrapper.module.scss"

interface FadeWrapperProps {
  children: React.ReactNode
  status?: string
}

const FadeWrapper = ({ children, status }: FadeWrapperProps) => (
  <div className={cx(
    styles.wrapper,
    { [styles.entering]: status === "entering" },
    { [styles.enter]: status === "enter" },
    { [styles.exit]: status === "exiting" },
    )}>
    {children}
  </div>
)

export default FadeWrapper
