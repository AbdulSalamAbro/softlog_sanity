import { defineType } from 'sanity';

const PartnerCard = defineType({
  name: 'PartnerCard',
  type: 'document',
  title: 'Partner Card',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the partner card',
    },
    {
      name: 'labelText',
      type: 'string',
      title: 'Label Text',
      description: 'Text for the label on the partner card',
    },
    {
      name: 'imageURL',
      type: 'string',
      title: 'Image URL',
      description: 'URL for the partner card image',
    },
    {
      name: 'reviewNumber',
      type: 'string',
      title: 'Review Number',
      description: 'Number of reviews for the partner (optional)',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt',
      description: 'Alt text for the partner card image',
    },
  ],
});

export default PartnerCard;
