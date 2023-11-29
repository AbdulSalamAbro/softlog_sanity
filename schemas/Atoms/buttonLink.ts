import { defineType } from 'sanity';
import { ReactNode } from 'react'; // Import ReactNode from 'react'

const ButtonLink = defineType({
  name: 'ButtonLink',
  type: 'document',
  title: 'Button Link',
  fields: [
    {
      name: 'Label',
      type: 'string',
      title: 'Label',
      description: 'Text or content for the button link',
    },
    {
      name: 'size',
      type: 'string',
      title: 'Size',
      description: 'Size of the button link',
      options: {
        list: ['big', 'medium'],
      },
    },
    {
      name: 'disable',
      type: 'boolean',
      title: 'Disable',
      description: 'Disable the button link',
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Icon',
      description: 'Icon for the button link',
    },
    {
      name: 'iconPosition',
      type: 'string',
      title: 'Icon Position',
      description: 'Position of the icon',
      options: {
        list: ['left', 'right', 'only'],
      },
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link',
      description: 'URL for the button link',
    },
    {
      name: 'active',
      type: 'boolean',
      title: 'Active',
      description: 'Indicates whether the button link is active',
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      title: 'Full Width',
      description: 'Make the button link full width',
    },
    {
      name: 'noStyling',
      type: 'boolean',
      title: 'No Styling',
      description: 'Disable default styling for the button link',
    },
  ],
});

export default ButtonLink;
