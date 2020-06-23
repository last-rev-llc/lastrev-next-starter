import _ from 'lodash';
import dynamic from 'next/dynamic';

_.mixin({ pascalCase: _.flow(_.camelCase, _.upperFirst) });

// This map is used when the content type converted to PascalCase does not exactly match the component name
const overrides = {
  settingsGlobal: 'Layout'
};

const lookupComponentByContentType = (contentType) => {
  const componentName = overrides.hasOwnProperty(contentType) ? overrides[contentType] : _.pascalCase(contentType);
  return dynamic(() => {
    try {
      return import(`../components/${componentName}`);
    } catch (err) {
      throw Error(`Unable to find component ${componentName} for content type ${contentType} in src/components/`);
    }
  });
};

export default lookupComponentByContentType;
