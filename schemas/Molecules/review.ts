import { defineType } from 'sanity';
import {ComponentIcon} from '@sanity/icons'

const Review = defineType({
  name: 'Review',
  type: 'document',
  title: 'Review',
  icon: ComponentIcon,
  fields: [
    {
      name: 'profile',
      type: 'object',
      title: 'Profile Section',
      fields: [
        {
          name: 'avatar',
          type: 'reference',
          to: [{ type: 'avatar' }], // Assuming you have an Avatar schema
          title: 'Avatar',
          description: 'Reference to the Avatar',
        },
        {
          name: 'name',
          type: 'string',
          title: 'Name',
          description: 'Name of the reviewer',
        },
        {
          name: 'identity',
          type: 'string',
          title: 'Identity',
          description: 'Identity of the reviewer',
        },
      ],
    },
    {
      name: 'staticRating',
      type: 'StaticRating',
      title: 'Static Rating',
    
    },
   
    {
      name: 'date',
      type: 'datetime',
      title: 'Date',
      description: 'Date of the review',
    },
    {
      name: 'qaArray',
      type: 'array',
      title: 'Question and Answers',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              type: 'string',
              title: 'Question',
              description: 'Question for the review',
            },
            {
              name: 'answer',
              type: 'string',
              title: 'Answer',
              description: 'Answer to the question',
            },
          ],
        },
      ],
    },

    {
      name: 'previewTitle',
      title: 'Preview Title',
      type: 'string',
      description: 'Custom title for document preview',
    },
  ],

  preview: {

    select: {
      customTitle: 'previewTitle',
    },
   
    prepare({customTitle}) {
      return {
        title: customTitle, //  custom name
        
      };
    },
  },
});

export default Review;
