// seoAndSocial.js

export default {
    name: 'seoAndSocial',
    title: 'SEO and Social',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title for SEO and Social Sharing',
        type: 'string',
        description: 'Ideally between 15 and 70 characters',
        validation: (Rule) =>
          Rule.max(70).warning('Should ideally be between 15 and 70 characters'),
      },
      {
        name: 'metaDescription',
        title: 'Meta Description',
        type: 'text',
        description: 'Ideally between 70 and 160 characters',
        validation: (Rule) =>
          Rule.max(160).warning('Should ideally be between 70 and 160 characters'),
      },
      {
        name: 'keywords',
        title: 'Keywords',
        type: 'string',
        description: 'Separate with commas',
      },
      {
        name: 'synonyms',
        title: 'Synonyms',
        type: 'text',
        description: 'Similar words to inform the SEO review',
      },
    ],
  };
  