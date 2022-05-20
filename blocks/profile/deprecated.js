import { blockEditor } from 'wp';
import metadata from './block.json';

const {
  useBlockProps,
  InnerBlocks,
} = blockEditor;

const deprecated = [
  {
    attributes: metadata.attributes,
    save: ({ attributes }) => {
      const { image_url, image_uuid, name, position } = attributes;
    
      return (
        <div {...useBlockProps.save() }>
          <img data-entity-type="file" data-entity-uuid={image_uuid} src={ image_url} />
          <div>
            <h2>{ name }</h2>
            <p>{ position }</p>
            <InnerBlocks.Content />
          </div>
        </div>
      );
    }
  }
]

export default deprecated;