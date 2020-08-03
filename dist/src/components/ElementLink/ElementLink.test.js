"use strict";

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _react2 = require("@testing-library/react");

var _ElementLink = _interopRequireDefault(require("./ElementLink"));

var _ElementLink2 = require("./ElementLink.mock");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

beforeEach(function () {
  jest.spyOn(console, 'error');
  global.console.error.mockImplementation(function () {});
});
afterEach(function () {
  global.console.error.mockRestore();
  (0, _react2.cleanup)();
});
describe('<ElementLink />', function () {
  describe('<ElementLink /> with an internal URL', function () {
    test('has expected attributes', function () {
      var testClassName = 'testClass';
      var expectedClassNames = ["link_".concat(_ElementLink2.internalUrl.style), testClassName, "icon_".concat(_lodash["default"].snakeCase(_ElementLink2.internalUrl.icon))];

      var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_ElementLink["default"], {
        className: testClassName,
        href: _ElementLink2.internalUrl.href,
        as: _ElementLink2.internalUrl.as,
        linkText: _ElementLink2.internalUrl.linkText,
        target: _ElementLink2.internalUrl.target,
        icon: _ElementLink2.internalUrl.icon,
        style: _ElementLink2.internalUrl.style,
        isModal: _ElementLink2.internalUrl.isModal,
        download: _ElementLink2.internalUrl.download,
        trackingId: _ElementLink2.internalUrl.trackingId
      })),
          getByTestId = _render.getByTestId;

      expect(getByTestId('ElementLink').textContent).toBe(_ElementLink2.internalUrl.linkText);
      expect(getByTestId('ElementLink').getAttribute('class').trim().split(/\s+/)).toEqual(expectedClassNames);
      expect(getByTestId('ElementLink').getAttribute('target')).toBe(_ElementLink2.internalUrl.target);
      expect(getByTestId('ElementLink').getAttribute('data-trackingid')).toBe(_ElementLink2.internalUrl.trackingId);
      expect(getByTestId('ElementLink').hasAttribute('download')).toBe(_ElementLink2.internalUrl.download);
    });
    test('href /[slug] sets the href attribute correctly', function () {
      var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_ElementLink["default"], {
        href: _ElementLink2.internalUrl.href,
        as: _ElementLink2.internalUrl.as,
        linkText: _ElementLink2.internalUrl.linkText,
        icon: _ElementLink2.internalUrl.icon,
        isModal: _ElementLink2.internalUrl.isModal,
        download: _ElementLink2.internalUrl.download,
        trackingId: _ElementLink2.internalUrl.trackingId
      })),
          getByTestId = _render2.getByTestId;

      expect(getByTestId('ElementLink').getAttribute('href')).toBe(_ElementLink2.internalUrl.as);
    });
  });
  describe('<ElementLink /> External URL', function () {
    test('has expected attributes', function () {
      var testClassName = 'testClass';
      var expectedClassNames = ["link_".concat(_ElementLink2.externalUrl.style), testClassName];

      var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_ElementLink["default"], {
        className: testClassName,
        href: _ElementLink2.externalUrl.href,
        as: _ElementLink2.externalUrl.as,
        linkText: _ElementLink2.externalUrl.linkText,
        target: _ElementLink2.externalUrl.target,
        icon: _ElementLink2.externalUrl.icon,
        style: _ElementLink2.externalUrl.style,
        isModal: _ElementLink2.externalUrl.isModal,
        download: _ElementLink2.externalUrl.download,
        trackingId: _ElementLink2.externalUrl.trackingId
      })),
          getByTestId = _render3.getByTestId;

      expect(getByTestId('ElementLink').textContent).toBe(_ElementLink2.externalUrl.linkText);
      expect(getByTestId('ElementLink').getAttribute('class').trim().split(/\s+/)).toEqual(expectedClassNames);
      expect(getByTestId('ElementLink').getAttribute('href')).toBe(_ElementLink2.externalUrl.href);
      expect(getByTestId('ElementLink').getAttribute('target')).toBe(_ElementLink2.externalUrl.target);
      expect(getByTestId('ElementLink').getAttribute('data-trackingid')).toBe(_ElementLink2.externalUrl.trackingId);
      expect(getByTestId('ElementLink').hasAttribute('download')).toBe(_ElementLink2.externalUrl.download);
    });
  });
  describe('<ElementLink /> Anchor Link', function () {
    test('has expected attributes', function () {
      var testClassName = 'testClass';
      var expectedClassNames = ["link_".concat(_ElementLink2.anchorTag.style), testClassName, "icon_".concat(_lodash["default"].snakeCase(_ElementLink2.anchorTag.icon))];

      var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_ElementLink["default"], {
        className: testClassName,
        href: _ElementLink2.anchorTag.href,
        as: _ElementLink2.anchorTag.as,
        linkText: _ElementLink2.anchorTag.linkText,
        target: _ElementLink2.anchorTag.target,
        icon: _ElementLink2.anchorTag.icon,
        style: _ElementLink2.anchorTag.style,
        isModal: _ElementLink2.anchorTag.isModal,
        download: _ElementLink2.anchorTag.download,
        trackingId: _ElementLink2.anchorTag.trackingId
      })),
          getByTestId = _render4.getByTestId;

      expect(getByTestId('ElementLink').textContent).toBe(_ElementLink2.anchorTag.linkText);
      expect(getByTestId('ElementLink').getAttribute('class').trim().split(/\s+/)).toEqual(expectedClassNames);
      expect(getByTestId('ElementLink').getAttribute('href')).toBe(_ElementLink2.anchorTag.href);
      expect(getByTestId('ElementLink').getAttribute('target')).toBe(_ElementLink2.anchorTag.target);
      expect(getByTestId('ElementLink').getAttribute('data-trackingid')).toBe(_ElementLink2.anchorTag.trackingId);
      expect(getByTestId('ElementLink').hasAttribute('download')).toBe(_ElementLink2.anchorTag.download);
    });
  });
  describe('<ElementLink /> Media download', function () {
    test('has expected attributes', function () {
      var testClassName = 'testClass';
      var expectedClassNames = ["link_".concat(_ElementLink2.mediaDownload.style), testClassName];

      var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_ElementLink["default"], {
        className: testClassName,
        href: _ElementLink2.mediaDownload.href,
        as: _ElementLink2.mediaDownload.as,
        linkText: _ElementLink2.mediaDownload.linkText,
        target: _ElementLink2.mediaDownload.target,
        icon: _ElementLink2.mediaDownload.icon,
        style: _ElementLink2.mediaDownload.style,
        isModal: _ElementLink2.mediaDownload.isModal,
        download: _ElementLink2.mediaDownload.download,
        trackingId: _ElementLink2.mediaDownload.trackingId
      })),
          getByTestId = _render5.getByTestId;

      expect(getByTestId('ElementLink').textContent).toBe(_ElementLink2.mediaDownload.linkText);
      expect(getByTestId('ElementLink').getAttribute('class').trim().split(/\s+/)).toEqual(expectedClassNames);
      expect(getByTestId('ElementLink').getAttribute('href')).toBe(_ElementLink2.mediaDownload.href);
      expect(getByTestId('ElementLink').getAttribute('target')).toBe(_ElementLink2.mediaDownload.target);
      expect(getByTestId('ElementLink').getAttribute('data-trackingid')).toBe(_ElementLink2.mediaDownload.trackingId);
      expect(getByTestId('ElementLink').hasAttribute('download')).toBe(_ElementLink2.mediaDownload.download);
    });
  });
});

//# sourceMappingURL=ElementLink.test.js.map