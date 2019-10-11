'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
};

var getBackgroundImage = function getBackgroundImage(image) {
  return { backgroundImage: 'url(' + image + ')' };
};

var Image = exports.Image = function Image(_ref) {
  var image = _ref.image,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style;
  return _react2.default.createElement('div', { style: _extends({}, defaultStyle, getBackgroundImage(image), style) });
};

Image.propTypes = {
  image: _propTypes2.default.string,
  style: _propTypes2.default.object
};