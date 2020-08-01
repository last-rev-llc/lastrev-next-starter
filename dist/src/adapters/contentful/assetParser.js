"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(obj) {
  var _obj$fields = obj.fields,
      title = _obj$fields.title,
      description = _obj$fields.description,
      _obj$fields$file = _obj$fields.file,
      url = _obj$fields$file.url,
      _obj$fields$file$deta = _obj$fields$file.details,
      size = _obj$fields$file$deta.size,
      _obj$fields$file$deta2 = _obj$fields$file$deta.image,
      width = _obj$fields$file$deta2.width,
      height = _obj$fields$file$deta2.height,
      filename = _obj$fields$file.fileName,
      contentType = _obj$fields$file.contentType;
  return {
    title: title,
    description: description,
    url: url,
    size: size,
    width: width,
    height: height,
    filename: filename,
    contentType: contentType
  };
};

exports["default"] = _default;

//# sourceMappingURL=assetParser.js.map