import { defineType } from 'sanity';

const ProductPage = defineType({
  name: 'ProductPage',
  type: 'document',
  title: 'Product Page',
  fields: [
    {
      name: 'banner',
      title: 'Banner',
      type: 'reference',
      to: [{ type: 'VideoBannerBoxed' }],
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'reference',
      to: [{ type: 'avatar' }],
    },
    {
      name: 'partnerName',
      title: 'Partner Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'partnerName',
        maxLength: 200, // Adjust as needed
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'partnerLinks',
      title: 'Partner Links',
      type: 'reference',
      to: [{ type: 'partnerLinks' }],
    },
    {
      name: 'seoAndSocial',
      title: 'SEO and Social',
      type: 'seoAndSocial', // Assume you have a schema named "seoAndSocial"
    },


    {
      name: 'productInformation',
      type: 'array',
      title: 'Product Information',
      of: [
        { type: 'reference', to: [{ type: 'ProductHeader' }, { type: 'IntroSection' }, 
        { type: 'CarouselSection' }, { type: 'TextSection' },  { type: 'ContentPointsSection'},
        { type: 'ContentCardSection' }, { type: 'PriceSection' }, { type: 'ReviewSection' },
        { type: 'banner' }, { type: 'RelatedProducts' }, { type: 'Footer' }
      ] },
      ],
    },

    {
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [
        { type: 'reference', to: [
        { type: 'ContentCardSection' }
      ] },
      ],
    },

    {
      name: 'pricing',
      type: 'array',
      title: 'Pricing',
      of: [
        { type: 'reference', to: [ { type: 'PriceSection' }
      ] },
      ],
    },

    {
      name: 'reviews',
      type: 'array',
      title: 'Reviews',
      of: [
        { type: 'reference', to: [ { type: 'ReviewSection' }
      ] },
      ],
    },


    {
      name: 'products',
      type: 'array',
      title: 'Products',
      of: [
        { type: 'reference', to: [{ type: 'banner' },
        { type: 'RelatedProducts' }
      ] },
      ],
    },
  ],
});







export default ProductPage;
