'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Text = require('../Text');

var _Image = require('../Image');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultStyle = {
  position: 'relative'
};

var Diory = function Diory(_ref) {
  var image = _ref.image,
      text = _ref.text,
      _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      onClick = _ref.onClick,
      children = _ref.children,
      other = _objectWithoutProperties(_ref, ['image', 'text', 'styles', 'onClick', 'children']);

  return _react2.default.createElement(
    'div',
    { style: _extends({}, defaultStyle, styles.diory), onClick: handleOnClick(_extends({ text: text, image: image, styles: styles }, other), onClick) },
    _react2.default.createElement(_Image.Image, { image: image, style: styles.image }),
    _react2.default.createElement(_Text.Text, { text: text, style: styles.text }),
    children
  );
};

var handleOnClick = function handleOnClick(diory, onClick) {
  return function (event) {
    return onClick && onClick(_extends({}, diory, { data: { event: event } }));
  };
};

Diory.propTypes = {
  text: _propTypes2.default.string,
  image: _propTypes2.default.string,
  styles: _propTypes2.default.shape({
    diory: _propTypes2.default.diory,
    image: _propTypes2.default.object,
    text: _propTypes2.default.object
  }),
  onClick: _propTypes2.default.func,
  children: _propTypes2.default.node
};

exports.default = Diory;