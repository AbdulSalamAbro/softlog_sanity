import { defineType } from 'sanity';

const SearchField = defineType({
  name: 'SearchField',
  type: 'document',
  title: 'Search Field',
  fields: [
    {
      name: 'fieldText',
      type: 'string',
      title: 'Field Text',
      description: 'Text for the search list field',
    },
    {
      name: 'compressed',
      type: 'boolean',
      title: 'Compressed',
      description: 'Indicates whether the search list is compressed',
     
    },
    {
      name: 'big',
      type: 'boolean',
      title: 'Big',
      description: 'Indicates whether the search list is big',
    
    },
    {
      name: 'className',
      type: 'string',
      title: 'Class Name',
      description: 'Custom CSS class name for styling purposes',
    },
  ],

  initialValue: () => ({
    compressed: false,
    big: false
  })

});

export default SearchField;
