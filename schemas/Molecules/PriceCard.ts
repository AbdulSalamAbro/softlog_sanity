import { defineType } from 'sanity';
import {ComponentIcon} from '@sanity/icons'

const PriceCard = defineType({
  name: 'PriceCard',
  type: 'document',
  title: 'Price Card',
  icon: ComponentIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the price card',
    },
    {
      name: 'button',
      type: 'reference',
      to: [{ type: 'button' }], // Assuming you have a Button schema
      title: 'Button',
      description: 'Reference to the Button',
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price',
      description: 'Price of the service or product',
    },
    {
      name: 'priceOption',
      type: 'boolean',
      title: 'Price Option',
      description: 'Boolean indicating the availability of a price option',
    },
    {
      name: 'priceOptionText',
      type: 'string',
      title: 'Price Option Text',
      description: 'Text associated with the price option',
    },
    {
      name: 'body',
      type: 'boolean',
      title: 'Body',
      description: 'Boolean indicating the availability of a body section',
    },
    {
      name: 'bodyText',
      type: 'string',
      title: 'Body Text',
      description: 'Text for the body section',
    },
    {
      name: 'label',
      type: 'boolean',
      title: 'Label',
      description: 'Boolean indicating the availability of a label',
    },
    {
      name: 'labelText',
      type: 'string',
      title: 'Label Text',
      description: 'Text for the label',
    },
    {
      name: 'valuta',
      type: 'boolean',
      title: 'Valuta',
      description: 'Boolean indicating the availability of a currency symbol',
    },
    {
      name: 'valutaSymbol',
      type: 'string',
      title: 'Valuta Symbol',
      description: 'Symbol for the currency',
    },
  ],
});

export default PriceCard;
