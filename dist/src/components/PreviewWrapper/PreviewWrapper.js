"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PreviewWrapperPropTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PreviewWrapperPropTypes = {
  componentLookup: _propTypes["default"].func.isRequired,
  contentTypeId: _propTypes["default"].string.isRequired
};
exports.PreviewWrapperPropTypes = PreviewWrapperPropTypes;

function PreviewWrapper(_ref) {
  var componentLookup = _ref.componentLookup,
      contentTypeId = _ref.contentTypeId,
      fields = _objectWithoutProperties(_ref, ["componentLookup", "contentTypeId"]);

  var Component = componentLookup(contentTypeId);
  return /*#__PURE__*/_react["default"].createElement(Component, fields);
}

PreviewWrapper.propTypes = PreviewWrapperPropTypes;
var _default = PreviewWrapper;
exports["default"] = _default;

//# sourceMappingURL=PreviewWrapper.js.map