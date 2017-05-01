'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DioryText = require('../DioryText');

var _DioryImage = require('../DioryImage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Diory = function Diory(_ref) {
  var image = _ref.image,
      text = _ref.text,
      styles = _ref.styles;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_DioryImage.DioryImage, { image: image, style: styles.image }),
    _react2.default.createElement(_DioryText.DioryText, { text: text, style: styles.text })
  );
};

Diory.propTypes = {
  text: _propTypes2.default.string,
  image: _propTypes2.default.string,
  styles: _propTypes2.default.shape({
    image: _propTypes2.default.object,
    text: _propTypes2.default.object
  })
};

Diory.defaultProps = {
  styles: {}
};

exports.default = Diory;