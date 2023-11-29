import {defineType} from 'sanity'
import {ComponentIcon} from '@sanity/icons'


const category = defineType({
  title: 'Category',
  name: 'category',
  type: 'document',
  icon: ComponentIcon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },

    {
      name: 'subCategories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'subcategory' }] }],
      title: 'Sub Categories',
    }




  ],
})

export default category;