'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DioryImage = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyles = {
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

var DioryImage = exports.DioryImage = function DioryImage(_ref) {
  var image = _ref.image;
  return _react2.default.createElement('div', { style: _extends({}, defaultStyles, getBackgroundImage(image)) });
};

DioryImage.propTypes = {
  image: _propTypes2.default.string
};

DioryImage.defaultProps = {
  image: ''
};