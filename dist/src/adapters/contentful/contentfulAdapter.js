"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _linkParser = _interopRequireDefault(require("./linkParser"));

var _assetParser = _interopRequireDefault(require("./assetParser"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Adapter = function Adapter(_ref) {
  var _ref$urlMap = _ref.urlMap,
      urlMap = _ref$urlMap === void 0 ? {} : _ref$urlMap,
      _ref$linkContentType = _ref.linkContentType,
      linkContentType = _ref$linkContentType === void 0 ? 'elementLink' : _ref$linkContentType,
      _ref$sameWindowAction = _ref.sameWindowActionText,
      sameWindowActionText = _ref$sameWindowAction === void 0 ? 'Open in the same window' : _ref$sameWindowAction,
      _ref$newWindowActionT = _ref.newWindowActionText,
      newWindowActionText = _ref$newWindowActionT === void 0 ? 'Open in a new window' : _ref$newWindowActionT,
      _ref$modalActionText = _ref.modalActionText,
      modalActionText = _ref$modalActionText === void 0 ? 'Open in a modal' : _ref$modalActionText,
      _ref$downloadActionTe = _ref.downloadActionText,
      downloadActionText = _ref$downloadActionTe === void 0 ? 'Download' : _ref$downloadActionTe,
      _ref$manualEntryTypeT = _ref.manualEntryTypeText,
      manualEntryTypeText = _ref$manualEntryTypeT === void 0 ? 'Manual text entry' : _ref$manualEntryTypeT,
      _ref$contentRefTypeTe = _ref.contentRefTypeText,
      contentRefTypeText = _ref$contentRefTypeTe === void 0 ? 'Content reference' : _ref$contentRefTypeTe,
      _ref$assetRefTypeText = _ref.assetRefTypeText,
      assetRefTypeText = _ref$assetRefTypeText === void 0 ? 'Asset reference' : _ref$assetRefTypeText;
  return function (data) {
    var traverse = function traverse(obj) {
      if (_lodash["default"].isArray(obj)) {
        return _lodash["default"].map(obj, traverse);
      }

      if ((0, _helpers.isLink)(obj, linkContentType)) {
        return (0, _linkParser["default"])({
          sameWindowActionText: sameWindowActionText,
          newWindowActionText: newWindowActionText,
          modalActionText: modalActionText,
          downloadActionText: downloadActionText,
          manualEntryTypeText: manualEntryTypeText,
          contentRefTypeText: contentRefTypeText,
          assetRefTypeText: assetRefTypeText,
          fields: obj.fields,
          urlMap: urlMap
        });
      }

      if ((0, _helpers.isEntry)(obj)) {
        var id = (0, _helpers.extractId)(obj);
        var contentTypeId = (0, _helpers.extractContentTypeId)(obj);

        var parsedFields = _lodash["default"].mapValues(obj.fields, traverse);

        return _objectSpread({
          id: id,
          contentTypeId: contentTypeId
        }, parsedFields);
      }

      if ((0, _helpers.isAsset)(obj)) {
        return (0, _assetParser["default"])(obj);
      }

      if (_lodash["default"].isObject(obj)) {
        return _lodash["default"].mapValues(obj.fields, traverse);
      } // most likely a simple value field


      return obj;
    };

    return traverse(data);
  };
};

var _default = Adapter;
exports["default"] = _default;

//# sourceMappingURL=contentfulAdapter.js.map