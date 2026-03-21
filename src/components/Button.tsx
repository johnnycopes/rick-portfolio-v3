import styles from "@/styles/components/Button.module.scss"

const Button = ({ children }: { children: React.ReactNode }) => (
  <button className={styles.button}>
    {children}
  </button>
)

export default Button
