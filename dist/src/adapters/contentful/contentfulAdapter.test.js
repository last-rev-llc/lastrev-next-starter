"use strict";

var _contentfulAdapter = _interopRequireDefault(require("./contentfulAdapter"));

var _contentfulAdapter2 = _interopRequireDefault(require("./contentfulAdapter.mock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var urlMap = {
  pageGeneral: {
    url: '/[key]',
    key: 'slug'
  }
};
var transform = (0, _contentfulAdapter["default"])({
  urlMap: urlMap,
  linkContentType: 'uieCta',
  manualEntryTypeText: 'Manual URL',
  modalActionText: 'Open a modal',
  contentRefTypeText: 'ContentReference'
});
describe('Contentful Adapter', function () {
  it('converts the data correctly', function () {
    var out = transform(_contentfulAdapter2["default"]);
    expect(out).toMatchSnapshot();
  });
});

//# sourceMappingURL=contentfulAdapter.test.js.map