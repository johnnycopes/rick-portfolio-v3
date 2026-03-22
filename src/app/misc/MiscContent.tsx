"use client"

import { useState } from "react"
import cx from "classnames"
import Image from "next/image"
import khaledImage from "../../../public/khaled.jpg"

const KHALED_BLUR_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCARXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAAygAwAEAAAAAQAAAAgAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/CABEIAAgADAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAADAgQBBQAGBwgJCgv/xADDEAABAwMCBAMEBgQHBgQIBnMBAgADEQQSIQUxEyIQBkFRMhRhcSMHgSCRQhWhUjOxJGIwFsFy0UOSNIII4VNAJWMXNfCTc6JQRLKD8SZUNmSUdMJg0oSjGHDiJ0U3ZbNVdaSVw4Xy00Z2gONHVma0CQoZGigpKjg5OkhJSldYWVpnaGlqd3h5eoaHiImKkJaXmJmaoKWmp6ipqrC1tre4ubrAxMXGx8jJytDU1dbX2Nna4OTl5ufo6erz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAECAAMEBQYHCAkKC//EAMMRAAICAQMDAwIDBQIFAgQEhwEAAhEDEBIhBCAxQRMFMCIyURRABjMjYUIVcVI0gVAkkaFDsRYHYjVT8NElYMFE4XLxF4JjNnAmRVSSJ6LSCAkKGBkaKCkqNzg5OkZHSElKVVZXWFlaZGVmZ2hpanN0dXZ3eHl6gIOEhYaHiImKkJOUlZaXmJmaoKOkpaanqKmqsLKztLW2t7i5usDCw8TFxsfIycrQ09TV1tfY2drg4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwACAgICAgIDAgIDBQMDAwUGBQUFBQYIBgYGBgYICggICAgICAoKCgoKCgoKDAwMDAwMDg4ODg4PDw8PDw8PDw8P/9sAQwECAgIEBAQHBAQHEAsJCxAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ/9oADAMBAAIRAxEAAAG/9G+SuWw9D//aAAgBAQABBQLc9+ivt6tPHGzIj//aAAgBAxEBPwGPSwn9pD//2gAIAQIRAT8BBqZf/9oACAEBAAY/AqbdGAi3kUhcpX7Sk+g4/BmK/HuMyFEGMnL7UnzBf//EADMQAQADAAICAgICAwEBAAACCwERACExQVFhcYGRobHB8NEQ4fEgMEBQYHCAkKCwwNDg/9oACAEBAAE/IYCdNHD74QaOfEUJMM0zxfSb/9oADAMBAAIRAxEAABDn/8QAMxEBAQEAAwABAgUFAQEAAQEJAQARITEQQVFhIHHwkYGhsdHB4fEwQFBgcICQoLDA0OD/2gAIAQMRAT8QKMmfJ3+v0ccX/9oACAECEQE/EGIPYX//2gAIAQEAAT8QPgtfOYGw5YjtOQcm5tWDA5KYhxEIv//Z"

import styles from "@/styles/templates/misc.module.scss"
import FadeWrapper from "@/components/FadeWrapper"
import ExternalLink from "@/components/ExternalLink"

interface Item {
  _id: string;
}

interface Website extends Item {
  name: string
  url: string
}

interface Song extends Item {
  artist: string
  title: string
  url: string
}

interface Instagram extends Item {
  handle: string
}

interface MiscContentProps {
  websites: Website[]
  songs: Song[]
  instagrams: Instagram[]
}

const getNewItemFromArray = <T extends Item>(arr: T[], currentItem: T): T => {
  const currentItemIndex = arr.findIndex(({ _id }) => _id === currentItem._id)
  let newItemIndex = Math.floor(Math.random() * arr.length)

  while (newItemIndex === currentItemIndex) {
    newItemIndex = Math.floor(Math.random() * arr.length)
  }

  return arr[newItemIndex]
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
          src={khaledImage}
          alt="DJ Khaled"
          loading="eager"
          placeholder="blur"
          blurDataURL={KHALED_BLUR_DATA_URL}
          style={{ width: "100%", height: "auto" }}
        />
      </button>
    </FadeWrapper>
  )
}

export default MiscContent
