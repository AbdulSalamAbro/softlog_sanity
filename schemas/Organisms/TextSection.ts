import { defineType } from 'sanity';
import {ComponentIcon} from '@sanity/icons'

const TextSection = defineType({
  name: 'TextSection',
  type: 'document',
  title: 'Text Section',
  icon: ComponentIcon,

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the text section',
    },
    {
      name: 'bodycopy',
      type: 'text',
      title: 'Body Copy',
      description: 'Text content for the text section',
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

export default TextSection;
