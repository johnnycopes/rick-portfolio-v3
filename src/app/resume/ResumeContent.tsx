"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock } from "@fortawesome/free-solid-svg-icons"

import styles from "@/styles/templates/resume.module.scss"
import FadeWrapper from "@/components/FadeWrapper"
import Button from "@/components/Button"

const ResumeContent = ({ resumeUrl, password }: { resumeUrl: string; password: string }) => {
  const [showResume, setShowResume] = useState(() => !!localStorage.getItem("rickSegal:showResume"))
  const [input, setInput] = useState("")
  const [error, setError] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const submit = (event: React.FormEvent) => {
    event.preventDefault()
    if (input === password) {
      setError(false)
      setShowResume(true)
      typeof window !== "undefined" && localStorage.setItem("rickSegal:showResume", "true")
    } else {
      setError(true)
      setInput("")
    }
  }

  return (
    <FadeWrapper>
      <div className={styles.wrapper}>
        {
          showResume ?
          <iframe className={styles.resume}
            title="RickSegalResume"
            src={resumeUrl}
          >
          </iframe> :
          <form className={styles.form}
            onSubmit={submit}
          >
            <FontAwesomeIcon className={styles.icon}
              icon={faLock}
            />
            <div className={styles.inputField}>
              <input className={styles.input}
                type="password"
                placeholder="Password"
                value={input}
                onChange={handleChange}
              />
              <Button>
                submit
              </Button>
            </div>
            {error && <p className={styles.error}>Incorrect password</p>}
          </form>
        }
      </div>
    </FadeWrapper>
  )
}

export default ResumeContent
