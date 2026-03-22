import { defineField, defineType } from "sanity"

export const miscWebsite = defineType({
  name: "miscWebsite",
  type: "document",
  title: "Website",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "url", type: "url" }),
  ],
})

export const miscSong = defineType({
  name: "miscSong",
  type: "document",
  title: "Song",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "artist", type: "string" }),
    defineField({ name: "url", type: "url" }),
  ],
})

export const miscInstagram = defineType({
  name: "miscInstagram",
  type: "document",
  title: "Instagram",
  fields: [defineField({ name: "handle", type: "string" })],
})
