"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLink = exports.extractId = exports.extractContentTypeId = exports.isAsset = exports.isEntry = exports.isContentfulObject = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isContentfulObject = function isContentfulObject(obj) {
  return _typeof(obj) === 'object' && _lodash["default"].has(obj, 'sys') && _lodash["default"].has(obj, 'fields');
};

exports.isContentfulObject = isContentfulObject;

var isEntry = function isEntry(obj) {
  return isContentfulObject(obj) && _lodash["default"].has(obj, 'sys.type') && obj.sys.type === 'Entry';
};

exports.isEntry = isEntry;

var isAsset = function isAsset(obj) {
  return isContentfulObject(obj) && _lodash["default"].has(obj, 'sys.type') && obj.sys.type === 'Asset';
};

exports.isAsset = isAsset;

var extractContentTypeId = function extractContentTypeId(obj) {
  if (isEntry(obj) && _lodash["default"].has(obj, 'sys.contentType.sys.id')) return obj.sys.contentType.sys.id;
  return null;
};

exports.extractContentTypeId = extractContentTypeId;

var extractId = function extractId(obj) {
  if (isEntry(obj) && _lodash["default"].has(obj, 'sys.id')) return obj.sys.id;
  return null;
};

exports.extractId = extractId;

var isLink = function isLink(obj, contentTypeId) {
  return isEntry(obj) && contentTypeId === extractContentTypeId(obj);
};

exports.isLink = isLink;

//# sourceMappingURL=helpers.js.map