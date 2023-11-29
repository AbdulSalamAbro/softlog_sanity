import { defineType } from 'sanity';

const Carousel = defineType({
  name: 'Carousel',
  type: 'document',
  title: 'Carousel',
  fields: [
    {
      name: 'baseUrl',
      type: 'string',
      title: 'Base URL',
      description: 'Base URL for the carousel',
    },
  ],
});

export default Carousel;
