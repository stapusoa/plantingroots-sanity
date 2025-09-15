import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "logoContrast",
      title: "Logo Contrast",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "logoPrimary",
      title: "Logo Primary",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroImage",
      title: "Default Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "favicon",
      title: "Favicon",
      type: "image",
    }),
  ],
});