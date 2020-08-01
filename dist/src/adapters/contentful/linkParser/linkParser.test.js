"use strict";

var _linkParser = _interopRequireDefault(require("./linkParser"));

var _linkParser2 = _interopRequireDefault(require("./linkParser.mock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseData = {
  sameWindowActionText: 'Open in the same window',
  newWindowActionText: 'Open in a new window',
  modalActionText: 'Open in a modal',
  downloadActionText: 'Download',
  manualEntryTypeText: 'Manual text entry',
  contentRefTypeText: 'Content reference',
  assetRefTypeText: 'Asset reference',
  contentTypeId: 'testPage',
  urlMap: {
    testPage: {
      url: '/test/[key]',
      key: 'slug'
    }
  }
};
describe('linkParser', function () {
  describe('destination type: manualUrl', function () {
    test('action: open in the same window', function () {
      var parsed = (0, _linkParser["default"])(_objectSpread({}, baseData, {
        fields: _objectSpread({}, _linkParser2["default"], {
          destinationType: 'Manual text entry',
          action: 'Open in the same window'
        })
      }));
      expect(parsed.href).toBe(_linkParser2["default"].manualUrl);
      expect(parsed.as).toBe(null);
      expect(parsed.linkText).toBe(_linkParser2["default"].linkText);
      expect(parsed.target).toBe(null);
      expect(parsed.isModal).toBe(false);
      expect(parsed.download).toBe(false);
    });
    test('action: open in a new window', function () {
      var parsed = (0, _linkParser["default"])(_objectSpread({}, baseData, {
        fields: _objectSpread({}, _linkParser2["default"], {
          destinationType: 'Manual text entry',
          action: 'Open in a new window'
        })
      }));
      expect(parsed.href).toBe(_linkParser2["default"].manualUrl);
      expect(parsed.as).toBe(null);
      expect(parsed.linkText).toBe(_linkParser2["default"].linkText);
      expect(parsed.target).toBe('_blank');
      expect(parsed.isModal).toBe(false);
      expect(parsed.download).toBe(false);
    });
    test('action: open in a modal', function () {
      var parsed = (0, _linkParser["default"])(_objectSpread({}, baseData, {
        fields: _objectSpread({}, _linkParser2["default"], {
          destinationType: 'Manual text entry',
          action: 'Open in a modal'
        })
      }));
      expect(parsed.href).toBe(_linkParser2["default"].manualUrl);
      expect(parsed.as).toBe(null);
      expect(parsed.linkText).toBe(_linkParser2["default"].linkText);
      expect(parsed.target).toBe(null);
      expect(parsed.isModal).toBe(true);
      expect(parsed.download).toBe(false);
    });
    test('action: Download', function () {
      var parsed = (0, _linkParser["default"])(_objectSpread({}, baseData, {
        fields: _objectSpread({}, _linkParser2["default"], {
          destinationType: 'Manual text entry',
          action: 'Download'
        })
      }));
      expect(parsed.href).toBe(_linkParser2["default"].manualUrl);
      expect(parsed.as).toBe(null);
      expect(parsed.linkText).toBe(_linkParser2["default"].linkText);
      expect(parsed.target).toBe(null);
      expect(parsed.isModal).toBe(false);
      expect(parsed.download).toBe(true);
    });
  });
  describe('destination type: Content reference', function () {
    test('action: open in the same window', function () {
      var parsed = (0, _linkParser["default"])(_objectSpread({}, baseData, {
        fields: _objectSpread({}, _linkParser2["default"], {
          destinationType: 'Content reference',
          action: 'Open in the same window'
        })
      }));
      expect(parsed.href).toBe('/test/[slug]');
      expect(parsed.as).toBe("/test/".concat(_linkParser2["default"].contentReference.fields.slug));
      expect(parsed.linkText).toBe(_linkParser2["default"].linkText);
      expect(parsed.target).toBe(null);
      expect(parsed.isModal).toBe(false);
      expect(parsed.download).toBe(false);
    });
    test('action: open in a new window', function () {
      var parsed = (0, _linkParser["default"])(_objectSpread({}, baseData, {
        fields: _objectSpread({}, _linkParser2["default"], {
          destinationType: 'Content reference',
          action: 'Open in a new window'
        })
      }));
      expect(parsed.href).toBe('/test/[slug]');
      expect(parsed.as).toBe("/test/".concat(_linkParser2["default"].contentReference.fields.slug));
      expect(parsed.linkText).toBe(_linkParser2["default"].linkText);
      expect(parsed.target).toBe('_blank');
      expect(parsed.isModal).toBe(false);
      expect(parsed.download).toBe(false);
    });
    test('action: open in a modal', function () {
      var parsed = (0, _linkParser["default"])(_objectSpread({}, baseData, {
        fields: _objectSpread({}, _linkParser2["default"], {
          destinationType: 'Content reference',
          action: 'Open in a modal'
        })
      }));
      expect(parsed.href).toBe('/test/[slug]');
      expect(parsed.as).toBe("/test/".concat(_linkParser2["default"].contentReference.fields.slug));
      expect(parsed.linkText).toBe(_linkParser2["default"].linkText);
      expect(parsed.target).toBe(null);
      expect(parsed.isModal).toBe(true);
      expect(parsed.download).toBe(false);
    });
    test('action: Download', function () {
      var parsed = (0, _linkParser["default"])(_objectSpread({}, baseData, {
        fields: _objectSpread({}, _linkParser2["default"], {
          destinationType: 'Content reference',
          action: 'Download'
        })
      }));
      expect(parsed.href).toBe('/test/[slug]');
      expect(parsed.as).toBe("/test/".concat(_linkParser2["default"].contentReference.fields.slug));
      expect(parsed.linkText).toBe(_linkParser2["default"].linkText);
      expect(parsed.target).toBe(null);
      expect(parsed.isModal).toBe(false);
      expect(parsed.download).toBe(true);
    });
  });
  describe('destination type: Asset reference', function () {
    test('action: open in the same window', function () {
      var parsed = (0, _linkParser["default"])(_objectSpread({}, baseData, {
        fields: _objectSpread({}, _linkParser2["default"], {
          destinationType: 'Asset reference',
          action: 'Open in the same window'
        })
      }));
      expect(parsed.href).toBe(_linkParser2["default"].assetReference.fields.file.url);
      expect(parsed.as).toBe(null);
      expect(parsed.linkText).toBe(_linkParser2["default"].linkText);
      expect(parsed.target).toBe(null);
      expect(parsed.isModal).toBe(false);
      expect(parsed.download).toBe(false);
    });
    test('action: open in a new window', function () {
      var parsed = (0, _linkParser["default"])(_objectSpread({}, baseData, {
        fields: _objectSpread({}, _linkParser2["default"], {
          destinationType: 'Asset reference',
          action: 'Open in a new window'
        })
      }));
      expect(parsed.href).toBe(_linkParser2["default"].assetReference.fields.file.url);
      expect(parsed.as).toBe(null);
      expect(parsed.linkText).toBe(_linkParser2["default"].linkText);
      expect(parsed.target).toBe('_blank');
      expect(parsed.isModal).toBe(false);
      expect(parsed.download).toBe(false);
    });
    test('action: open in a modal', function () {
      var parsed = (0, _linkParser["default"])(_objectSpread({}, baseData, {
        fields: _objectSpread({}, _linkParser2["default"], {
          destinationType: 'Asset reference',
          action: 'Open in a modal'
        })
      }));
      expect(parsed.href).toBe(_linkParser2["default"].assetReference.fields.file.url);
      expect(parsed.as).toBe(null);
      expect(parsed.linkText).toBe(_linkParser2["default"].linkText);
      expect(parsed.target).toBe(null);
      expect(parsed.isModal).toBe(true);
      expect(parsed.download).toBe(false);
    });
    test('action: Download', function () {
      var parsed = (0, _linkParser["default"])(_objectSpread({}, baseData, {
        fields: _objectSpread({}, _linkParser2["default"], {
          destinationType: 'Asset reference',
          action: 'Download'
        })
      }));
      expect(parsed.href).toBe(_linkParser2["default"].assetReference.fields.file.url);
      expect(parsed.as).toBe(null);
      expect(parsed.linkText).toBe(_linkParser2["default"].linkText);
      expect(parsed.target).toBe(null);
      expect(parsed.isModal).toBe(false);
      expect(parsed.download).toBe(true);
    });
  });
});

//# sourceMappingURL=linkParser.test.js.map