import { defineType } from 'sanity'

export default defineType ({
    type: 'document',
    name: 'productPage',
    title: 'Product page',
    fields: [
        {
            type: 'string',
            name: 'title',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'Product',
            title: 'Product link',
            type: 'reference',
            weak: false,
            to: [
                { type: 'productLinks'}
            ]
        },
        {
            name: 'Category',
            title: 'Product category',
            type: 'reference',
            weak: false,
            to: [
                { type: 'productCategory'}
            ]
        },
    ]
})