import { blockEditor, components } from 'wp';

const { 
  useBlockProps,
  BlockControls,
  InnerBlocks,
  InspectorControls,
  RichText,
  MediaPlaceholder,
} = blockEditor;

const {
  PanelBody,
  PanelRow,
  TextControl,
  Toolbar,
  Button,
} = components;

const ALLOWED_BLOCKS = ['core/heading', 'core/paragraph', 'core/quote']

const Edit = ({ attributes, setAttributes }) => {
  const { image_url, image_id, image_uuid, name, position } = attributes;

  function onSelectMedia(media) {
    setAttributes({
      image_id: media.id,
      image_uuid: media.data.entity_uuid,
      image_url: media.url,
    });
  }

  function clearImage() {
    setAttributes({
      image_url: '',
      image_uuid: '',
      image_id: null,
    });
  }

  return (
    <div {...useBlockProps()}>
      <BlockControls>
        <Toolbar>
          <Button
            label="Clear image"
            icon="no-alt"
            onClick={() => clearImage() }
          />
        </Toolbar>
      </BlockControls>
      <InspectorControls>
        <PanelBody title="Block settings" initialOpen={ true }>
          <PanelRow>
            <TextControl
              label = "Image URL"
              value = { image_url }
              onChange = { value => setAttributes({ image_url: value }) }
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      {!image_url && (
        <MediaPlaceholder
          onSelect = { onSelectMedia }
          allowedTypes = { ['image'] }
          multiple = { false }
          labels = { { title: 'Profile picture' } }
        >
          Add an awesome picture
        </MediaPlaceholder>
      )}
      {image_url && (
        <img data-entity-type="file" data-entity-uuid={image_uuid} src={ image_url } />
      )}
      <div>
        <RichText
          tagName = "h2"
          placeholder = "Name"
          value = { name }
          onChange = {value => setAttributes({ name: value }) }
        />
        <RichText
          tagName = "p"
          placeholder = "Position"
          value = { position }
          onChange = {value => setAttributes({ position: value }) }
        />
        <div>
          <InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
        </div>
      </div>
    </div>
  );
}

export default Edit;