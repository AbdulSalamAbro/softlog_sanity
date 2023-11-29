import { defineType } from 'sanity';
import {ComponentIcon} from '@sanity/icons'

const Header = defineType({
  name: 'Header',
  type: 'document',
  title: 'Header',
  icon: ComponentIcon,
  
  fields: [
    {
      name: 'logo',
      type: 'reference',
      to: [{ type: 'logo' }],
      title: 'Logo',
      description: 'Reference to the logo',
    },
    {
      name: 'searchField',
      type: 'reference',
      to: [{ type: 'SearchField' }], 
      title: 'Search Field',
      description: 'Reference to the SearchField',
    },
    {
      name: 'menuAbove1024',
      type: 'array',
      title: 'Menu >1024',
      of: [
        { type: 'ButtonLink' }, 
        { type: 'button' }, 
      ],
    },
    {
      name: 'menuBelow1024',
      type: 'reference',
      title: 'Menu <1024',
      to: [
        { type: 'SearchField' }, 
        { type: 'ButtonLink' }, 
      ],
    },
    {
      name: 'DrawerModal',
      type: 'reference',
      to: [{ type: 'DrawerModal' }], 
      title: 'Drawer Modal',
      description: 'Reference to the DrawerModal',
    },
  ],
});

export default Header;
