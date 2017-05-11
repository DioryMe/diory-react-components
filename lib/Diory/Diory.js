'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DioryText = require('../DioryText');

var _DioryImage = require('../DioryImage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyle = {
  position: 'relative'
};

var Diory = function Diory(_ref) {
  var image = _ref.image,
      text = _ref.text,
      styles = _ref.styles;
  return _react2.default.createElement(
    'div',
    { style: _extends({}, defaultStyle, styles.diory) },
    _react2.default.createElement(_DioryImage.DioryImage, { image: image, styles: styles }),
    _react2.default.createElement(_DioryText.DioryText, { text: text, styles: styles })
  );
};

Diory.propTypes = {
  text: _propTypes2.default.string,
  image: _propTypes2.default.string,
  styles: _propTypes2.default.shape({
    diory: _propTypes2.default.diory,
    image: _propTypes2.default.object,
    text: _propTypes2.default.object
  })
};

Diory.defaultProps = {
  styles: {}
};

exports.default = Diory;