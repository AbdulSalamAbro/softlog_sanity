import { defineType } from 'sanity';


const DrawerModal = defineType({
  name: 'DrawerModal',
  type: 'document',
  title: 'Drawer Modal',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the drawer modal',
    },
    {
      name: 'logo',
      type: 'reference',
      to: [{ type: 'logo' }], 
      title: 'Logo',
      description: 'Reference to the logo',
    },
    {
      name: 'buttonLink',
      type: 'reference',
      to: [{ type: 'ButtonLink' }], 
      title: 'Button Link',
      description: 'Reference to the ButtonLink',
    },
    {
        name: 'children',
        title: 'Children',
        type: 'array',
        of: [{ type: 'block' }], 
      },
    {
      name: 'isOpen',
      type: 'boolean',
      title: 'Is Open',
      description: 'Indicates whether the drawer modal is open',
    },
    {
      name: 'showLogo',
      type: 'boolean',
      title: 'Show Logo',
      description: 'Indicates whether to show the logo in the drawer modal',
    },
    {
      name: 'headerClassName',
      type: 'string',
      title: 'Header Class Name',
      description: 'Custom CSS class name for the header',
    },
    {
      name: 'closeButtonClassName',
      type: 'string',
      title: 'Close Button Class Name',
      description: 'Custom CSS class name for the close button',
    },
  ],
});

export default DrawerModal;
