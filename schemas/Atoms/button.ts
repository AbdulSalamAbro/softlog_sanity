// schemas/button.js
import { defineType } from 'sanity';
import {ComponentIcon} from '@sanity/icons'

const Button = defineType({
  name: 'button',
  title: 'Button',
  type: 'document',
  icon: ComponentIcon,

  fields: [
    {
      name: 'Label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: ['Big', 'Medium'],
      },
    },
    {
      name: 'variants',
      title: 'Variants',
      type: 'string',
      options: {
        list: ['Primary', 'Secondary'],
      },
    },
    {
      name: 'disable',
      title: 'Disable',
      type: 'boolean',
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon',
      description: 'Choose an icon for the content point',
      options: {
        list: [
          { title: 'Arrow Right', value: 'arrow-right' },
          { title: 'Chart Bar', value: 'chart-bar' },
          { title: 'Menu Alt4', value: 'menu-alt4' },
          { title: 'Close', value: 'close' },
          { title: 'Plus', value: 'plus' },
          { title: 'Adjustments', value: 'adjustments' },
          { title: 'Heart', value: 'heart' },
          { title: 'Search', value: 'search' },
          { title: 'Play', value: 'play' },
          { title: 'Users', value: 'users' },
          { title: 'Edit', value: 'edit' },
          { title: 'Minus', value: 'minus' },
          { title: 'Shield Check', value: 'shield-check' },
          { title: 'Check Circle', value: 'check-circle' },
          { title: 'Eye', value: 'eye' },
          { title: 'Globe', value: 'globe' },
          { title: 'Exclamation Circle', value: 'exclamation-circle' },
          { title: 'Extrernal Link', value: 'external-link' },
          // Add more options as needed
        ],
      },
    },
    {
      name: 'iconPosition',
      title: 'Icon Position',
      type: 'string',
      options: {
        list: ['Left', 'Right'],
      },
    },
    {
      name: 'loading',
      title: 'Loading',
      type: 'boolean',
    },
    {
      name: 'fullWidth',
      title: 'Full Width',
      type: 'boolean',
    },
    {
      name: 'border',
      title: 'Border',
      type: 'boolean',
    },
   
    {
      name: 'fullWidthMobile',
      title: 'Full Width Mobile',
      type: 'boolean',
    },
    {
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
    },
    {
      name: 'href',
      title: 'Href',
      type: 'string',
    },
    {
      name: 'noFollow',
      title: 'No Follow',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'className',
      title: 'Class Name',
      type: 'string',
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
       
      };
    },
  },
});

export default Button;
