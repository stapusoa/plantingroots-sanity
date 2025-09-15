import { defineType, defineField } from "sanity";

export const image = defineType({
  name: "image",
  title: "Image",
  type: "image",
  options: {
    hotspot: true, // enables focal point selection
  },
  fields: [
    defineField({
      name: "alt",
      title: "Alt Text",
      type: "string",
      description: "Describe the image for accessibility and SEO",
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      description: "Optional caption displayed below the image",
    }),
    defineField({
      name: "alignment",
      title: "Image Alignment",
      type: "string",
      options: {
        list: ["left", "center", "right"],
        layout: "radio",
      },
      description: "Controls how the image is aligned in the content",
    }),
  ],
});