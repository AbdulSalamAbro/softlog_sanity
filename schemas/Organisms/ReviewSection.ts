import { defineType } from 'sanity';
import {ComponentIcon} from '@sanity/icons'

const ReviewSection = defineType({
  name: 'ReviewSection',
  type: 'document',
  title: 'Review Section',
  icon: ComponentIcon,

  fields: [
    {
      name: 'reviewCounter',
      type: 'reference',
      to: [{ type: 'ReviewCounter' }], 
      title: 'Review Counter',
      description: 'Reference to the Review Counter',
    },
    {
      name: 'reviews',
      type: 'array',
      title: 'Reviews',
      of: [{ type: 'reference', to: [{ type: 'Review' }] }], 
      description: 'Array of references to Reviews',
    },
    {
      name: 'button',
      type: 'reference',
      to: [{ type: 'button' }], 
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
         subtitle: 'Content section'
       };
     },
   },
});

export default ReviewSection;
