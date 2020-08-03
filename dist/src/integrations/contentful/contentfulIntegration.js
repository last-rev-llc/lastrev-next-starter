"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getFirstItemForContentType = exports.getContentType = exports.getContentTypes = exports.getGlobalSettings = exports.getStaticSlugsForContentType = exports.getFullContentById = exports.getPageBySlug = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _contentful = require("contentful");

var _lodash = _interopRequireDefault(require("lodash"));

var _adapterContentful = _interopRequireDefault(require("@last-rev/adapter-contentful"));

// eslint-disable-next-line import/no-self-import
var removeCircularRefs = function removeCircularRefs(entries) {
  return JSON.parse(entries.stringifySafe());
};

var client = (0, _contentful.createClient)({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENV || 'master',
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
  host: process.env.CONTENTFUL_HOST || 'preview.contentful.com'
});

var getPageBySlug = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(slug, contentType) {
    var entries;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return client.getEntries({
              'content_type': contentType,
              'fields.slug': slug,
              'include': 4
            });

          case 2:
            entries = _context.sent;
            return _context.abrupt("return", _lodash["default"].head(removeCircularRefs(entries).items));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPageBySlug(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getPageBySlug = getPageBySlug;

var getFullContentById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(contentType, id) {
    var queryResults;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return client.getEntries({
              'content_type': contentType,
              'sys.id': id,
              'include': 5
            });

          case 2:
            queryResults = _context2.sent;
            return _context2.abrupt("return", _lodash["default"].head(queryResults.items));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getFullContentById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getFullContentById = getFullContentById;

var getStaticSlugsForContentType = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(contentType) {
    var queryResults;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return client.getEntries({
              content_type: contentType,
              select: 'fields.slug'
            });

          case 2:
            queryResults = _context3.sent;

            if (!queryResults.items) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", queryResults.items.map(function (item) {
              return item.fields.slug;
            }));

          case 5:
            return _context3.abrupt("return", []);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getStaticSlugsForContentType(_x5) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getStaticSlugsForContentType = getStaticSlugsForContentType;

var getGlobalSettings = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var entries;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return client.getEntries({
              'content_type': 'settingsGlobal',
              'sys.id': process.env.CONTENTFUL_SETTINGS_ID,
              'include': 2
            });

          case 2:
            entries = _context4.sent;
            return _context4.abrupt("return", _lodash["default"].head(removeCircularRefs(entries).items));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getGlobalSettings() {
    return _ref4.apply(this, arguments);
  };
}();

exports.getGlobalSettings = getGlobalSettings;

var getContentTypes = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", client.getContentTypes());

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getContentTypes() {
    return _ref5.apply(this, arguments);
  };
}();

exports.getContentTypes = getContentTypes;

var getContentType = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(contentTypeId) {
    var queryResults;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return client.getContentType(contentTypeId);

          case 2:
            queryResults = _context6.sent;
            return _context6.abrupt("return", queryResults || []);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getContentType(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getContentType = getContentType;

var getFirstItemForContentType = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(contentTypeId) {
    var queryResults;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return client.getEntries({
              content_type: contentTypeId,
              include: 2,
              limit: 1
            });

          case 2:
            queryResults = _context7.sent;

            if (!(!queryResults || !queryResults.items || !queryResults.items.length)) {
              _context7.next = 5;
              break;
            }

            return _context7.abrupt("return", null);

          case 5:
            return _context7.abrupt("return", _lodash["default"].head(removeCircularRefs(queryResults).items));

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function getFirstItemForContentType(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getFirstItemForContentType = getFirstItemForContentType;

var _default = function _default(config) {
  var transform = (0, _adapterContentful["default"])(config);
  return _lodash["default"].map([getPageBySlug, getFullContentById, getStaticSlugsForContentType, getGlobalSettings, getContentType, getContentTypes, getFirstItemForContentType], function (func) {
    return /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
      var _args8 = arguments;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.t0 = transform;
              _context8.next = 3;
              return func.apply(void 0, _args8);

            case 3:
              _context8.t1 = _context8.sent;
              return _context8.abrupt("return", (0, _context8.t0)(_context8.t1));

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));
  });
};

exports["default"] = _default;

//# sourceMappingURL=contentfulIntegration.js.map