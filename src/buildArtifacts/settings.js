import _ from 'lodash';

const localeToSettingsMap = {
  "en-US": {
    isDefault: true,
    settings: {}
  }
};

function getSettings(locale) {
  const obj = _.get(localeToSettingsMap, locale) || _.find(localeToSettingsMap, 'isDefault');
  return _.get(obj, 'settings');
}

export default getSettings;