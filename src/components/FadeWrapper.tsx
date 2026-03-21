import styles from "@/styles/components/FadeWrapper.module.scss"

const FadeWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.wrapper}>
    {children}
  </div>
)

export default FadeWrapper
