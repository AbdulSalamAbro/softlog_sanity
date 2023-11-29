import { defineType } from 'sanity';

const StaticRating = defineType({
  name: 'StaticRating',
  type: 'object',
  title: 'Static Rating',
  fields: [
    {
      name: 'compressed',
      type: 'boolean',
      title: 'Compressed',
      description: 'Boolean indicating whether the static rating is compressed',
    },
    {
      name: 'number',
      type: 'number',
      title: 'Number',
      description: 'Number representing the static rating',
    },
  ],
});

export default StaticRating;
