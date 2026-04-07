import { defineField, defineType } from "sanity"

export const about = defineType({
  name: "about",
  type: "document",
  fields: [
    defineField({ name: "heading", type: "string" }),
    defineField({
      name: "profileImage",
      type: "image",
      fields: [defineField({ name: "alt", type: "string" })],
      options: { hotspot: true },
    }),
    defineField({ name: "resume", type: "file" }),
    defineField({ name: "resumePassword", type: "string" }),
    defineField({
      name: "socialLinks",
      type: "object",
      fields: [
        defineField({ name: "linkedin", type: "url" }),
      ],
    }),
  ],
})
