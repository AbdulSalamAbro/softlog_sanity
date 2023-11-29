import { defineType } from 'sanity';

const PartnerLink = defineType({
  name: 'PartnerLink',
  type: 'document',
  title: 'Partner Link',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the partner link',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'partnerLinkUrl',
      type: 'url',
      title: 'Partner Link',
      description: 'URL of the partner link',
      validation: (Rule) => Rule.required(),
    },
  ],
});

export default PartnerLink;
