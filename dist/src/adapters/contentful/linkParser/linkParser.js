"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getUrl = function getUrl(mapping, slug) {
  return {
    href: mapping.url.replace('[key]', "[".concat(mapping.key, "]")),
    as: mapping.url.replace('[key]', "".concat(slug))
  };
};

var _default = function _default(_ref) {
  var newWindowActionText = _ref.newWindowActionText,
      modalActionText = _ref.modalActionText,
      downloadActionText = _ref.downloadActionText,
      manualEntryTypeText = _ref.manualEntryTypeText,
      contentRefTypeText = _ref.contentRefTypeText,
      assetRefTypeText = _ref.assetRefTypeText,
      fields = _ref.fields,
      urlMap = _ref.urlMap;
  var action = fields.action,
      destinationType = fields.destinationType,
      manualUrl = fields.manualUrl,
      contentReference = fields.contentReference,
      assetReference = fields.assetReference;
  var isModal = action === modalActionText;
  var download = action === downloadActionText;
  var target = action === newWindowActionText ? '_blank' : null;
  var href = null;
  var as = null;

  switch (destinationType) {
    case manualEntryTypeText:
      if (!manualUrl) {
        throw Error("DestinationType is ".concat(manualEntryTypeText, ", but no URL has been entered"));
      }

      href = manualUrl;
      break;

    case contentRefTypeText:
      {
        if (!contentReference) {
          throw Error("DestinationType is ".concat(contentRefTypeText, ", but no content reference is selected"));
        }

        var referenceContentTypeId = contentReference.sys.contentType.sys.id,
            slug = contentReference.fields.slug;
        if (!_lodash["default"].has(urlMap, referenceContentTypeId)) throw Error("urlMap does not contain entry for ".concat(contentTypeId));

        var _getUrl = getUrl(urlMap[referenceContentTypeId], slug);

        href = _getUrl.href;
        as = _getUrl.as;
        break;
      }

    case assetRefTypeText:
      if (!assetReference) {
        throw Error("DestinationType is ".concat(assetRefTypeText, ", but no asset is selected"));
      }

      href = assetReference.fields.file.url;
      break;

    default:
      break;
  }

  return _objectSpread({}, fields, {
    href: href,
    as: as,
    target: target,
    isModal: isModal,
    download: download
  });
};

exports["default"] = _default;

//# sourceMappingURL=linkParser.js.map