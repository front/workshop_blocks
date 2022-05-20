import { blocks } from 'wp';
import Profile from './profile';
import { starFilled } from '@wordpress/icons';

const { registerBlockType, registerBlockStyle, registerBlockVariation } = blocks;

const TheBlock = {
  name:  'workshop/the-block',
  title: 'The Block',

  edit: () => {
    return (
      <div>Edit block</div>
    );
  },

  save: () => {
    return (
      <div>Render block</div>
    )
  }
}

// registerBlockType('workshop/the-block', TheBlock);
registerBlockType('workshop/profile', Profile);

// Usually defined at theme level
registerBlockStyle('workshop/profile', {
  name: 'image-right',
  label: 'Image right'
});

// registerBlockVariation('workshop/profile', {
//   name: 'pet',
//   title: 'Pet Profile',
//   icon: starFilled,
//   attributes: { className: 'is-style-pet' },
// });
