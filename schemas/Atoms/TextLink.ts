import { defineType } from 'sanity';

const TextLink = defineType({
  name: 'TextLink',
  type: 'document',
  title: 'Text Link',
  fields: [
    {
      name: 'children',
      type: 'string',
      title: 'Children',
      description: 'Text for the text link',
    },
    {
      name: 'disable',
      type: 'boolean',
      title: 'Disable',
      description: 'Boolean indicating whether the text link is disabled',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      description: 'URL for the text link',
    },
    {
      name: 'size',
      type: 'string',
      title: 'Size',
      description: 'Size of the text link',
      options: {
        list: ['Small'],
      },
    },
  ],
});

export default TextLink;
