import { defineField, defineType } from "sanity"

export const workProject = defineType({
  name: "workProject",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug" }),
    defineField({ name: "client", type: "string" }),
    defineField({ name: "isActive", type: "boolean" }),
    defineField({
      name: "thumbnail",
      type: "image",
      fields: [defineField({ name: "alt", type: "string" })],
      options: { hotspot: true },
    }),
    defineField({
      name: "videos",
      type: "array",
      of: [
        {
          type: "object",
          name: "video",
          fields: [
            defineField({ name: "videoTitle", type: "string" }),
            defineField({ name: "url", type: "url" }),
          ],
        },
      ],
    }),
    defineField({ name: "orderRank", type: "string" }),
  ],
})
