"use client"

import { useState } from "react"
import cx from "classnames"
import Image from "next/image"

import styles from "@/styles/templates/misc.module.scss"
import Layout from "@/components/Layout"
import FadeWrapper from "@/components/FadeWrapper"
import ExternalLink from "@/components/ExternalLink"

interface Website {
  name: string
  url: string
}

interface Song {
  artist: string
  title: string
  url: string
}

const websites: Website[] = [
  { name: "WTF is Mike Wearing", url: "http://wtfismikewearing.tumblr.com" },
  { name: "McSweeney's", url: "https://www.mcsweeneys.net" },
  { name: "Poolside FM", url: "http://poolside.fm" },
  { name: "Le Meme", url: "http://www.lememe.com" },
  { name: "Fake Updates", url: "http://fakeupdate.net" },
  { name: "Pictures Of Walls", url: "http://www.picturesofwalls.com" },
  { name: "Don't Even Reply", url: "http://www.dontevenreply.com" },
  { name: "Send a Message", url: "http://sendamessage.to" },
  { name: "The Colour Clock", url: "http://thecolourclock.co.uk" },
  { name: "Bacon Ipsum", url: "https://baconipsum.com" },
  { name: "NYT Basic Knife Skills", url: "https://cooking.nytimes.com/guides/23-basic-knife-skills" },
  { name: "Best Made", url: "https://www.bestmadeco.com" },
  { name: "Ling's Cars", url: "https://www.lingscars.com" },
  { name: "Space Jam", url: "https://www.spacejam.com/" },
  { name: "La Colombe", url: "https://www.lacolombe.com/" },
  { name: "Karasu", url: "http://www.karasubk.com/" },
  { name: "Clickhole", url: "http://www.clickhole.com/" },
  { name: "Graphic Burger", url: "https://graphicburger.com/" },
  { name: "The Noun Project", url: "https://thenounproject.com/" },
  { name: "Modern Anthology", url: "http://www.modernanthology.com/" },
  { name: "Gucci Gifts", url: "http://gift.gucci.com/" },
  { name: "Wirecutter", url: "https://thewirecutter.com/" },
  { name: "The Strategist", url: "http://nymag.com/strategist/" },
  { name: "What The Font", url: "https://www.myfonts.com/WhatTheFont/" },
  { name: "What The Fuck Should I Make For Dinner", url: "http://whatthefuckshouldimakefordinner.com/" },
  { name: "Who Sampled", url: "https://www.whosampled.com/" },
  { name: "good boy bob", url: "https://goodboybob.com/" },
  { name: "Miss Aada", url: "https://www.missadanyc.com/" },
  { name: "Coming Soon NY", url: "https://comingsoonnewyork.com/" },
  { name: "Only NY", url: "https://onlyny.com/" },
  { name: "Ciaooo!", url: "https://ciaooomag.com/" },
  { name: "Default Filename TV", url: "http://defaultfile.name/" },
  { name: "Design Milk", url: "https://design-milk.com/" },
  { name: "Off Liberty", url: "http://offliberty.com/" },
  { name: "Angry Post Vendor", url: "https://twitter.com/AngryPostVendor?s=20" },
  { name: "Ad-Aged", url: "https://adaged.blogspot.com/" },
  { name: "I Miss The Office", url: "https://imisstheoffice.eu/" },
]

