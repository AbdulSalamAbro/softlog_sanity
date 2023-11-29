import { defineType } from 'sanity';
import {ComponentIcon} from '@sanity/icons'

const VideoBannerBoxed = defineType({
  name: 'VideoBannerBoxed',
  type: 'document',
  title: 'Video Banner Boxed',
  icon: ComponentIcon,
  fields: [
    {
      name: 'imageURL',
      type: 'url',
      title: 'Image URL',
      description: 'URL of the video thumbnail image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'videoId',
      type: 'string',
      title: 'Video ID',
      description: 'ID of the YouTube video to be played',
      validation: (Rule) => Rule.required(),
    },
    
  ],

  preview: {
    select: {
      title: 'Banner', // Add a title for the document list
    },
    prepare(selection) {
      return {
        title: 'Video Banner', // Emoji and custom name
      };
    },
  },
});

export default VideoBannerBoxed;
