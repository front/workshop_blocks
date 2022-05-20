import metadata from './block.json';
import Edit from './edit';
import Save from './save';
import deprecated from './deprecated';
import variations from './variations';
import { postAuthor } from '@wordpress/icons';

const Profile = {
  ...metadata,
  // Instead of Dashicons, we can use SVG or @wordpress/icons package.
  // icon: postAuthor, // Check import above
  edit: Edit,
  save: Save,
  deprecated,
  variations,
}

export default Profile;