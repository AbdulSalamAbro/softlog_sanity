// schemas/logo.js
import { defineType } from 'sanity';
import React from 'react';

const Logo = defineType({
  name: 'logo',
  title: 'Logo',
  type: 'document',
  fields: [
    {
      name: 'width',
      title: 'Width',
      type: 'number',
    },
    {
      name: 'height',
      title: 'Height',
      type: 'number',
    },
    {
      name: 'compressed',
      title: 'Compressed',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      width: 'width',
      height: 'height',
      compressed: 'compressed',
    },
    prepare: ({ width, height, compressed }) => ({
      title: `Logo: Width: ${width} | Height: ${height} | Compressed: ${compressed ? 'Yes' : 'No'}`,
    }),
  },
});

export default Logo;
