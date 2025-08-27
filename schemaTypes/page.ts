import { defineType, defineField } from "sanity"

export const page = defineType({
  name: "page",
  type: "document",
  title: "Pages",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Page Title (H1)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "seo",
      type: "object",
      title: "SEO",
      fields: [
        defineField({ name: "metaTitle", type: "string", title: "Meta Title" }),
        defineField({ name: "metaDescription", type: "text", title: "Meta Description" }),
        defineField({ name: "canonicalUrl", type: "url", title: "Canonical URL" }),
      ],
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "block" }],
    }),
  ],
})