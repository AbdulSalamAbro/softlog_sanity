import { defineType } from 'sanity'

export default defineType ({

    name: 'productLinks',
    title: 'Product link',
    type: 'document',

    fields: [
      
              {
                type: 'string',
                name: 'title',
            },

            {
              name: 'Product',
              type: 'reference',
              weak: false,
              to: [
                  { type: 'productPage'}
              ]
          },

          {
            name: 'ProductLink',
            title: 'Product link',
            type: 'string',
          },
    ]
})