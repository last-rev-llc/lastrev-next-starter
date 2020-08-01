"use strict";

var _helpers = require("./helpers");

describe('helpers.js', function () {
  describe('isEntry', function () {
    it('returns true when the object is an entry', function () {
      var obj = {
        sys: {
          type: 'Entry'
        },
        fields: {
          a: 1,
          b: 2
        }
      };
      expect((0, _helpers.isEntry)(obj)).toBe(true);
    });
    it('returns false if no sys field', function () {
      var obj = {
        fields: {
          a: 1,
          b: 2
        }
      };
      expect((0, _helpers.isEntry)(obj)).toBe(false);
    });
    it('returns false if type is not Entry', function () {
      var obj = {
        sys: {
          type: 'Asset'
        },
        fields: {
          a: 1,
          b: 2
        }
      };
      expect((0, _helpers.isEntry)(obj)).toBe(false);
    });
    it('returns false when the object is an array', function () {
      var obj = [{
        sys: {
          type: 'Entry'
        },
        fields: {
          a: 1,
          b: 2
        }
      }];
      expect((0, _helpers.isEntry)(obj)).toBe(false);
    });
  });
  describe('isAsset', function () {
    it('returns true when the object is an asset', function () {
      var obj = {
        sys: {
          type: 'Asset'
        },
        fields: {
          a: 1,
          b: 2
        }
      };
      expect((0, _helpers.isAsset)(obj)).toBe(true);
    });
    it('returns false if no sys field', function () {
      var obj = {
        fields: {
          a: 1,
          b: 2
        }
      };
      expect((0, _helpers.isAsset)(obj)).toBe(false);
    });
    it('returns false if type is not Asset', function () {
      var obj = {
        sys: {
          type: 'Entry'
        },
        fields: {
          a: 1,
          b: 2
        }
      };
      expect((0, _helpers.isAsset)(obj)).toBe(false);
    });
    it('returns false when the object is an array', function () {
      var obj = [{
        sys: {
          type: 'Asset'
        },
        fields: {
          a: 1,
          b: 2
        }
      }];
      expect((0, _helpers.isAsset)(obj)).toBe(false);
    });
  });
  describe('isContentfulObject', function () {
    it('returns true when the object is a contentful object', function () {
      var obj = {
        sys: {
          type: 'Asset'
        },
        fields: {
          a: 1,
          b: 2
        }
      };
      expect((0, _helpers.isContentfulObject)(obj)).toBe(true);
    });
    it('returns false if no sys property', function () {
      var obj = {
        fields: {
          a: 1,
          b: 2
        }
      };
      expect((0, _helpers.isContentfulObject)(obj)).toBe(false);
    });
    it('returns false if no fields property', function () {
      var obj = {
        sys: {
          type: 'Entry'
        }
      };
      expect((0, _helpers.isContentfulObject)(obj)).toBe(false);
    });
    it('returns false when the object is an array', function () {
      var obj = [{
        sys: {
          type: 'Asset'
        },
        fields: {
          a: 1,
          b: 2
        }
      }];
      expect((0, _helpers.isContentfulObject)(obj)).toBe(false);
    });
  });
  describe('extractContentTypeId', function () {
    it('returns the contentType Id from a contentful object', function () {
      var expected = 'myContentType';
      var obj = {
        sys: {
          type: 'Entry',
          contentType: {
            sys: {
              id: expected
            }
          }
        },
        fields: {
          a: 1,
          b: 2
        }
      };
      expect((0, _helpers.extractContentTypeId)(obj)).toBe(expected);
    });
    it('returns null if not a contentful object', function () {
      var obj = {
        fields: {
          a: 1,
          b: 2
        }
      };
      expect((0, _helpers.extractContentTypeId)(obj)).toBe(null);
    });
    it('returns null if no contentTypeId exists', function () {
      var obj = {
        sys: {
          contentType: {
            some: 'other'
          }
        },
        fields: {
          a: 1,
          b: 2
        }
      };
      expect((0, _helpers.extractContentTypeId)(obj)).toBe(null);
    });
  });
  describe('extractId', function () {
    it('returns the Id from a contentful object', function () {
      var expected = '1234';
      var obj = {
        sys: {
          type: 'Entry',
          id: expected,
          contentType: {
            sys: {
              id: 'some'
            }
          }
        },
        fields: {
          a: 1,
          b: 2
        }
      };
      expect((0, _helpers.extractId)(obj)).toBe(expected);
    });
    it('returns null if not a contentful object', function () {
      var obj = {
        fields: {
          a: 1,
          b: 2
        }
      };
      expect((0, _helpers.extractId)(obj)).toBe(null);
    });
    it('returns null if no id exists', function () {
      var obj = {
        sys: {
          contentType: {
            some: 'other'
          }
        },
        fields: {
          a: 1,
          b: 2
        }
      };
      expect((0, _helpers.extractId)(obj)).toBe(null);
    });
  });
  describe('isLink', function () {
    it('returns true if the object is a link', function () {
      var linkContentType = 'myLink';
      var obj = {
        sys: {
          type: 'Entry',
          id: '1234',
          contentType: {
            sys: {
              id: linkContentType
            }
          }
        },
        fields: {
          a: 1,
          b: 2
        }
      };
      expect((0, _helpers.isLink)(obj, linkContentType)).toBe(true);
    });
    it('returns false if not a contentful object', function () {
      var obj = {
        fields: {
          a: 1,
          b: 2
        }
      };
      expect((0, _helpers.isLink)(obj)).toBe(false);
    });
  });
});

//# sourceMappingURL=helpers.test.js.map