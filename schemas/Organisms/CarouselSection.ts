import { defineType } from 'sanity';
import {ComponentIcon} from '@sanity/icons'

const CarouselSection = defineType({
  name: 'CarouselSection',
  type: 'document',
  title: 'Carousel Section',
  icon: ComponentIcon,

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the carousel section',
    },
    {
      name: 'carousel',
      type: 'reference',
      to: [{ type: 'Carousel' }], 
      title: 'Carousel',
      description: 'Reference to the Carousel',
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
        subtitle: 'Content section'
      };
    },
  },
});

export default CarouselSection;
