import { defineType } from 'sanity';

const ContentPoints = defineType({
  name: 'ContentPoints',
  type: 'document',
  title: 'Content Points',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the content point',
    },
    {
      name: 'bodytext',
      type: 'text',
      title: 'Body Text',
      description: 'Text content for the content point',
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon',
      description: 'Choose an icon for the content point',
      options: {
        list: [
          { title: 'Arrow Right', value: 'arrow-right' },
          { title: 'Chart Bar', value: 'chart-bar' },
          { title: 'Menu Alt4', value: 'menu-alt4' },
          { title: 'Close', value: 'close' },
          { title: 'Plus', value: 'plus' },
          { title: 'Adjustments', value: 'adjustments' },
          { title: 'Heart', value: 'heart' },
          { title: 'Search', value: 'search' },
          { title: 'Play', value: 'play' },
          { title: 'Users', value: 'users' },
          { title: 'Edit', value: 'edit' },
          { title: 'Minus', value: 'minus' },
          { title: 'Shield Check', value: 'shield-check' },
          { title: 'Check Circle', value: 'check-circle' },
          { title: 'Eye', value: 'eye' },
          { title: 'Globe', value: 'globe' },
          { title: 'Exclamation Circle', value: 'exclamation-circle' },
          { title: 'Extrernal Link', value: 'external-link' },
          // Add more options as needed
        ],
      },
    }
  ],
});

export default ContentPoints;
