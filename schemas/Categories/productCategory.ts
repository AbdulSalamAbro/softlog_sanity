import { defineType } from 'sanity'

export default defineType ({
    name: 'productCategory',
    title: 'Product category',
    type: 'document',
    fields: [
        {
            type: 'string',
            name: 'title',
        },
        {
            title: 'Content', 
            name: 'content',
            type: 'array', 
            of: [{type: 'block'}]
          }
    ]
})