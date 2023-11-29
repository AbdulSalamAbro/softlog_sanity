import { defineType } from 'sanity';
import {ComponentIcon} from '@sanity/icons'

const IntroSection = defineType({
  name: 'IntroSection',
  type: 'document',
  title: 'Intro Section',
  icon: ComponentIcon,

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the intro section',
    },
    {
      name: 'bodycopy',
      type: 'text',
      title: 'Body Copy',
      description: 'Text content for the intro section',
    },
    {
      name: 'websiteName',
      type: 'string',
      title: 'Website Name',
      description: 'Name of the associated website',
    },
    {
      name: 'websiteURL',
      type: 'string',
      title: 'Website URL',
      description: 'URL of the associated website',
    },
    {
      name: 'Year',
      type: 'string',
      title: 'Year',
      description: 'Year of the intro section',
    },
    {
      name: 'Location',
      type: 'string',
      title: 'Location',
      description: 'Location information for the intro section',
    },
    {
      name: 'Languages',
      type: 'string',
      title: 'Languages',
      description: 'Languages used in the intro section',
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

export default IntroSection;
