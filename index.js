"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["cursor: not-allowed;"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["background-color: hsla(216, 20%, 50%, 0.2); border-color: hsla(216, 20%, 50%, 1);"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  background-color: transparent;\n  border-radius: 50%;\n  border: 2px solid hsla(216, 20%, 50%, 0.85);\n  transition: background-color 500ms, border-color 500ms;\n  &:hover {\n    ", "    \n  };\n  & > div {\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: hsla(216, 20%, 50%, 0.85); \n    pointer-events: none;\n  };\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Radio = function Radio(_ref) {
  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      checked = _ref.checked,
      label = _ref.label,
      _ref$tabIndex = _ref.tabIndex,
      tabIndex = _ref$tabIndex === void 0 ? 0 : _ref$tabIndex,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$labelStyle = _ref.labelStyle,
      labelStyle = _ref$labelStyle === void 0 ? {
    marginLeft: 8
  } : _ref$labelStyle,
      _ref$containerStyle = _ref.containerStyle,
      containerStyle = _ref$containerStyle === void 0 ? {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none'
  } : _ref$containerStyle,
      rest = _objectWithoutProperties(_ref, ["disabled", "checked", "label", "tabIndex", "onChange", "labelStyle", "containerStyle"]);

  var checkboxRef = (0, _react.useRef)();
  var checkRef = (0, _react.useRef)();

  var handleClick = function handleClick() {
    if (disabled) return false;

    if (checked) {
      onChange(false);
    } else {
      onChange(true);
    }
  };

  var content = /*#__PURE__*/_react["default"].createElement("div", _extends({
    onKeyPress: function onKeyPress(e) {
      return ['Enter', ' '].includes(e.key) && handleClick();
    },
    ref: checkboxRef,
    onClick: handleClick
  }, rest), /*#__PURE__*/_react["default"].createElement("div", {
    ref: checkRef,
    style: {
      opacity: checked ? 1 : 0
    }
  }));

  if (label) return /*#__PURE__*/_react["default"].createElement("div", {
    style: containerStyle
  }, content, /*#__PURE__*/_react["default"].createElement("div", {
    style: labelStyle,
    onClick: handleClick
  }, label));
  return content;
};

var _default = (0, _styledComponents["default"])(Radio)(_templateObject(), function (props) {
  return !props.disabled && (0, _styledComponents.css)(_templateObject2());
}, function (props) {
  return props.disabled && (0, _styledComponents.css)(_templateObject3());
});

exports["default"] = _default;
