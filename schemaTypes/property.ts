import {defineField, defineType} from 'sanity'

export const property = defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
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
    defineField({
      name: 'sqft',
      type: 'number',
    }),
    defineField({
      name: 'dateAdded',
      type: 'string',
    }),
    defineField({
      name: 'type',
      type: 'array',
      of: [{ name: 'house', type: 'string' }, { name: 'apartment', type: 'string' }, { name: 'condo', type: 'string' }, { name: 'townhouse', type: 'string' }]
    }),
    defineField({
      name: 'features',
      type: 'array',
      of: [{ type: 'string' }]
    })
  ],
})
