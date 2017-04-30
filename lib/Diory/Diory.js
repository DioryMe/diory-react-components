'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DioryText = require('../DioryText');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Diory = function Diory(_ref) {
  var text = _ref.text;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_DioryText.DioryText, { text: text })
  );
};

Diory.propTypes = {
  text: _propTypes2.default.string
};

exports.default = Diory;