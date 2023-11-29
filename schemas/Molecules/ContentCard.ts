import { defineType } from 'sanity';

const ContentCard = defineType({
  name: 'ContentCard',
  type: 'document',
  title: 'Content Card',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the content card',
    },
    {
      name: 'bodytext',
      type: 'text',
      title: 'Body Text',
      description: 'Text content for the content card',
    },
  ],
});

export default ContentCard;
