"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ElementLinkPropTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _link = _interopRequireDefault(require("next/link"));

var _lodash = _interopRequireDefault(require("lodash"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/jsx-max-props-per-line */

/* eslint-disable jsx-a11y/anchor-is-valid */
var ElementLinkPropTypes = {
  className: _propTypes["default"].string,
  href: _propTypes["default"].string.isRequired,
  as: _propTypes["default"].string,
  linkText: _propTypes["default"].string.isRequired,
  icon: _propTypes["default"].string,
  target: _propTypes["default"].string,
  isModal: _propTypes["default"].bool.isRequired,
  download: _propTypes["default"].bool.isRequired,
  trackingId: _propTypes["default"].string,
  style: _propTypes["default"].string
};
exports.ElementLinkPropTypes = ElementLinkPropTypes;
var NextLinkPropTypes = {
  href: _propTypes["default"].string.isRequired,
  as: _propTypes["default"].string,
  className: _propTypes["default"].string,
  linkText: _propTypes["default"].string.isRequired,
  trackingId: _propTypes["default"].string
};
var StandardLinkPropTypes = {
  href: _propTypes["default"].string.isRequired,
  target: _propTypes["default"].string,
  className: _propTypes["default"].string,
  linkText: _propTypes["default"].string.isRequired,
  isModal: _propTypes["default"].bool.isRequired,
  download: _propTypes["default"].bool.isRequired,
  trackingId: _propTypes["default"].string
};

var StandardLink = function StandardLink(_ref) {
  var target = _ref.target,
      href = _ref.href,
      className = _ref.className,
      linkText = _ref.linkText,
      isModal = _ref.isModal,
      download = _ref.download,
      trackingId = _ref.trackingId;
  var onClick = null;

  if (isModal) {
    onClick = function onClick() {// TODO: handle opening modal
    };
  }

  return /*#__PURE__*/_react["default"].createElement("a", {
    "data-trackingid": trackingId,
    onClick: onClick,
    className: className,
    href: href,
    target: target,
    rel: "noopener noreferrer",
    "data-testid": "ElementLink",
    download: download
  }, linkText);
};

StandardLink.propTypes = StandardLinkPropTypes;
StandardLink.defaultProps = {
  className: null,
  target: null,
  trackingId: null
};

var NextLink = function NextLink(_ref2) {
  var href = _ref2.href,
      as = _ref2.as,
      className = _ref2.className,
      linkText = _ref2.linkText,
      trackingId = _ref2.trackingId;
  return /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: href,
    as: as
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: className,
    "data-testid": "ElementLink",
    "data-trackingid": trackingId
  }, linkText));
};

NextLink.propTypes = NextLinkPropTypes;
NextLink.defaultProps = {
  className: null,
  as: null,
  trackingId: null
};

var getFullClassName = function getFullClassName(_ref3) {
  var style = _ref3.style,
      className = _ref3.className,
      icon = _ref3.icon;
  if (!style && !className && !icon) return null;
  return "".concat(style ? "link_".concat(style) : '', " ").concat(className || '', " ").concat(icon ? "icon_".concat(_lodash["default"].snakeCase(icon)) : '');
};

function ElementLink(_ref4) {
  var className = _ref4.className,
      href = _ref4.href,
      as = _ref4.as,
      target = _ref4.target,
      linkText = _ref4.linkText,
      icon = _ref4.icon,
      isModal = _ref4.isModal,
      download = _ref4.download,
      trackingId = _ref4.trackingId,
      style = _ref4.style;
  var fullClassName = getFullClassName({
    style: style,
    className: className,
    icon: icon
  }); // TODO: is this enough of a check? Someone could pass in
  // my.website.com/something, and this should be handled

  var isInternal = href.startsWith('/');
  var isTargetSelf = !target || target === '_self'; // if the window should change URl without refreshing the page,
  // use Next/Link

  var useNextLink = isInternal && !download && !isModal && isTargetSelf;

  if (useNextLink) {
    return /*#__PURE__*/_react["default"].createElement(NextLink, {
      href: href,
      as: as,
      className: fullClassName,
      linkText: linkText,
      trackingId: trackingId
    });
  }

  return /*#__PURE__*/_react["default"].createElement(StandardLink, {
    target: target,
    href: href,
    className: fullClassName,
    linkText: linkText,
    isModal: isModal,
    download: download,
    trackingId: trackingId
  });
}

ElementLink.propTypes = ElementLinkPropTypes;
ElementLink.defaultProps = {
  className: null,
  as: null,
  target: null,
  icon: null,
  trackingId: null,
  style: null
};
var _default = ElementLink;
exports["default"] = _default;

//# sourceMappingURL=ElementLink.js.map