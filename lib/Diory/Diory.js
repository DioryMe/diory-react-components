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

var _Link = require('../Link');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Diory = function Diory(_ref) {
  var _onClick = _ref.onClick,
      children = _ref.children,
      diory = _objectWithoutProperties(_ref, ['onClick', 'children']);

  var text = diory.text,
      image = diory.image,
      link = diory.link,
      _diory$style = diory.style,
      style = _diory$style === undefined ? {} : _diory$style;

  var imageStyle = style.image,
      textStyle = style.text,
      linkStyle = style.link,
      dioryStyle = _objectWithoutProperties(style, ['image', 'text', 'link']);

  return _react2.default.createElement(
    'div',
    {
      style: dioryStyle,
      onClick: function onClick(event) {
        return _onClick && _onClick({ diory: diory, event: event });
      }
    },
    _react2.default.createElement(
      'div',
      { style: { position: 'relative', height: '100%' } },
      image && _react2.default.createElement(_Image.Image, { image: image, style: imageStyle }),
      text && _react2.default.createElement(_Text.Text, { text: text, style: textStyle }),
      link && _react2.default.createElement(_Link.Link, _extends({ link: link }, { style: linkStyle })),
      children
    )
  );
};

Diory.propTypes = {
  text: _propTypes2.default.string,
  image: _propTypes2.default.string,
  link: _propTypes2.default.string,
  style: _propTypes2.default.shape({
    diory: _propTypes2.default.object,
    image: _propTypes2.default.object,
    text: _propTypes2.default.object,
    link: _propTypes2.default.object
  }),
  onClick: _propTypes2.default.func,
  children: _propTypes2.default.node
};

exports.default = Diory;