import cx from "classnames"

import styles from "@/styles/components/Layout.module.scss"
import Header from "./Header"

interface LayoutProps {
  children: React.ReactNode
  showHeader?: boolean
  verticallyCentered?: boolean
  horizontallyCentered?: boolean
}

const Layout = ({
  children,
  showHeader = true,
  verticallyCentered,
  horizontallyCentered,
}: LayoutProps) => (
  <>
    {showHeader && <Header />}
    <div className={cx({ [styles.wrapper]: showHeader })}>
      <div className={cx(
        styles.content,
        { [styles.includesHeader]: showHeader },
        { [styles.verticallyCentered]: verticallyCentered },
        { [styles.horizontallyCentered]: horizontallyCentered },
        )}>
        {children}
      </div>
    </div>
  </>
)

export default Layout