const songs: Song[] = [
  { artist: "Leikeli47", title: "Girl Blunt", url: "https://www.youtube.com/watch?v=xI8w-h-HCAg&feature=youtu.be" },
  { artist: "Anderson Paak", title: "Am I Wrong", url: "https://www.youtube.com/watch?v=vvPeJLcK2Lk&feature=youtu.be" },
  { artist: "Young Thug", title: "Constantly Hating", url: "https://www.youtube.com/watch?v=Va9fNf4FZyM&feature=youtu.be" },
  { artist: "Schoolboy Q", title: "Man of the Year", url: "https://www.youtube.com/watch?v=rEMsjeq43_U&feature=youtu.be" },
  { artist: "A$AP Rocky", title: "Wild for the Night", url: "https://www.youtube.com/watch?v=1eWdbMBYlH4&feature=youtu.be" },
  { artist: "Kanye West", title: "Father Stretch My Hands Pt 2", url: "https://www.youtube.com/watch?v=lUu_ycfMT2U&feature=youtu.be" },
  { artist: "Chance the Rapper", title: "No Problem", url: "https://www.youtube.com/watch?v=DVkkYlQNmbc&feature=youtu.be" },
  { artist: "Joey Bada$$", title: "Devastated", url: "https://www.youtube.com/watch?v=RLnA25dVzrQ&feature=youtu.be" },
  { artist: "Bruno Mars", title: "That's What I Like", url: "https://www.youtube.com/watch?v=PMivT7MJ41M&feature=youtu.be" },
  { artist: "Cardi B", title: "I Like It", url: "https://www.youtube.com/watch?v=xTlNMmZKwpA&feature=youtu.be" },
  { artist: "Beyoncé", title: "Hold Up", url: "https://www.youtube.com/watch?v=PeonBmeFR8o&feature=youtu.be" },
  { artist: "Run The Jewels", title: "Nobody Speak", url: "https://www.youtube.com/watch?v=NUC2EQvdzmY&feature=youtu.be" },
  { artist: "Kendrick Lamar", title: "Humble", url: "https://www.youtube.com/watch?v=tvTRZJ-4EyI&feature=youtu.be" },
  { artist: "N.E.R.D. + Rihanna", title: "Lemon", url: "https://www.youtube.com/watch?v=L_u97PqWX6g" },
  { artist: "Method Man + Redman", title: "Da Rockwilder", url: "https://www.youtube.com/watch?v=WCYy8jpp7R8" },
  { artist: "Mase", title: "Feel So Good", url: "https://www.youtube.com/watch?v=rIvEiTrq9kk" },
  { artist: "Nelly", title: "Country Grammar", url: "https://www.youtube.com/watch?v=Y5qKNlcUwKs" },
  { artist: "Glass Animals + Denzel Curry", title: "Tokyo Drifting", url: "https://www.youtube.com/watch?v=R_7HqeukRrI" },
  { artist: "Goldlink", title: "Crew", url: "https://www.youtube.com/watch?v=nhNqbe6QENY" },
  { artist: "Sleigh Bells", title: "Rill Rill", url: "https://www.youtube.com/watch?v=nmFgejWZjtg" },
]

const instagrams: string[] = [
  "JakeLikesOnions", "SamsonTheDood", "JonContino", "MensWearDog", "MiddleClassFancy",
  "MillerHighLife", "AdamLucasNyc", "LAflare1017", "DonaldTrumpDoingThings", "Beefcake_Boys_Soaps",
  "FuckAdvertisements", "SubwayCreatures", "HumansOfNYLol", "HomSweetHom", "YoungJerks",
  "NewYorkerCartoons", "BonAppetitMag", "Gucci", "JVN", "ZacharyKiernan",
  "ChrisSimpsonsArtist", "Bandit_Studio", "OrdinaryPeopleMemes", "BrunoLevyTattoo", "Dima_To_Go",
  "Joe_At_Home", "Katya_Krasnova", "SlowerBlack", "NYCurbanism", "GoodBoyBobCoffee",
  "LupaCotta", "GrapeJuiceBoys", "RucaMyHyna", "TopherBrophy",
]

const getNewItemFromArray = <T,>(array: T[], currentItem: T): T => {
  const currentItemIndex = array.indexOf(currentItem)
  let newItemIndex = Math.floor(Math.random() * array.length)
  while (newItemIndex === currentItemIndex) {
    newItemIndex = Math.floor(Math.random() * array.length)
  }
  return array[newItemIndex]
}

const MiscPage = () => {
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
    <Layout
      verticallyCentered={true}
      horizontallyCentered={true}
      >
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
            link={website.url}
            >
            Website that I like: <span className={styles.link__name}>{website.name}</span>
          </ExternalLink>
          <ExternalLink className={styles.link}
            link={song.url}
            >
            Song that I like: <span className={styles.link__name}>{song.artist} — {song.title}</span>
          </ExternalLink>
          <ExternalLink className={styles.link}
            link={`https://www.instagram.com/${instagram}`}
            >
            Instagram that I like: <span className={styles.link__name}>@{instagram}</span>
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
    </Layout>
  )
}

export default MiscPage
