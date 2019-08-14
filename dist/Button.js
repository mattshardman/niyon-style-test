"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 40px;\n  width: ", ";\n  background: none;\n  border: ", ";\n  color: ", ";\n  border-radius: 4px;\n  transition: border 400ms, background 400ms;\n  cursor: pointer;\n\n  &:hover {\n    border: ", ";\n    color: ", ";\n    background: #ddd;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 40px;\n  width: ", ";\n  background: ", ";\n  border: none;\n  color: white;\n  border-radius: 4px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  transition: transform 400ms, background 400ms;\n  cursor: pointer;\n\n  &:hover {\n    background: ", ";\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 40px;\n  width: ", ";\n  background: ", ";\n  border: none;\n  color: white;\n  border-radius: 4px;\n  transition: background 400ms;\n  cursor: pointer;\n\n  &:hover {\n    background: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var B = _styledComponents["default"].button(_templateObject(), function (_ref) {
  var width = _ref.width;
  return width || "150px";
}, function (_ref2) {
  var themeColor = _ref2.themeColor;
  return "".concat(themeColor.light);
}, function (_ref3) {
  var themeColor = _ref3.themeColor;
  return "".concat(themeColor.dark);
});

var BRaised = _styledComponents["default"].button(_templateObject2(), function (_ref4) {
  var width = _ref4.width;
  return width || "150px";
}, function (_ref5) {
  var themeColor = _ref5.themeColor;
  return "".concat(themeColor.light);
}, function (_ref6) {
  var themeColor = _ref6.themeColor;
  return "".concat(themeColor.dark);
});

var BOutline = _styledComponents["default"].button(_templateObject3(), function (_ref7) {
  var width = _ref7.width;
  return width || "150px";
}, function (_ref8) {
  var themeColor = _ref8.themeColor;
  return "1px solid ".concat(themeColor.light);
}, function (_ref9) {
  var themeColor = _ref9.themeColor;
  return "".concat(themeColor.light);
}, function (_ref10) {
  var themeColor = _ref10.themeColor;
  return "1px solid ".concat(themeColor.dark);
}, function (_ref11) {
  var themeColor = _ref11.themeColor;
  return "".concat(themeColor.dark);
});

var getColor = {
  primary: {
    light: "#33b1f5",
    dark: "#05a2f7"
  },
  secondary: {
    light: "#eb4034",
    dark: "#e80f00"
  }
};

function Button(_ref12) {
  var children = _ref12.children,
      customStyles = _ref12.customStyles,
      outline = _ref12.outline,
      variant = _ref12.variant,
      raised = _ref12.raised;
  var color = getColor[variant || "primary"];

  if (raised) {
    return _react["default"].createElement(BRaised, _extends({
      type: "button",
      themeColor: color
    }, customStyles), children.toUpperCase());
  }

  if (outline) {
    return _react["default"].createElement(BOutline, _extends({
      type: "button",
      themeColor: color
    }, customStyles), children.toUpperCase());
  }

  return _react["default"].createElement(B, _extends({
    type: "button",
    themeColor: color
  }, customStyles), children.toUpperCase());
}

