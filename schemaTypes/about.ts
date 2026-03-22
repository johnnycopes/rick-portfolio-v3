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
    defineField({ name: "email", type: "string" }),
    defineField({
      name: "socialLinks",
      type: "object",
      fields: [
        defineField({ name: "linkedin", type: "url" }),
        defineField({ name: "instagram", type: "url" }),
        defineField({ name: "twitter", type: "url" }),
      ],
    }),
    defineField({
      name: "funButton",
      type: "object",
      fields: [
        defineField({ name: "text", type: "string" }),
        defineField({ name: "url", type: "url" }),
      ],
    }),
  ],
})
