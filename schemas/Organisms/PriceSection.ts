import { defineType } from 'sanity';
import {ComponentIcon} from '@sanity/icons'

const PriceSection = defineType({
  name: 'PriceSection',
  type: 'document',
  title: 'Price Section',
  icon: ComponentIcon,

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the price section',
    },
    {
      name: 'priceCards',
      type: 'array',
      title: 'Price Cards',
      of: [{ type: 'reference', to: [{ type: 'PriceCard' }] }], // Assuming you have a PriceCard schema
      description: 'Array of references to Price Cards',
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

export default PriceSection;
