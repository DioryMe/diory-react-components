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

var _Diory = require('../Diory');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DioryGrid = function DioryGrid(_ref) {
  var _ref$diorys = _ref.diorys,
      diorys = _ref$diorys === undefined ? {} : _ref$diorys,
      onParentClick = _ref.onParentClick,
      onChildClick = _ref.onChildClick,
      diory = _objectWithoutProperties(_ref, ['diorys', 'onParentClick', 'onChildClick']);

  return _react2.default.createElement(
    _Diory.Diory,
    _extends({}, diory, {
      onClick: onParentClick
    }),
    Object.entries(diorys).map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          diory = _ref3[1];

      return _react2.default.createElement(_Diory.Diory, _extends({}, diory, {
        key: key,
        onClick: function onClick(props) {
          return onChildClick(_extends({ key: key }, props));
        }
      }));
    })
  );
};

DioryGrid.propTypes = {
  diorys: _propTypes2.default.object,
  onParentClick: _propTypes2.default.func,
  onChildClick: _propTypes2.default.func
};

exports.default = DioryGrid;