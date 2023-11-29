import { defineType } from 'sanity';

const ProductHeader = defineType({
  name: 'ProductHeader',
  type: 'document',
  title: 'Product Header',
  fields: [
    {
      name: 'avatar',
      type: 'reference',
      to: [{ type: 'avatar' }], 
      title: 'Avatar',
      description: 'Reference to the Avatar',
    },
    {
      name: 'staticRating',
      type: 'reference',
      to: [{ type: 'StaticRating' }], 
      title: 'Static Rating',
      description: 'Reference to the Static Rating',
    },
    {
      name: 'textLink',
      type: 'reference',
      to: [{ type: 'TextLink' }], 
      title: 'Text Link',
      description: 'Reference to the Text Link',
    },
    {
      name: 'headerLinksBigScreens',
      type: 'array',
      title: 'Header Links (Big Screens)',
      of: [
        { type: 'reference', to: [{ type: 'ButtonLink' }] }, 
      ],
    },
    {
      name: 'headerSiteLinkBigScreens',
      type: 'reference',
      to: [{ type: 'button' }], 
      title: 'Header Site Link (Big Screens)',
      description: 'Reference to the Button',
    },
    {
      name: 'headerLinksSmallScreens',
      type: 'array',
      title: 'Header Links (Small Screens)',
      of: [
        { type: 'reference', to: [{ type: 'ButtonLink' }] }, 
      ],
    },
    {
      name: 'headerSiteLinkSmallScreens',
      type: 'reference',
      to: [{ type: 'button' }], 
      title: 'Header Site Link (Small Screens)',
      description: 'Reference to the Button',
    },
  ],
});

export default ProductHeader;
