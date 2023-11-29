import { defineType } from 'sanity';
import {ComponentIcon} from '@sanity/icons'

const ReviewCounter = defineType({
  name: 'ReviewCounter',
  type: 'document',
  title: 'Review Counter',
  icon: ComponentIcon,

  fields: [
    {
      name: 'totalReviews',
      type: 'number',
      title: 'Total Reviews',
      description: 'Total number of reviews',
    },
    {
      name: 'averageReview',
      type: 'number',
      title: 'Average Review',
      description: 'Average review rating',
    },
   
    {
      name: 'staticRating',
      type: 'StaticRating',
      title: 'Static Rating',
    
    },
    {
      name: 'button',
      type: 'reference',
      to: [{ type: 'button' }], // Assuming you have a Button schema
      title: 'Button',
      description: 'Reference to the Button',
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

export default ReviewCounter;