var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CdXR0b24uanMiXSwibmFtZXMiOlsiQiIsInN0eWxlZCIsImJ1dHRvbiIsIndpZHRoIiwidGhlbWVDb2xvciIsImxpZ2h0IiwiZGFyayIsIkJSYWlzZWQiLCJCT3V0bGluZSIsImdldENvbG9yIiwicHJpbWFyeSIsInNlY29uZGFyeSIsIkJ1dHRvbiIsImNoaWxkcmVuIiwiY3VzdG9tU3R5bGVzIiwib3V0bGluZSIsInZhcmlhbnQiLCJyYWlzZWQiLCJjb2xvciIsInRvVXBwZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsQ0FBQyxHQUFHQyw2QkFBT0MsTUFBVixvQkFFSTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssSUFBSSxPQUF4QjtBQUFBLENBRkosRUFHUztBQUFBLE1BQUdDLFVBQUgsU0FBR0EsVUFBSDtBQUFBLG1CQUF1QkEsVUFBVSxDQUFDQyxLQUFsQztBQUFBLENBSFQsRUFXVztBQUFBLE1BQUdELFVBQUgsU0FBR0EsVUFBSDtBQUFBLG1CQUF1QkEsVUFBVSxDQUFDRSxJQUFsQztBQUFBLENBWFgsQ0FBUDs7QUFlQSxJQUFNQyxPQUFPLEdBQUdOLDZCQUFPQyxNQUFWLHFCQUVGO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxJQUFJLE9BQXhCO0FBQUEsQ0FGRSxFQUdHO0FBQUEsTUFBR0MsVUFBSCxTQUFHQSxVQUFIO0FBQUEsbUJBQXVCQSxVQUFVLENBQUNDLEtBQWxDO0FBQUEsQ0FISCxFQVlLO0FBQUEsTUFBR0QsVUFBSCxTQUFHQSxVQUFIO0FBQUEsbUJBQXVCQSxVQUFVLENBQUNFLElBQWxDO0FBQUEsQ0FaTCxDQUFiOztBQWtCQSxJQUFNRSxRQUFRLEdBQUdQLDZCQUFPQyxNQUFWLHFCQUVIO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxJQUFJLE9BQXhCO0FBQUEsQ0FGRyxFQUlGO0FBQUEsTUFBR0MsVUFBSCxTQUFHQSxVQUFIO0FBQUEsNkJBQWlDQSxVQUFVLENBQUNDLEtBQTVDO0FBQUEsQ0FKRSxFQUtIO0FBQUEsTUFBR0QsVUFBSCxTQUFHQSxVQUFIO0FBQUEsbUJBQXVCQSxVQUFVLENBQUNDLEtBQWxDO0FBQUEsQ0FMRyxFQVdBO0FBQUEsTUFBR0QsVUFBSCxVQUFHQSxVQUFIO0FBQUEsNkJBQWlDQSxVQUFVLENBQUNFLElBQTVDO0FBQUEsQ0FYQSxFQVlEO0FBQUEsTUFBR0YsVUFBSCxVQUFHQSxVQUFIO0FBQUEsbUJBQXVCQSxVQUFVLENBQUNFLElBQWxDO0FBQUEsQ0FaQyxDQUFkOztBQWlCQSxJQUFNRyxRQUFRLEdBQUc7QUFDZkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BMLElBQUFBLEtBQUssRUFBRSxTQURBO0FBRVBDLElBQUFBLElBQUksRUFBRTtBQUZDLEdBRE07QUFLZkssRUFBQUEsU0FBUyxFQUFFO0FBQ1ROLElBQUFBLEtBQUssRUFBRSxTQURFO0FBRVRDLElBQUFBLElBQUksRUFBRTtBQUZHO0FBTEksQ0FBakI7O0FBV0EsU0FBU00sTUFBVCxTQUFzRTtBQUFBLE1BQXBEQyxRQUFvRCxVQUFwREEsUUFBb0Q7QUFBQSxNQUExQ0MsWUFBMEMsVUFBMUNBLFlBQTBDO0FBQUEsTUFBNUJDLE9BQTRCLFVBQTVCQSxPQUE0QjtBQUFBLE1BQW5CQyxPQUFtQixVQUFuQkEsT0FBbUI7QUFBQSxNQUFWQyxNQUFVLFVBQVZBLE1BQVU7QUFDcEUsTUFBTUMsS0FBSyxHQUFHVCxRQUFRLENBQUNPLE9BQU8sSUFBSSxTQUFaLENBQXRCOztBQUVBLE1BQUlDLE1BQUosRUFBWTtBQUNWLFdBQ0UsZ0NBQUMsT0FBRDtBQUFTLE1BQUEsSUFBSSxFQUFDLFFBQWQ7QUFBdUIsTUFBQSxVQUFVLEVBQUVDO0FBQW5DLE9BQThDSixZQUE5QyxHQUNHRCxRQUFRLENBQUNNLFdBQVQsRUFESCxDQURGO0FBS0Q7O0FBRUQsTUFBSUosT0FBSixFQUFhO0FBQ1gsV0FDRSxnQ0FBQyxRQUFEO0FBQVUsTUFBQSxJQUFJLEVBQUMsUUFBZjtBQUF3QixNQUFBLFVBQVUsRUFBRUc7QUFBcEMsT0FBK0NKLFlBQS9DLEdBQ0dELFFBQVEsQ0FBQ00sV0FBVCxFQURILENBREY7QUFLRDs7QUFFRCxTQUNFLGdDQUFDLENBQUQ7QUFBRyxJQUFBLElBQUksRUFBQyxRQUFSO0FBQWlCLElBQUEsVUFBVSxFQUFFRDtBQUE3QixLQUF3Q0osWUFBeEMsR0FDR0QsUUFBUSxDQUFDTSxXQUFULEVBREgsQ0FERjtBQUtEOztlQUVjUCxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgQiA9IHN0eWxlZC5idXR0b25gXG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6ICR7KHsgd2lkdGggfSkgPT4gd2lkdGggfHwgXCIxNTBweFwifTtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZUNvbG9yIH0pID0+IGAke3RoZW1lQ29sb3IubGlnaHR9YH07XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgNDAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lQ29sb3IgfSkgPT4gYCR7dGhlbWVDb2xvci5kYXJrfWB9O1xuICB9XG5gO1xuXG5jb25zdCBCUmFpc2VkID0gc3R5bGVkLmJ1dHRvbmBcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiB3aWR0aCB8fCBcIjE1MHB4XCJ9O1xuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lQ29sb3IgfSkgPT4gYCR7dGhlbWVDb2xvci5saWdodH1gfTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcywgYmFja2dyb3VuZCA0MDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWVDb2xvciB9KSA9PiBgJHt0aGVtZUNvbG9yLmRhcmt9YH07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG5gO1xuXG5jb25zdCBCT3V0bGluZSA9IHN0eWxlZC5idXR0b25gXG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6ICR7KHsgd2lkdGggfSkgPT4gd2lkdGggfHwgXCIxNTBweFwifTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAkeyh7IHRoZW1lQ29sb3IgfSkgPT4gYDFweCBzb2xpZCAke3RoZW1lQ29sb3IubGlnaHR9YH07XG4gIGNvbG9yOiAkeyh7IHRoZW1lQ29sb3IgfSkgPT4gYCR7dGhlbWVDb2xvci5saWdodH1gfTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXIgNDAwbXMsIGJhY2tncm91bmQgNDAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBib3JkZXI6ICR7KHsgdGhlbWVDb2xvciB9KSA9PiBgMXB4IHNvbGlkICR7dGhlbWVDb2xvci5kYXJrfWB9O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lQ29sb3IgfSkgPT4gYCR7dGhlbWVDb2xvci5kYXJrfWB9O1xuICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gIH1cbmA7XG5cbmNvbnN0IGdldENvbG9yID0ge1xuICBwcmltYXJ5OiB7XG4gICAgbGlnaHQ6IFwiIzMzYjFmNVwiLFxuICAgIGRhcms6IFwiIzA1YTJmN1wiXG4gIH0sXG4gIHNlY29uZGFyeToge1xuICAgIGxpZ2h0OiBcIiNlYjQwMzRcIixcbiAgICBkYXJrOiBcIiNlODBmMDBcIlxuICB9XG59O1xuXG5mdW5jdGlvbiBCdXR0b24oeyBjaGlsZHJlbiwgY3VzdG9tU3R5bGVzLCBvdXRsaW5lLCB2YXJpYW50LCByYWlzZWQgfSkge1xuICBjb25zdCBjb2xvciA9IGdldENvbG9yW3ZhcmlhbnQgfHwgXCJwcmltYXJ5XCJdO1xuXG4gIGlmIChyYWlzZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJSYWlzZWQgdHlwZT1cImJ1dHRvblwiIHRoZW1lQ29sb3I9e2NvbG9yfSB7Li4uY3VzdG9tU3R5bGVzfT5cbiAgICAgICAge2NoaWxkcmVuLnRvVXBwZXJDYXNlKCl9XG4gICAgICA8L0JSYWlzZWQ+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChvdXRsaW5lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCT3V0bGluZSB0eXBlPVwiYnV0dG9uXCIgdGhlbWVDb2xvcj17Y29sb3J9IHsuLi5jdXN0b21TdHlsZXN9PlxuICAgICAgICB7Y2hpbGRyZW4udG9VcHBlckNhc2UoKX1cbiAgICAgIDwvQk91dGxpbmU+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEIgdHlwZT1cImJ1dHRvblwiIHRoZW1lQ29sb3I9e2NvbG9yfSB7Li4uY3VzdG9tU3R5bGVzfT5cbiAgICAgIHtjaGlsZHJlbi50b1VwcGVyQ2FzZSgpfVxuICAgIDwvQj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19