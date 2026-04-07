import { defineQuery } from "next-sanity"

export const WORK_PROJECTS_QUERY = defineQuery(`
  *[_type == "workProject" && isActive == true] | order(orderRank) {
    _id,
    title,
    "slug": slug.current,
    "headline": client,
    thumbnail,
    "thumbnailLqip": thumbnail.asset->metadata.lqip
  }
`)

export const WORK_PROJECT_SLUGS_QUERY = defineQuery(`
  *[_type == "workProject" && defined(slug.current)] {
    "slug": slug.current
  }
`)

export const WORK_PROJECT_QUERY = defineQuery(`
  *[_type == "workProject" && slug.current == $slug][0] {
    title,
    "headline": client,
    videos[] {
      "type": videoTitle,
      url
    }
  }
`)

export const ABOUT_QUERY = defineQuery(`
  *[_type == "about"][0] {
    heading,
    profileImage,
    "profileImageLqip": profileImage.asset->metadata.lqip,
    "profileImageWidth": profileImage.asset->metadata.dimensions.width,
    "profileImageHeight": profileImage.asset->metadata.dimensions.height,
    "resumeUrl": resume.asset->url,
    socialLinks
  }
`)


export const RESUME_QUERY = defineQuery(`
  *[_type == "about"][0] {
    "resumeUrl": resume.asset->url,
    resumePassword
  }
`)
