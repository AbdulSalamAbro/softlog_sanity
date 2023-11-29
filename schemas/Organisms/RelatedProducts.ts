import { defineType } from 'sanity';
import {ComponentIcon} from '@sanity/icons'

const RelatedProducts = defineType({
  name: 'RelatedProducts',
  type: 'document',
  title: 'Related Products',
  icon: ComponentIcon,
  
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the related products section',
    },
    {
      name: 'relatedProductsNo',
      type: 'number',
      title: 'Number of related products',
    },
    // {
    //   name: 'partnerCards',
    //   type: 'array',
    //   title: 'Partner Cards',
    //   of: [{ type: 'reference', to: [{ type: 'PartnerCard' }] }], // Assuming you have a PartnerCard schema
    //   description: 'Array of references to Partner Cards',
    // },
  ],
});

export default RelatedProducts;
