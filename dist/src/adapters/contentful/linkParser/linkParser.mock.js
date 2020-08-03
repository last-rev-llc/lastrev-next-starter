"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  linkText: 'hello',
  action: 'Open in the same window',
  destinationType: 'Asset reference',
  assetReference: {
    fields: {
      title: 'Nyan Cat',
      file: {
        contentType: 'image/png',
        fileName: 'Nyan_cat_250px_frame.png',
        url: '//images.ctfassets.net/yadj1kx9rmg0/4gp6taAwW4CmSgumq2ekUm/9da0cd1936871b8d72343e895a00d611/Nyan_cat_250px_frame.png',
        details: {
          image: {
            width: 250,
            height: 250
          },
          size: 12273
        }
      }
    },
    sys: {
      id: 'nyancat',
      type: 'Asset',
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'yadj1kx9rmg0'
        }
      },
      createdAt: '2016-12-20T10:43:35.772Z',
      updatedAt: '2016-12-20T10:43:35.772Z',
      revision: 1
    }
  },
  contentReference: {
    fields: {
      title: {
        'en-US': 'Hello, World!'
      },
      body: {
        'en-US': 'Bacon is healthy!'
      },
      slug: 'testslug'
    },
    sys: {
      id: '5KsDBWseXY6QegucYAoacS',
      type: 'Entry',
      version: 1,
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'yadj1kx9rmg0'
        }
      },
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'testPage'
        }
      },
      createdAt: '2016-12-20T10:43:35.772Z',
      updatedAt: '2016-12-20T10:43:35.772Z',
      revision: 1
    }
  },
  manualUrl: 'http://ww.google.com'
};
exports["default"] = _default;

//# sourceMappingURL=linkParser.mock.js.map