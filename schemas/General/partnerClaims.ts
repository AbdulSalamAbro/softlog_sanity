// partnerClaims.js
import {ComponentIcon} from '@sanity/icons'


export default {
    name: 'partnerClaims',
    title: 'Partner Claims',
    type: 'document',
    icon: ComponentIcon,
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'email',
      },
      {
        name: 'claimed',
        title: 'Claimed',
        type: 'boolean',
        description: 'Agreed that this account is verified to make changes',
      },
    ],
  };
  