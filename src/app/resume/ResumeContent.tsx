"use client"

import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock } from "@fortawesome/free-solid-svg-icons"

import styles from "@/styles/templates/resume.module.scss"
import FadeWrapper from "@/components/FadeWrapper"
import Button from "@/components/Button"

const correctPassword = "TEST"

const ResumeContent = ({ resumeUrl }: { resumeUrl: string }) => {
  const [showResume, setShowResume] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShowResume(!!localStorage.getItem("rickSegal:showResume"))
    }
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const submit = (event: React.FormEvent) => {
    event.preventDefault()
    if (password === correctPassword) {
      setError(false)
      setShowResume(true)
      typeof window !== "undefined" && localStorage.setItem("rickSegal:showResume", "true")
    } else {
      setError(true)
      setPassword("")
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
                value={password}
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
