import { defineType } from 'sanity'
import {ComponentIcon} from '@sanity/icons'


const subcategory = defineType({
   
    name: 'subcategory',
    type: 'document',
    title: 'Subcategory',
    icon: ComponentIcon,
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },

      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      
      {
        name: 'seoAndSocial',
        title: 'SEO and Social',
        type: 'seoAndSocial', // Reference to the SEO and Social object type
      },

      {
        name: 'parentCategory',
        type: 'reference',
        to: [{ type: 'category' }], // Reference to the category type
        title: 'Parent Category',
      },
    
    ],
})

export default subcategory
  