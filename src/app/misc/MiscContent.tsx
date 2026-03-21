"use client"

import { useState } from "react"
import cx from "classnames"
import Image from "next/image"

import styles from "@/styles/templates/misc.module.scss"
import FadeWrapper from "@/components/FadeWrapper"
import ExternalLink from "@/components/ExternalLink"

interface Website {
  _id: string
  name: string
  url: string
}

interface Song {
  _id: string
  artist: string
  title: string
  url: string
}

interface Instagram {
  _id: string
  handle: string
}

interface MiscContentProps {
  websites: Website[]
  songs: Song[]
  instagrams: Instagram[]
}

const getNewItemFromArray = <T extends { _id: string }>(array: T[], currentItem: T): T => {
  const currentItemIndex = array.findIndex((item) => item._id === currentItem._id)
  let newItemIndex = Math.floor(Math.random() * array.length)
  while (newItemIndex === currentItemIndex) {
    newItemIndex = Math.floor(Math.random() * array.length)
  }
  return array[newItemIndex]
}

const MiscContent = ({ websites, songs, instagrams }: MiscContentProps) => {
  const [website, setWebsite] = useState(websites[0])
  const [song, setSong] = useState(songs[0])
  const [instagram, setInstagram] = useState(instagrams[0])
  const [fade, setFade] = useState(false)

  const setNewLinks = () => {
    setWebsite(getNewItemFromArray(websites, website))
    setSong(getNewItemFromArray(songs, song))
    setInstagram(getNewItemFromArray(instagrams, instagram))
    setFade(true)
  }

  return (
    <FadeWrapper>
      <h2 className={styles.header}>
        Random things that I like:
      </h2>
      <div className={cx(
        styles.links,
        { [styles.fade]: fade }
        )}
        onAnimationEnd={() => setFade(false)}
        >
        <ExternalLink className={styles.link}
          link={website?.url}
          >
          Website that I like: <span className={styles.link__name}>{website?.name}</span>
        </ExternalLink>
        <ExternalLink className={styles.link}
          link={song?.url}
          >
          Song that I like: <span className={styles.link__name}>{song?.artist} — {song?.title}</span>
        </ExternalLink>
        <ExternalLink className={styles.link}
          link={`https://www.instagram.com/${instagram?.handle}`}
          >
          Instagram that I like: <span className={styles.link__name}>@{instagram?.handle}</span>
        </ExternalLink>
      </div>
      <button className={styles.button}
        onClick={setNewLinks}
        >
        <Image
          className={styles.button__image}
          src="/khaled.jpg"
          alt="DJ Khaled"
          width={226}
          height={150}
        />
      </button>
    </FadeWrapper>
  )
}

export default MiscContent
