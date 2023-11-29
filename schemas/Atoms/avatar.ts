// schemas/avatar.ts
import { defineType } from 'sanity'




const Avatar = defineType({
  name: 'avatar',
  title: 'Avatar',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image', // Use the image type
      options: {
        hotspot: true, // Adjust options as needed
      },
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
    },
    {
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: ['large', 'medium', 'small'],
      },
    },
    {
      name: 'priority',
      title: 'Priority',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
        image: 'image',
      alt: 'alt',
      variant: 'variant',
    },
    prepare: ({ alt, variant,image }) => ({
      media: image,
      title: `Avatar`,
    }),
  },
})

export default Avatar
