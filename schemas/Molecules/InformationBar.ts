import { defineType } from 'sanity';

const InformationBar = defineType({
  name: 'InformationBar',
  type: 'document',
  title: 'Information Bar',
  fields: [
    {
      name: 'showTitle',
      type: 'boolean',
      title: 'Show Title',
      description: 'Boolean indicating whether to show the title in the information bar',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title for the information bar',
    },
    {
      name: 'text',
      type: 'string',
      title: 'Text',
      description: 'Text content for the information bar',
    },
    {
      name: 'position',
      type: 'string',
      title: 'Position',
      options: {
        list: ['Top-Bottom', 'Left-Right'],
      },
      description: 'Position of the information bar',
    },
  ],
});

export default InformationBar;
