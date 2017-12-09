'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _Diory = require('../Diory');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DioryGrid = function DioryGrid(_ref) {
  var _ref$diorys = _ref.diorys,
      diorys = _ref$diorys === undefined ? {} : _ref$diorys,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      children = _ref.children,
      onGridClick = _ref.onGridClick,
      onDioryClick = _ref.onDioryClick,
      diory = _objectWithoutProperties(_ref, ['diorys', 'style', 'children', 'onGridClick', 'onDioryClick']);

  return _react2.default.createElement(
    _Diory.Diory,
    _extends({}, withStyles(style)(diory), {
      onClick: onGridClick
    }),
    children && safeGetChildren(children).map(childWithDiorysStyles(style)) || Object.entries(diorys).map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          childDiory = _ref3[1];

      return _react2.default.createElement(_Diory.Diory, _extends({}, withStyles(style, 'diorys')(childDiory), {
        key: key,
        onClick: function onClick(props) {
          return onDioryClick(_extends({ key: key }, props));
        }
      }));
    })
  );
};

var withStyles = function withStyles(style, key) {
  return function (diory) {
    return (0, _deepmerge2.default)({ style: getStyles(style, key) }, diory);
  };
};
var getStyles = function getStyles(_ref4, key) {
  var display = _ref4.display,
      style = _objectWithoutProperties(_ref4, ['display']);

  return key ? (0, _deepmerge2.default)(defaultStyles[display] && defaultStyles[display][key] || {}, style[key] || {}) : (0, _deepmerge2.default)(defaultStyles[display] || {}, style);
};

var safeGetChildren = function safeGetChildren(children) {
  return Array.isArray(children) ? children : [children];
};
var childWithDiorysStyles = function childWithDiorysStyles(style) {
  return function (child, key) {
    return (0, _react.cloneElement)(child, _extends({ key: key }, withStyles(style, 'diorys')(child.props)));
  };
};

var defaultStyles = {
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    diorys: {
      height: '10em',
      width: '20em'
    }
  }
};

DioryGrid.propTypes = {
  diorys: _propTypes2.default.object,
  style: _propTypes2.default.object,
  children: _propTypes2.default.node,
  onGridClick: _propTypes2.default.func,
  onDioryClick: _propTypes2.default.func
};

exports.default = DioryGrid;