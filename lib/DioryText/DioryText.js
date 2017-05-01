'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DioryText = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyles = {
  position: 'relative',
  padding: '1em'
};

var DioryText = exports.DioryText = function DioryText(_ref) {
  var text = _ref.text,
      style = _ref.style;
  return !text ? null : _react2.default.createElement(
    'div',
    { style: _extends({}, defaultStyles, style) },
    text
  );
};

DioryText.propTypes = {
  text: _propTypes2.default.string,
  style: _propTypes2.default.object
};

DioryText.defaultProps = {
  text: ''
};