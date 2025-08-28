// schemas/page.ts
import { defineType, defineField } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    // Main content
    defineField({
      name: "title",
      title: "Title Tag",
      type: "string",
      description: "SEO title tag (50–60 chars).",
    }),
    defineField({
      name: "slug",
      title: "Page URL",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      description: "SEO meta description (150–160 chars).",
    }),

    // Hero section
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
          name: "titleAlignment",
          title: "Title Alignment",
          type: "string",
          options: { list: ["left", "center"], layout: "radio" },
        }),
        defineField({ name: "subheader", title: "Subtitle / Description", type: "text" }),
        defineField({
          name: "subheaderAlignment",
          title: "Subtitle Alignment",
          type: "string",
          options: { list: ["left", "center"], layout: "radio" },
        }),
        defineField({ name: "ctaText", title: "Button Text", type: "string" }),
        defineField({ name: "ctaLink", title: "Button Link", type: "url" }),
        defineField({ name: "heroImageSM", title: "Hero Image Small", type: "image" }),
        defineField({ name: "heroImageMD", title: "Hero Image Medium", type: "image" }),
        defineField({ name: "heroImageLG", title: "Hero Image Large", type: "image" }),
      ],
    }),

    // Content blocks
    defineField({
      name: "content",
      title: "Page Content",
      type: "array",
      of: [
        defineField({
          type: "object",
          name: "textBlock",
          title: "Text Block",
          fields: [
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({
              name: "headingLevel",
              title: "Heading Level",
              type: "string",
              options: { list: ["h2", "h3", "h4", "h5", "h6"] },
            }),
            defineField({
              name: "headingAlignment",
              title: "Heading Alignment",
              type: "string",
              options: { list: ["left", "center"], layout: "radio" },
            }),
            defineField({ name: "body", title: "Body Text", type: "array", of: [{ type: "block" }] }),
            defineField({
              name: "textAlignment",
              title: "Text Alignment",
              type: "string",
              options: { list: ["left", "center"], layout: "radio" },
            }),
          ],
        }),
        defineField({
          type: "image",
          name: "imageBlock",
          title: "Image Block",
          fields: [
            defineField({ name: "alt", title: "Alt Text", type: "string" }),
            defineField({
              name: "alignment",
              title: "Image Alignment",
              type: "string",
              options: { list: ["left", "center", "right"], layout: "radio" },
            }),
          ],
        }),
      ],
    }),

    // Optional SEO fields
    defineField({ name: "canonicalUrl", title: "Canonical URL", type: "url" }),
    defineField({
      name: "robots",
      title: "Robots",
      type: "string",
      options: { list: ["index, follow", "noindex, nofollow"], layout: "radio" },
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
  },
});