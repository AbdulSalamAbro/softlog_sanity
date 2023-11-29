import { defineType } from 'sanity';
import {ComponentIcon} from '@sanity/icons'

const ContentPointsSection = defineType({
  name: 'ContentPointsSection',
  type: 'document',
  title: 'Content Points Section',
  icon: ComponentIcon,

  fields: [

    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the content points section',
    },
    // {
    //   name: 'contentMask',
    //   type: 'reference',
    //   to: [{ type: 'ContentMask' }], // Assuming you have a ContentMask schema
    //   title: 'Content Mask',
    //   description: 'Reference to the Content Mask',
    // },
    {
      name: 'contentPoints',
      type: 'array',
      title: 'Content Points',
      of: [
        {
          type: 'reference',
          to: [{ type: 'ContentPoints' }], // Assuming you have a ContentPoints schema
        },
      ],
      description: 'References to Content Points',
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

export default ContentPointsSection;
