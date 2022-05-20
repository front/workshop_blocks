import { blockEditor } from 'wp';

const {
  useBlockProps,
  InnerBlocks,
} = blockEditor;

const Save = ({ attributes }) => {
  const { image_url, image_uuid, name, position } = attributes;

  return (
    <div { ...useBlockProps.save() }>
      <img data-entity-type="file" data-entity-uuid={image_uuid} src={ image_url} />
      <div>
        <h2>{ name }</h2>
        <p>{ position }</p>
        <div>
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}

export default Save;