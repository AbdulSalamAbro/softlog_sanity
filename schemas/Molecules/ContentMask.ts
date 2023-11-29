import { defineType } from 'sanity';

const ContentMask = defineType({
  name: 'ContentMask',
  type: 'document',
  title: 'Content Mask',
  fields: [
    {
      name: 'initialHeight',
      type: 'string',
      title: 'Initial Height',
      options: {
        list: ['small', 'medium'],
      },
      description: 'Initial height for the content mask',
    },
    {
      name: 'className',
      type: 'string',
      title: 'Class Name',
      description: 'Custom CSS class name for the content mask',
    },
    {
      name: 'gridCols',
      type: 'object',
      title: 'Grid Columns',
      fields: [
        {
          name: 'sm',
          type: 'number',
          title: 'Small Screen',
          description: 'Number of columns for small screens',
        },
        {
          name: 'md',
          type: 'number',
          title: 'Medium Screen',
          description: 'Number of columns for medium screens',
        },
        {
          name: 'lg',
          type: 'number',
          title: 'Large Screen',
          description: 'Number of columns for large screens',
        },
        {
          name: 'xl',
          type: 'number',
          title: 'Extra Large Screen',
          description: 'Number of columns for extra large screens',
        },
      ],
    },
  ],
});

export default ContentMask;
