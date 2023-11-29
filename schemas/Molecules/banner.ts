// schemas/banner.js
import { defineType } from 'sanity';
import {ComponentIcon} from '@sanity/icons'

const Banner = defineType({
  name: 'banner',
  title: 'Banner',
  type: 'document',
  icon: ComponentIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'button',
      type: 'reference',
      to: [{ type: 'button' }], 
      title: 'Button',
      description: 'Reference to the Button',
    },
    {
      name: 'imageSrc',
      title: 'Image Source',
      type: 'image',
    },

    {
      name: 'previewTitle',
      title: 'Preview Title',
      type: 'string',
      description: 'Custom title for document preview',
    },
  ],
  preview: {

    select: {
      customTitle: 'previewTitle',
    },
   
    prepare({customTitle}) {
      return {
        title: customTitle, //  custom name
        
      };
    },
  },
});

export default Banner;
