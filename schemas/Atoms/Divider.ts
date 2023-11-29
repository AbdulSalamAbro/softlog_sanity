import { defineType } from 'sanity';

const Divider = defineType({
  name: 'Divider',
  type: 'document',
  title: 'Divider',
  fields: [
    {
      name: 'containerEnabled',
      type: 'boolean',
      title: 'Container Enabled',
      description: 'Boolean indicating whether the divider is container-enabled',
    },
  ],
});

export default Divider;
