import { defineType } from 'sanity';

const Label = defineType({
  name: 'Label',
  type: 'document',
  title: 'Label',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the label',
    },
    {
      name: 'disable',
      type: 'boolean',
      title: 'Disable',
      description: 'Boolean indicating whether the label is disabled',
    },
    {
      name: 'staticState',
      type: 'boolean',
      title: 'Static State',
      description: 'Boolean indicating the static state of the label',
    },
    {
      name: 'href',
      type: 'string',
      title: 'Href',
      description: 'URL for the label link',
    },
  ],
});

export default Label;
