// sanity-schema.js

export default {
    name: 'Footer',
    title: 'Footer',
    type: 'document',
    fields: [
      {
        name: 'sections',
        title: 'Footer Sections',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Section Title',
                type: 'string',
              },
              {
                name: 'links',
                title: 'Section Links',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                        name: 'label',
                        title: 'Link Label',
                        type: 'string',
                      },
                      {
                        name: 'url',
                        title: 'Link URL',
                        type: 'url',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'copyright',
        title: 'Copyright Text',
        type: 'string',
      },
    ],
  };
  