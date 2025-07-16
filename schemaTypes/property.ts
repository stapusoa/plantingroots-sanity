import {defineField, defineType} from 'sanity'

export const property = defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'address',
      type: 'string',
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'bedrooms',
      type: 'number',
    }),
    defineField({
      name: 'bathrooms',
      type: 'number',
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'agent',
      type: 'reference',
      to: [{ type: 'agent' }],
    }),
  ],
})
