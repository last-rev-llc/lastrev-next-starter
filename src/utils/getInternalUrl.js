import { readFileSync } from 'fs';
import appRoot from 'app-root-path';

let mappings = {};

try {
  mappings = JSON.parse(readFileSync(`${appRoot}/config/urls.json`, 'UTF-8'));
} catch (err) {
  console.log('Unable to load mappling from cofig/urls.json', err);
}

export default ({
  fields: { slug },
  sys: {
    contentType: {
      sys: { id }
    }
  }
}) => {
  if (mappings[id]) {
    return {
      href: mappings[id],
      as: mappings[id].replace('[slug]', slug)
    };
  }
  return {};
};
