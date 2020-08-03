"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mediaDownload = exports.anchorTag = exports.externalUrl = exports.internalUrl = void 0;
var internalUrl = {
  href: '/[slug]',
  as: '/test',
  linkText: 'My Page',
  target: null,
  icon: 'phone',
  style: 'int-style',
  isModal: false,
  download: false,
  trackingId: 'int123'
};
exports.internalUrl = internalUrl;
var externalUrl = {
  linkText: 'Last Rev',
  href: 'http://www.lastrev.com',
  as: null,
  target: '_blank',
  style: 'ext-style',
  isModal: false,
  download: false,
  trackingId: 'ext123',
  icon: null
};
exports.externalUrl = externalUrl;
var anchorTag = {
  linkText: 'Top',
  href: '#top',
  as: null,
  target: null,
  style: 'anch-style',
  isModal: false,
  download: false,
  trackingId: 'tag123',
  icon: 'top'
};
exports.anchorTag = anchorTag;
var mediaDownload = {
  linkText: 'Download',
  href: '/my/media.pdf',
  as: null,
  target: null,
  style: 'med-style',
  isModal: false,
  download: true,
  trackingId: 'media123',
  icon: null
};
exports.mediaDownload = mediaDownload;

//# sourceMappingURL=ElementLink.mock.js.map