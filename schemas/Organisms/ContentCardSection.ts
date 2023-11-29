import { defineType } from 'sanity';
import {ComponentIcon} from '@sanity/icons'


const ContentCardSection = defineType({
  name: 'ContentCardSection',
  type: 'document',
  title: 'Content Card Section',
  icon: ComponentIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the content card section',
    },
    // {
    //   name: 'contentMask',
    //   type: 'reference',
    //   to: [{ type: 'ContentMask' }], // Assuming you have a ContentMask schema
    //   title: 'Content Mask',
    //   description: 'Reference to the Content Mask',
    // },
    {
      name: 'contentCards',
      type: 'array',
      title: 'Content Cards',
      of: [{ type: 'reference', to: [{ type: 'ContentCard' }] }], // Assuming you have a ContentCard schema
      description: 'Reference array to Content Cards',
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

export default ContentCardSection;
