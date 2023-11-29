// partnerLinks.js
import {ComponentIcon} from '@sanity/icons'


export default {
    name: 'partnerLinks',
    title: 'Partner Links',
    type: 'document',
    icon: ComponentIcon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            
          },
      {
        name: 'partnerLink',
        title: 'Partner Link',
        type: 'string',
        
      },
    ],
  };
  