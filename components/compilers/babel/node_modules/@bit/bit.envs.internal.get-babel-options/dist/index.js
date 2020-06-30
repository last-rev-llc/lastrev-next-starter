'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getBabelRc = function getBabelRc(pathToLook) {
    var babelRcPath = '' + pathToLook + _path2.default.sep + '.babelrc';
    var file = _fsExtra2.default.readFileSync(babelRcPath, 'utf8');
    return JSON.parse(file);
};

var moduleIsAvailable = function moduleIsAvailable(modulePath, compilerNodeModules) {
    try {
        return require.resolve(modulePath, { paths: [compilerNodeModules] });
    } catch (e) {
        return null;
    }
};

var addBabelPrefixAndResolve = function addBabelPrefixAndResolve(prefixType, obj, compilerRootFolder) {
    var compilerNodeModules = _path2.default.join(compilerRootFolder, 'node_modules');
    var resolvedModule = moduleIsAvailable(obj, compilerNodeModules);
    if (resolvedModule) {
        return resolvedModule;
    }
    if (obj.startsWith('@babel/')) {
        if (!obj.startsWith('@babel/' + prefixType)) {
            obj = '@babel/' + prefixType + '-' + obj;
        }
    } else if (!obj.startsWith('babel-' + prefixType)) {
        obj = 'babel-' + prefixType + '-' + obj;
    }
    return require.resolve(obj, { paths: [compilerNodeModules] });
};

/**
 * @name getBabelOptions
 * @description Retrieves the babel options from the `.babelrc` file as JSON  from the specified directory.
 * @param {string} pathToLook 
 * @example
 * const babelOptions = getBabelOptions();
 * babel.transform(code, babelOptions, distPath);
 */
var getBabelOptions = function getBabelOptions(pathToLook) {
    var options = getBabelRc(pathToLook);
    options.sourceMaps = true;

    options.plugins = options.plugins.map(function (plugin) {
        if (Array.isArray(plugin)) {
            plugin[0] = addBabelPrefixAndResolve('plugin', plugin[0], pathToLook);
            return plugin;
        }

        return addBabelPrefixAndResolve('plugin', plugin, pathToLook);
    });

    options.presets = options.presets.map(function (preset) {
        if (Array.isArray(preset)) {
            preset[0] = addBabelPrefixAndResolve('preset', preset[0], pathToLook);
            return preset;
        }

        return addBabelPrefixAndResolve('preset', preset, pathToLook);
    });

    return options;
};

exports.default = getBabelOptions;
module.exports = exports['default'];

//# sourceMappingURL=index.js.map