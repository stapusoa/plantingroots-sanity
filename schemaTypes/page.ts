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
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      description: "SEO meta description (150–160 chars).",
    }),
    defineField({
      name: "h1",
      title: "H1 Tag",
      type: "string",
      description: "Main heading of the page.",
    }),
    defineField({
      name: "h2s",
      title: "H2 Tags",
      type: "array",
      of: [{ type: "string" }],
      description: "Subheadings for content sections.",
    }),
    defineField({
      name: "body",
      title: "Body Content",
      type: "array",
      of: [{ type: "block" }],
    }),

    // Images
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
              description:
                "Describe the image for accessibility and SEO.",
            },
          ],
        },
      ],
    }),

    // Call to Action
    defineField({
      name: "cta",
      title: "CTA",
      type: "object",
      fields: [
        { name: "text", title: "Button Text", type: "string" },
        { name: "url", title: "Link URL", type: "url" },
      ],
    }),

    // Keywords
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      description: "Optional SEO keywords.",
    }),

    // Optional SEO fields
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      description: "Canonical link for this page (avoid duplicate content).",
    }),
    defineField({
      name: "robots",
      title: "Robots.txt",
      type: "string",
      description: "Optional: e.g., index, noindex, follow, nofollow",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
  },
});