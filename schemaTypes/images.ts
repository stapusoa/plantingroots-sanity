import { defineType, defineField } from "sanity";

export const images = defineType({
  name: "images",   // 👈 internal type name
  title: "Images",  // 👈 display label in Studio
  type: "image",
  options: {
    hotspot: true, // allows cropping & focal point
  },
  fields: [
    defineField({
      name: "alt",
      title: "Alt Text",
      type: "string",
      description: "Important for SEO and accessibility",
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
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
      },
    }),
  ],
});