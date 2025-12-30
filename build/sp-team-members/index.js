/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sp-team-members/block.json"
/*!****************************************!*\
  !*** ./src/sp-team-members/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/sp-team-members","version":"0.1.0","title":"Sp Team Members","category":"text","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"attributes":{"columns":{"type":"number","default":2}},"textdomain":"sp-team-members","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ },

/***/ "./src/sp-team-members/edit.js"
/*!*************************************!*\
  !*** ./src/sp-team-members/edit.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/sp-team-members/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function Edit({
  attributes,
  setAttributes
}) {
  const {
    columns
  } = attributes;
  const onChangeColumns = newColumns => {
    setAttributes({
      columns: newColumns
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
      className: `has-${columns}-columns`
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Layout Settings", "sp-team-members"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Columns", "sp-team-members"),
          min: 1,
          max: 6,
          value: columns,
          onChange: onChangeColumns
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
      allowedBlocks: ["create-block/sp-team-member", "core/spacer"]
    })]
  });
}

/***/ },

/***/ "./src/sp-team-members/editor.scss"
/*!*****************************************!*\
  !*** ./src/sp-team-members/editor.scss ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/sp-team-members/index.js"
/*!**************************************!*\
  !*** ./src/sp-team-members/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/sp-team-members/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/sp-team-members/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/sp-team-members/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/sp-team-members/style.scss");
/* harmony import */ var _team_member___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-member/ */ "./src/sp-team-members/team-member/index.js");
/* harmony import */ var _teamwork_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teamwork.svg */ "./src/sp-team-members/teamwork.svg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_teamwork_svg__WEBPACK_IMPORTED_MODULE_6__.ReactComponent, {})
});

/***/ },

/***/ "./src/sp-team-members/save.js"
/*!*************************************!*\
  !*** ./src/sp-team-members/save.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    columns
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
      className: `has-${columns}-columns`
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
  });
}

/***/ },

/***/ "./src/sp-team-members/style.scss"
/*!****************************************!*\
  !*** ./src/sp-team-members/style.scss ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/sp-team-members/team-member/edit.js"
/*!*************************************************!*\
  !*** ./src/sp-team-members/team-member/edit.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Edit({
  attributes,
  setAttributes
}) {
  const {
    name,
    bio,
    url,
    id,
    alt
  } = attributes;
  const onChangeName = newName => {
    setAttributes({
      name: newName
    });
  };
  const onChangeBio = newBio => {
    setAttributes({
      bio: newBio
    });
  };
  const onSelectImage = image => {
    if (!image || !image.url) {
      setAttributes({
        url: undefined,
        id: undefined,
        alt: ""
      });
      return;
    }
    setAttributes({
      url: image.url,
      id: image.id,
      alt: image.alt
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(),
    children: [url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
      src: url,
      alt: alt
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaPlaceholder, {
      icon: "admin-users",
      onSelect: onSelectImage,
      onSelectURL: val => console.log(val),
      onError: val => console.log(val),
      accept: "image/*",
      allowedTypes: ["image"],
      disableMediaButtons: !!url
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Name", "sp-team-member"),
      tagName: "h4",
      onChange: onChangeName,
      value: name,
      allowedFormats: []
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bio", "sp-team-member"),
      tagName: "p",
      onChange: onChangeBio,
      value: bio,
      allowedFormats: []
    })]
  });
}

/***/ },

/***/ "./src/sp-team-members/team-member/index.js"
/*!**************************************************!*\
  !*** ./src/sp-team-members/team-member/index.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/sp-team-members/team-member/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/sp-team-members/team-member/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("create-block/sp-team-member", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sp Team Member", "sp-team-member"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Block for individual team member.", "sp-team-member"),
  category: "text",
  icon: "admin-users",
  parent: ["create-block/sp-team-members"],
  supports: {
    reusable: false,
    html: false
  },
  attributes: {
    name: {
      type: "string",
      source: "html",
      selector: "h4"
    },
    bio: {
      type: "string",
      source: "html",
      selector: "p"
    },
    id: {
      type: "number"
    },
    alt: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "alt",
      default: ""
    },
    url: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "src"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/sp-team-members/team-member/save.js"
/*!*************************************************!*\
  !*** ./src/sp-team-members/team-member/save.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const save = ({
  attributes
}) => {
  const {
    name,
    bio,
    url,
    alt
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    children: [url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      src: url,
      alt: alt
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "h4",
      value: name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "p",
      value: bio
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ },

/***/ "./src/sp-team-members/teamwork.svg"
/*!******************************************!*\
  !*** ./src/sp-team-members/teamwork.svg ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgTeamwork),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgTeamwork = function SvgTeamwork(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    width: 800,
    height: 800,
    viewBox: "0 0 508 508"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: 254,
    cy: 254,
    r: 254,
    style: {
      fill: "#fd8469"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M254 487.6c-95.6 0-173.6-78-173.6-173.6s78-173.6 173.6-173.6 173.6 78 173.6 173.6-78 173.6-173.6 173.6m0-335.2c-89.2 0-161.6 72.4-161.6 161.6S164.8 475.6 254 475.6 415.6 403.2 415.6 314 343.2 152.4 254 152.4",
    style: {
      fill: "#fff"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m486.8 407.6-63.2-32.4h-46.4L314 407.6l-4.8 31.2c21.2 27.2 54 44.8 91.2 44.8s70.4-17.6 91.2-44.8z",
    style: {
      fill: "#2b3b4e"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m423.6 375.2 17.6 18.8-10 7.6 12.4 6.4-43.2 68zM377.2 375.2 360 394l10 7.6-12.4 6.4 42.8 68z",
    style: {
      fill: "#324a5e"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M423.6 375.2 400.4 476l-23.2-100.8z",
    style: {
      fill: "#e6e9ee"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m423.6 375.2-14 60.8-9.2 40-9.2-40-14-60.8z",
    style: {
      fill: "#e6e9ee"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M400.8 390s-.4 0 0 0q-.6 0 0 0M411.2 392.8l-4 8.8h-13.6l-4-8.8c5.2-3.2 10.8-2.4 10.8-2.4s5.6-.8 10.8 2.4",
    style: {
      fill: "#f1543f"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m409.6 436-9.2 40-9.2-40 2.4-34.8h13.6z",
    style: {
      fill: "#ff7058"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M419.6 364.4c-.8 4-4 12.4-18.8 25.6-12.8-12.4-17.2-20.8-18.4-24.8 5.2 6.8 11.6 11.2 18.4 11.2s13.6-4.8 18.8-12",
    style: {
      fill: "#f9b54c"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M419.6 362s2.4 8.8-19.2 28.4c0 0 13.6-1.6 18.8 12.4.4 0 12.4-26.8.4-40.8M381.2 362c-12 14.4 0 40.8 0 40.8 5.2-14 18.8-12.4 18.8-12.4-18.8-18.4-18.8-28.4-18.8-28.4",
    style: {
      fill: "#fff"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M432.8 344.8c-1.6 2.4-3.6 4.4-5.6 5.2-5.2 14.4-15.2 26.4-26.8 26.4s-21.2-12-26.8-26.4c-2-.8-4.4-2.4-5.6-5.2-2.8-4.4-2.8-9.2 0-10.8.4 0 .4-.4.8-.4q.6 4.8 2.4 8.4s2.4 4.4 2.8 8.4c0-4.4-.4-13.6 1.2-15.2 0 0 6.4-11.2 1.6-20.8 0 0 1.2-14.4 17.2-8 0 0 3.2.8 6.4.8l6.4-.8c16.4-6.8 17.2 8 17.2 8-4.8 9.6 1.6 20.8 1.6 20.8 1.6 1.6 1.2 10.8 1.2 15.2.8-4 2.8-8.4 2.8-8.4 1.2-2.4 1.6-5.2 2.4-8.4.4 0 .4 0 .8.4 2.8 1.6 2.8 6.4 0 10.8",
    style: {
      fill: "#ffd05b"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M434.8 300.4c-.8-1.6-5.2.8-5.2.8.4-3.2-1.2-10.4-1.2-10.4-.8 2.4-3.6 2.8-3.6 2.8.4-2.4-2.4-8.8-2.4-8.8.4 2.8-3.6 5.6-3.6 5.6.8-2.4-4.8-10.4-4.8-10.4.8 1.2.4 4.8.4 4.8-2-4.4-7.6-8.4-7.6-8.4 0 1.2-.8 2-1.6 3.2-1.2-2.8-4.4-4-4.8-4.4-.4.4-3.6 1.6-4.8 4.4-.8-.8-1.2-2-1.2-3.2 0 0-5.6 4-7.6 8.4 0 0-.4-3.6.4-4.8 0 0-5.6 8.4-4.8 10.4 0 0-4-2.8-3.6-5.6 0 0-2.8 6.4-2.4 8.8 0 0-2.8-.4-3.6-2.8 0 0-2 7.2-1.2 10.4 0 0-4.4-2.4-5.2-.8 0 0 4 4.4 2 8.4 0 0-1.6 22 3.2 33.6 0 0 2.4 4.4 2.8 8.4 0-4.4-.4-13.6 1.2-15.2 0 0 6.4-11.2 1.6-20.8 0 0 1.2-14.4 17.2-8 0 0 3.2.8 6.4.8l6.4-.8c16.4-6.8 17.2 8 17.2 8-4.8 9.6 1.6 20.8 1.6 20.8 1.6 1.6 1.2 10.8 1.2 15.2.8-4 2.8-8.4 2.8-8.4 4.8-11.6 3.2-33.6 3.2-33.6-2.4-4 1.6-8.4 1.6-8.4",
    style: {
      fill: "#324a5e"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m194 407.6-63.2-32.4H84.4l-63.2 32.4-4.8 31.2c21.2 27.2 54 44.8 91.2 44.8s70.4-17.6 91.2-44.8z",
    style: {
      fill: "#2b3b4e"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M130.8 375.2 148 394l-10 7.6 12.4 6.4-42.8 68zM84.4 375.2 66.8 394l10 7.6-12.4 6.4 43.2 68z",
    style: {
      fill: "#324a5e"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M130.8 375.2 107.6 476 84.4 375.2z",
    style: {
      fill: "#e6e9ee"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m130.8 375.2-14 60.8-9.2 40-9.2-40-14-60.8z",
    style: {
      fill: "#e6e9ee"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M107.6 390s-.4 0 0 0M118.4 392.8l-4 8.8h-13.6l-4-8.8c5.2-3.2 10.8-2.4 10.8-2.4s5.2-.8 10.8 2.4",
    style: {
      fill: "#f1543f"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m116.8 436-9.2 40-9.2-40 2.4-34.8h13.6z",
    style: {
      fill: "#ff7058"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M126.4 364.4c-.8 4-4 12.4-18.8 25.6-12.8-12.4-17.2-20.8-18.4-24.8 5.2 6.8 11.6 11.2 18.4 11.2 7.2 0 13.6-4.8 18.8-12",
    style: {
      fill: "#f9b54c"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M126.4 362s2.4 8.8-19.2 28.4c0 0 13.6-1.6 18.8 12.4.4 0 12.8-26.8.4-40.8M88.4 362c-12 14.4 0 40.8 0 40.8 5.2-14 18.8-12.4 18.8-12.4C88 372 88.4 362 88.4 362",
    style: {
      fill: "#fff"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M140 344.8c-1.6 2.4-3.6 4.4-5.6 5.2-5.2 14.4-15.2 26.4-26.8 26.4s-21.2-12-26.8-26.4c-2-.8-4.4-2.4-5.6-5.2-2.8-4.4-2.8-9.2 0-10.8.4 0 .4-.4.8-.4q.6 4.8 2.4 8.4s2.4 4.4 2.8 8.4c0-4.4-.4-13.6 1.2-15.2 0 0 6.4-11.2 1.6-20.8 0 0 1.2-14.4 17.2-8 0 0 3.2.8 6.4.8l6.4-.8c16.4-6.8 17.2 8 17.2 8-4.8 9.6 1.6 20.8 1.6 20.8 1.2 1.6 1.2 10.8 1.2 15.2.8-4 2.8-8.4 2.8-8.4 1.2-2.4 1.6-5.2 2.4-8.4.4 0 .4 0 .8.4 2.4 1.6 2.4 6.4 0 10.8",
    style: {
      fill: "#ffd05b"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M142 300.4c-.8-1.6-5.2.8-5.2.8.4-3.2-1.2-10.4-1.2-10.4-.8 2.4-3.6 2.8-3.6 2.8.4-2.4-2.4-8.8-2.4-8.8.4 2.8-3.6 5.6-3.6 5.6.8-2.4-4.8-10.4-4.8-10.4.8 1.2.4 4.8.4 4.8-2-4.4-7.6-8.4-7.6-8.4 0 1.2-.8 2-1.6 3.2-1.2-2.8-4.4-4-4.8-4.4-.4.4-3.6 1.6-4.8 4.4-.8-.8-1.2-2-1.2-3.2 0 0-5.6 4-7.6 8.4 0 0-.4-3.6.4-4.8 0 0-5.6 8.4-4.8 10.4 0 0-4-2.8-3.6-5.6 0 0-2.8 6.4-2.4 8.8 0 0-2.8-.4-3.6-2.8 0 0-2 7.2-1.2 10.4 0 0-4.4-2.4-5.2-.8 0 0 4 4.4 2 8.4 0 0-1.6 22 3.2 33.6 0 0 2.4 4.4 2.8 8.4 0-4.4-.4-13.6 1.2-15.2 0 0 6.4-11.2 1.6-20.8 0 0 1.2-14.4 17.2-8 0 0 3.2.8 6.4.8l6.4-.8c16.4-6.8 17.2 8 17.2 8-4.8 9.6 1.6 20.8 1.6 20.8.8 1.2.8 10.4.8 14.8.8-4 2.8-8.4 2.8-8.4 4.8-11.6 3.2-33.6 3.2-33.6-2-3.6 2-8 2-8",
    style: {
      fill: "#324a5e"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m340.4 152.8-63.2-32.4h-46.4l-63.2 32.4-4.8 31.2c21.2 27.2 54 44.8 91.2 44.8s70.4-17.6 91.2-44.8z",
    style: {
      fill: "#2b3b4e"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m277.2 120 17.2 19.2-9.6 7.2 12 6.8-42.8 67.6z",
    style: {
      fill: "#324a5e"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m230.8 120-17.2 19.2 9.6 7.2-12 6.8 42.8 67.6z",
    style: {
      fill: "#324a5e"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M277.2 120 254 220.8 230.8 120z",
    style: {
      fill: "#e6e9ee"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m277.2 120.4-14 60.4-9.2 40-9.2-40-14-60.4z",
    style: {
      fill: "#e6e9ee"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m264.8 137.6-4 8.8h-13.6l-4-8.8c5.2-3.2 10.8-2.4 10.8-2.4s5.6-.8 10.8 2.4",
    style: {
      fill: "#f1543f"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m263.2 180.8-9.2 40-9.2-40 2.4-34.4h13.6z",
    style: {
      fill: "#ff7058"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M272.8 109.6c-.8 4-4 12.4-18.8 25.6-12.8-12.4-17.2-20.8-18.4-24.8 5.2 6.8 11.6 11.2 18.4 11.2 7.2-.4 13.6-4.8 18.8-12",
    style: {
      fill: "#f9b54c"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M273.2 106.8s2.4 8.8-19.2 28.4c0 0 13.6-1.6 18.8 12.4 0 0 12.4-26.4.4-40.8M234.8 106.8c-12 14.4 0 40.8 0 40.8 5.2-14 18.8-12.4 18.8-12.4-19.2-18.4-18.8-28.4-18.8-28.4",
    style: {
      fill: "#fff"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M286.4 90c-1.6 2.4-3.6 4.4-5.6 5.2-5.2 14.4-15.2 26.4-26.8 26.4s-21.2-12-26.8-26.4c-2-.8-4.4-2.4-5.6-5.2-2.8-4.4-2.8-9.2 0-10.8.4 0 .4-.4.8-.4q.6 4.8 2.4 8.4s2.4 4.4 2.8 8.4c0-4.4-.4-13.6 1.2-15.2 0 0 6.4-11.2 1.6-20.8 0 0 1.2-14.4 17.2-8 0 0 3.2.8 6.4.8l6.4-.8c16.4-6.8 17.2 8 17.2 8-4.8 9.6 1.6 20.8 1.6 20.8 1.6 1.6 1.2 10.8 1.2 15.2.8-4 2.8-8.4 2.8-8.4 1.2-2.4 1.6-5.2 2.4-8.4.4 0 .4 0 .8.4 2.8 1.6 2.8 6.4 0 10.8",
    style: {
      fill: "#ffd05b"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M288.4 45.2c-.8-1.6-5.2.8-5.2.8.4-3.2-1.2-10.4-1.2-10.4-.8 2.4-3.6 2.8-3.6 2.8.4-2.4-2.4-8.4-2.4-8.4.4 2.8-3.6 5.6-3.6 5.6.8-2.4-4.8-10.4-4.8-10.4.8 1.2.4 4.8.4 4.8-2-4.4-7.6-8.4-7.6-8.4 0 1.2-.8 2-1.6 3.2-1.2-2.8-4.4-4-4.8-4.4-.4.4-3.6 1.6-4.8 4.4-.8-.8-1.2-2-1.2-3.2 0 0-5.6 4-7.6 8.4 0 0-.4-3.6.4-4.8 0 0-5.6 8.4-4.8 10.4 0 0-4-2.8-3.6-5.6 0 0-2.8 6.4-2.4 8.8 0 0-2.8-.4-3.6-2.8 0 0-2 7.2-1.2 10.4 0 0-4.4-2.4-5.2-.8 0 0 4 4.4 2 8.4 0 0-1.6 22 3.2 33.6 0 0 2.4 4.4 2.8 8.4 0-4.4-.4-13.6 1.2-15.2 0 0 6.4-11.2 1.6-20.8 0 0 1.2-14.4 17.2-8 0 0 3.2.8 6.4.8l6.4-.8c16.4-6.8 17.2 8 17.2 8-4.8 9.6 1.6 20.8 1.6 20.8 1.6 1.6 1.2 10.8 1.2 15.2.8-4 2.8-8.4 2.8-8.4 4.8-11.6 3.2-33.6 3.2-33.6-2.4-4.4 1.6-8.8 1.6-8.8",
    style: {
      fill: "#324a5e"
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4NCjxzdmcgaGVpZ2h0PSI4MDBweCIgd2lkdGg9IjgwMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiANCgkgdmlld0JveD0iMCAwIDUwOCA1MDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojRkQ4NDY5OyIgY3g9IjI1NCIgY3k9IjI1NCIgcj0iMjU0Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTI1NCw0ODcuNmMtOTUuNiwwLTE3My42LTc4LTE3My42LTE3My42czc4LTE3My42LDE3My42LTE3My42czE3My42LDc4LDE3My42LDE3My42DQoJUzM0OS42LDQ4Ny42LDI1NCw0ODcuNnogTTI1NCwxNTIuNGMtODkuMiwwLTE2MS42LDcyLjQtMTYxLjYsMTYxLjZTMTY0LjgsNDc1LjYsMjU0LDQ3NS42UzQxNS42LDQwMy4yLDQxNS42LDMxNA0KCVMzNDMuMiwxNTIuNCwyNTQsMTUyLjR6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMkIzQjRFOyIgZD0iTTQ4Ni44LDQwNy42bC02My4yLTMyLjRoLTIzLjJoLTIzLjJMMzE0LDQwNy42bC00LjgsMzEuMmMyMS4yLDI3LjIsNTQsNDQuOCw5MS4yLDQ0LjgNCglzNzAuNC0xNy42LDkxLjItNDQuOEw0ODYuOCw0MDcuNnoiLz4NCjxnPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiMzMjRBNUU7IiBwb2ludHM9IjQyMy42LDM3NS4yIDQ0MS4yLDM5NCA0MzEuMiw0MDEuNiA0NDMuNiw0MDggNDAwLjQsNDc2IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMzI0QTVFOyIgcG9pbnRzPSIzNzcuMiwzNzUuMiAzNjAsMzk0IDM3MCw0MDEuNiAzNTcuNiw0MDggNDAwLjQsNDc2IAkiLz4NCjwvZz4NCjxnPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNFNkU5RUU7IiBwb2ludHM9IjQyMy42LDM3NS4yIDQwMC40LDQ3NiAzNzcuMiwzNzUuMiAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0U2RTlFRTsiIHBvaW50cz0iNDIzLjYsMzc1LjIgNDA5LjYsNDM2IDQwMC40LDQ3NiAzOTEuMiw0MzYgMzc3LjIsMzc1LjIgCSIvPg0KPC9nPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0YxNTQzRjsiIGQ9Ik00MDAuOCwzOTBDNDAwLjgsMzkwLDQwMC40LDM5MCw0MDAuOCwzOTBDNDAwLjQsMzkwLDQwMC40LDM5MCw0MDAuOCwzOTBMNDAwLjgsMzkweiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGMTU0M0Y7IiBkPSJNNDExLjIsMzkyLjhsLTQsOC44aC0xMy42bC00LTguOGM1LjItMy4yLDEwLjgtMi40LDEwLjgtMi40UzQwNiwzODkuNiw0MTEuMiwzOTIuOHoiLz4NCjwvZz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRjcwNTg7IiBwb2ludHM9IjQwOS42LDQzNiA0MDAuNCw0NzYgMzkxLjIsNDM2IDM5My42LDQwMS4yIDQwNy4yLDQwMS4yICIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Y5QjU0QzsiIGQ9Ik00MTkuNiwzNjQuNGMtMC44LDQtNCwxMi40LTE4LjgsMjUuNmMtMTIuOC0xMi40LTE3LjItMjAuOC0xOC40LTI0LjhjNS4yLDYuOCwxMS42LDExLjIsMTguNCwxMS4yDQoJQzQwNy42LDM3Ni40LDQxNC40LDM3MS42LDQxOS42LDM2NC40eiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik00MTkuNiwzNjJjMCwwLDIuNCw4LjgtMTkuMiwyOC40YzAsMCwxMy42LTEuNiwxOC44LDEyLjRDNDE5LjYsNDAyLjgsNDMxLjYsMzc2LDQxOS42LDM2MnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTM4MS4yLDM2MmMtMTIsMTQuNCwwLDQwLjgsMCw0MC44YzUuMi0xNCwxOC44LTEyLjQsMTguOC0xMi40QzM4MS4yLDM3MiwzODEuMiwzNjIsMzgxLjIsMzYyeiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDA1QjsiIGQ9Ik00MzIuOCwzNDQuOGMtMS42LDIuNC0zLjYsNC40LTUuNiw1LjJjLTUuMiwxNC40LTE1LjIsMjYuNC0yNi44LDI2LjRjLTExLjYsMC0yMS4yLTEyLTI2LjgtMjYuNA0KCWMtMi0wLjgtNC40LTIuNC01LjYtNS4yYy0yLjgtNC40LTIuOC05LjIsMC0xMC44YzAuNCwwLDAuNC0wLjQsMC44LTAuNGMwLjQsMy4yLDEuMiw2LDIuNCw4LjRjMCwwLDIuNCw0LjQsMi44LDguNA0KCWMwLTQuNC0wLjQtMTMuNiwxLjItMTUuMmMwLDAsNi40LTExLjIsMS42LTIwLjhjMCwwLDEuMi0xNC40LDE3LjItOGMwLDAsMy4yLDAuOCw2LjQsMC44bDAsMGwwLDBsMCwwbDAsMGMzLjItMC40LDYuNC0wLjgsNi40LTAuOA0KCWMxNi40LTYuOCwxNy4yLDgsMTcuMiw4Yy00LjgsOS42LDEuNiwyMC44LDEuNiwyMC44YzEuNiwxLjYsMS4yLDEwLjgsMS4yLDE1LjJjMC44LTQsMi44LTguNCwyLjgtOC40YzEuMi0yLjQsMS42LTUuMiwyLjQtOC40DQoJYzAuNCwwLDAuNCwwLDAuOCwwLjRDNDM1LjYsMzM1LjYsNDM1LjYsMzQwLjQsNDMyLjgsMzQ0Ljh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMzI0QTVFOyIgZD0iTTQzNC44LDMwMC40Yy0wLjgtMS42LTUuMiwwLjgtNS4yLDAuOGMwLjQtMy4yLTEuMi0xMC40LTEuMi0xMC40Yy0wLjgsMi40LTMuNiwyLjgtMy42LDIuOA0KCWMwLjQtMi40LTIuNC04LjgtMi40LTguOGMwLjQsMi44LTMuNiw1LjYtMy42LDUuNmMwLjgtMi40LTQuOC0xMC40LTQuOC0xMC40YzAuOCwxLjIsMC40LDQuOCwwLjQsNC44Yy0yLTQuNC03LjYtOC40LTcuNi04LjQNCgljMCwxLjItMC44LDItMS42LDMuMmMtMS4yLTIuOC00LjQtNC00LjgtNC40bDAsMGwwLDBsMCwwbDAsMGwwLDBsMCwwbDAsMGwwLDBsMCwwYy0wLjQsMC40LTMuNiwxLjYtNC44LDQuNGMtMC44LTAuOC0xLjItMi0xLjItMy4yDQoJYzAsMC01LjYsNC03LjYsOC40YzAsMC0wLjQtMy42LDAuNC00LjhjMCwwLTUuNiw4LjQtNC44LDEwLjRjMCwwLTQtMi44LTMuNi01LjZjMCwwLTIuOCw2LjQtMi40LDguOGMwLDAtMi44LTAuNC0zLjYtMi44DQoJYzAsMC0yLDcuMi0xLjIsMTAuNGMwLDAtNC40LTIuNC01LjItMC44YzAsMCw0LDQuNCwyLDguNGMwLDAtMS42LDIyLDMuMiwzMy42YzAsMCwyLjQsNC40LDIuOCw4LjRjMC00LjQtMC40LTEzLjYsMS4yLTE1LjINCgljMCwwLDYuNC0xMS4yLDEuNi0yMC44YzAsMCwxLjItMTQuNCwxNy4yLThjMCwwLDMuMiwwLjgsNi40LDAuOGwwLDBsMCwwbDAsMGwwLDBjMy4yLTAuNCw2LjQtMC44LDYuNC0wLjhjMTYuNC02LjgsMTcuMiw4LDE3LjIsOA0KCWMtNC44LDkuNiwxLjYsMjAuOCwxLjYsMjAuOGMxLjYsMS42LDEuMiwxMC44LDEuMiwxNS4yYzAuOC00LDIuOC04LjQsMi44LTguNGM0LjgtMTEuNiwzLjItMzMuNiwzLjItMzMuNg0KCUM0MzAuOCwzMDQuOCw0MzQuOCwzMDAuNCw0MzQuOCwzMDAuNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMyQjNCNEU7IiBkPSJNMTk0LDQwNy42bC02My4yLTMyLjRoLTIzLjJIODQuNGwtNjMuMiwzMi40bC00LjgsMzEuMmMyMS4yLDI3LjIsNTQsNDQuOCw5MS4yLDQ0LjgNCglzNzAuNC0xNy42LDkxLjItNDQuOEwxOTQsNDA3LjZ6Ii8+DQo8Zz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMzI0QTVFOyIgcG9pbnRzPSIxMzAuOCwzNzUuMiAxNDgsMzk0IDEzOCw0MDEuNiAxNTAuNCw0MDggMTA3LjYsNDc2IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMzI0QTVFOyIgcG9pbnRzPSI4NC40LDM3NS4yIDY2LjgsMzk0IDc2LjgsNDAxLjYgNjQuNCw0MDggMTA3LjYsNDc2IAkiLz4NCjwvZz4NCjxnPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNFNkU5RUU7IiBwb2ludHM9IjEzMC44LDM3NS4yIDEwNy42LDQ3NiA4NC40LDM3NS4yIAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRTZFOUVFOyIgcG9pbnRzPSIxMzAuOCwzNzUuMiAxMTYuOCw0MzYgMTA3LjYsNDc2IDk4LjQsNDM2IDg0LjQsMzc1LjIgCSIvPg0KPC9nPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0YxNTQzRjsiIGQ9Ik0xMDcuNiwzOTBMMTA3LjYsMzkwQzEwNy42LDM5MCwxMDcuMiwzOTAsMTA3LjYsMzkwTDEwNy42LDM5MHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjE1NDNGOyIgZD0iTTExOC40LDM5Mi44bC00LDguOGgtMTMuNmwtNC04LjhjNS4yLTMuMiwxMC44LTIuNCwxMC44LTIuNFMxMTIuOCwzODkuNiwxMTguNCwzOTIuOHoiLz4NCjwvZz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRjcwNTg7IiBwb2ludHM9IjExNi44LDQzNiAxMDcuNiw0NzYgOTguNCw0MzYgMTAwLjgsNDAxLjIgMTE0LjQsNDAxLjIgIi8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjlCNTRDOyIgZD0iTTEyNi40LDM2NC40Yy0wLjgsNC00LDEyLjQtMTguOCwyNS42Yy0xMi44LTEyLjQtMTcuMi0yMC44LTE4LjQtMjQuOGM1LjIsNi44LDExLjYsMTEuMiwxOC40LDExLjINCglDMTE0LjgsMzc2LjQsMTIxLjIsMzcxLjYsMTI2LjQsMzY0LjR6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTEyNi40LDM2MmMwLDAsMi40LDguOC0xOS4yLDI4LjRjMCwwLDEzLjYtMS42LDE4LjgsMTIuNEMxMjYuNCw0MDIuOCwxMzguOCwzNzYsMTI2LjQsMzYyeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNODguNCwzNjJjLTEyLDE0LjQsMCw0MC44LDAsNDAuOGM1LjItMTQsMTguOC0xMi40LDE4LjgtMTIuNEM4OCwzNzIsODguNCwzNjIsODguNCwzNjJ6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkZEMDVCOyIgZD0iTTE0MCwzNDQuOGMtMS42LDIuNC0zLjYsNC40LTUuNiw1LjJjLTUuMiwxNC40LTE1LjIsMjYuNC0yNi44LDI2LjRzLTIxLjItMTItMjYuOC0yNi40DQoJYy0yLTAuOC00LjQtMi40LTUuNi01LjJjLTIuOC00LjQtMi44LTkuMiwwLTEwLjhjMC40LDAsMC40LTAuNCwwLjgtMC40YzAuNCwzLjIsMS4yLDYsMi40LDguNGMwLDAsMi40LDQuNCwyLjgsOC40DQoJYzAtNC40LTAuNC0xMy42LDEuMi0xNS4yYzAsMCw2LjQtMTEuMiwxLjYtMjAuOGMwLDAsMS4yLTE0LjQsMTcuMi04YzAsMCwzLjIsMC44LDYuNCwwLjhsMCwwbDAsMGwwLDBsMCwwYzMuMi0wLjQsNi40LTAuOCw2LjQtMC44DQoJYzE2LjQtNi44LDE3LjIsOCwxNy4yLDhjLTQuOCw5LjYsMS42LDIwLjgsMS42LDIwLjhjMS4yLDEuNiwxLjIsMTAuOCwxLjIsMTUuMmMwLjgtNCwyLjgtOC40LDIuOC04LjRjMS4yLTIuNCwxLjYtNS4yLDIuNC04LjQNCgljMC40LDAsMC40LDAsMC44LDAuNEMxNDIuNCwzMzUuNiwxNDIuNCwzNDAuNCwxNDAsMzQ0Ljh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMzI0QTVFOyIgZD0iTTE0MiwzMDAuNGMtMC44LTEuNi01LjIsMC44LTUuMiwwLjhjMC40LTMuMi0xLjItMTAuNC0xLjItMTAuNGMtMC44LDIuNC0zLjYsMi44LTMuNiwyLjgNCgljMC40LTIuNC0yLjQtOC44LTIuNC04LjhjMC40LDIuOC0zLjYsNS42LTMuNiw1LjZjMC44LTIuNC00LjgtMTAuNC00LjgtMTAuNGMwLjgsMS4yLDAuNCw0LjgsMC40LDQuOGMtMi00LjQtNy42LTguNC03LjYtOC40DQoJYzAsMS4yLTAuOCwyLTEuNiwzLjJjLTEuMi0yLjgtNC40LTQtNC44LTQuNGwwLDBsMCwwbDAsMGwwLDBsMCwwbDAsMGwwLDBsMCwwbDAsMGMtMC40LDAuNC0zLjYsMS42LTQuOCw0LjRjLTAuOC0wLjgtMS4yLTItMS4yLTMuMg0KCWMwLDAtNS42LDQtNy42LDguNGMwLDAtMC40LTMuNiwwLjQtNC44YzAsMC01LjYsOC40LTQuOCwxMC40YzAsMC00LTIuOC0zLjYtNS42YzAsMC0yLjgsNi40LTIuNCw4LjhjMCwwLTIuOC0wLjQtMy42LTIuOA0KCWMwLDAtMiw3LjItMS4yLDEwLjRjMCwwLTQuNC0yLjQtNS4yLTAuOGMwLDAsNCw0LjQsMiw4LjRjMCwwLTEuNiwyMiwzLjIsMzMuNmMwLDAsMi40LDQuNCwyLjgsOC40YzAtNC40LTAuNC0xMy42LDEuMi0xNS4yDQoJYzAsMCw2LjQtMTEuMiwxLjYtMjAuOGMwLDAsMS4yLTE0LjQsMTcuMi04YzAsMCwzLjIsMC44LDYuNCwwLjhsMCwwbDAsMGwwLDBsMCwwYzMuMi0wLjQsNi40LTAuOCw2LjQtMC44YzE2LjQtNi44LDE3LjIsOCwxNy4yLDgNCgljLTQuOCw5LjYsMS42LDIwLjgsMS42LDIwLjhjMC44LDEuMiwwLjgsMTAuNCwwLjgsMTQuOGMwLjgtNCwyLjgtOC40LDIuOC04LjRjNC44LTExLjYsMy4yLTMzLjYsMy4yLTMzLjYNCglDMTM4LDMwNC44LDE0MiwzMDAuNCwxNDIsMzAwLjR6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMkIzQjRFOyIgZD0iTTM0MC40LDE1Mi44bC02My4yLTMyLjRIMjU0aC0yMy4ybC02My4yLDMyLjRsLTQuOCwzMS4yYzIxLjIsMjcuMiw1NCw0NC44LDkxLjIsNDQuOA0KCXM3MC40LTE3LjYsOTEuMi00NC44TDM0MC40LDE1Mi44eiIvPg0KPGc+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzMyNEE1RTsiIHBvaW50cz0iMjc3LjIsMTIwIDI5NC40LDEzOS4yIDI4NC44LDE0Ni40IDI5Ni44LDE1My4yIDI1NCwyMjAuOCAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzMyNEE1RTsiIHBvaW50cz0iMjMwLjgsMTIwIDIxMy42LDEzOS4yIDIyMy4yLDE0Ni40IDIxMS4yLDE1My4yIDI1NCwyMjAuOCAJIi8+DQo8L2c+DQo8Zz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRTZFOUVFOyIgcG9pbnRzPSIyNzcuMiwxMjAgMjU0LDIyMC44IDIzMC44LDEyMCAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0U2RTlFRTsiIHBvaW50cz0iMjc3LjIsMTIwLjQgMjYzLjIsMTgwLjggMjU0LDIyMC44IDI0NC44LDE4MC44IDIzMC44LDEyMC40IAkiLz4NCjwvZz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGMTU0M0Y7IiBkPSJNMjU0LDEzNS4yTDI1NCwxMzUuMkwyNTQsMTM1LjJMMjU0LDEzNS4yeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGMTU0M0Y7IiBkPSJNMjY0LjgsMTM3LjZsLTQsOC44aC0xMy42bC00LTguOGM1LjItMy4yLDEwLjgtMi40LDEwLjgtMi40UzI1OS42LDEzNC40LDI2NC44LDEzNy42eiIvPg0KPC9nPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGNzA1ODsiIHBvaW50cz0iMjYzLjIsMTgwLjggMjU0LDIyMC44IDI0NC44LDE4MC44IDI0Ny4yLDE0Ni40IDI2MC44LDE0Ni40ICIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Y5QjU0QzsiIGQ9Ik0yNzIuOCwxMDkuNmMtMC44LDQtNCwxMi40LTE4LjgsMjUuNmMtMTIuOC0xMi40LTE3LjItMjAuOC0xOC40LTI0LjhjNS4yLDYuOCwxMS42LDExLjIsMTguNCwxMS4yDQoJQzI2MS4yLDEyMS4yLDI2Ny42LDExNi44LDI3Mi44LDEwOS42eiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0yNzMuMiwxMDYuOGMwLDAsMi40LDguOC0xOS4yLDI4LjRjMCwwLDEzLjYtMS42LDE4LjgsMTIuNEMyNzIuOCwxNDcuNiwyODUuMiwxMjEuMiwyNzMuMiwxMDYuOHoiDQoJCS8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0yMzQuOCwxMDYuOGMtMTIsMTQuNCwwLDQwLjgsMCw0MC44YzUuMi0xNCwxOC44LTEyLjQsMTguOC0xMi40DQoJCUMyMzQuNCwxMTYuOCwyMzQuOCwxMDYuOCwyMzQuOCwxMDYuOHoiLz4NCjwvZz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkQwNUI7IiBkPSJNMjg2LjQsOTBjLTEuNiwyLjQtMy42LDQuNC01LjYsNS4yYy01LjIsMTQuNC0xNS4yLDI2LjQtMjYuOCwyNi40Yy0xMS42LDAtMjEuMi0xMi0yNi44LTI2LjQNCgljLTItMC44LTQuNC0yLjQtNS42LTUuMmMtMi44LTQuNC0yLjgtOS4yLDAtMTAuOGMwLjQsMCwwLjQtMC40LDAuOC0wLjRjMC40LDMuMiwxLjIsNiwyLjQsOC40YzAsMCwyLjQsNC40LDIuOCw4LjQNCgljMC00LjQtMC40LTEzLjYsMS4yLTE1LjJjMCwwLDYuNC0xMS4yLDEuNi0yMC44YzAsMCwxLjItMTQuNCwxNy4yLThjMCwwLDMuMiwwLjgsNi40LDAuOGwwLDBsMCwwbDAsMGwwLDBjMy4yLTAuNCw2LjQtMC44LDYuNC0wLjgNCgljMTYuNC02LjgsMTcuMiw4LDE3LjIsOGMtNC44LDkuNiwxLjYsMjAuOCwxLjYsMjAuOGMxLjYsMS42LDEuMiwxMC44LDEuMiwxNS4yYzAuOC00LDIuOC04LjQsMi44LTguNGMxLjItMi40LDEuNi01LjIsMi40LTguNA0KCWMwLjQsMCwwLjQsMCwwLjgsMC40QzI4OS4yLDgwLjgsMjg5LjIsODUuNiwyODYuNCw5MHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMzMjRBNUU7IiBkPSJNMjg4LjQsNDUuMmMtMC44LTEuNi01LjIsMC44LTUuMiwwLjhjMC40LTMuMi0xLjItMTAuNC0xLjItMTAuNGMtMC44LDIuNC0zLjYsMi44LTMuNiwyLjgNCglDMjc4LjgsMzYsMjc2LDMwLDI3NiwzMGMwLjQsMi44LTMuNiw1LjYtMy42LDUuNmMwLjgtMi40LTQuOC0xMC40LTQuOC0xMC40YzAuOCwxLjIsMC40LDQuOCwwLjQsNC44Yy0yLTQuNC03LjYtOC40LTcuNi04LjQNCgljMCwxLjItMC44LDItMS42LDMuMmMtMS4yLTIuOC00LjQtNC00LjgtNC40bDAsMGwwLDBsMCwwbDAsMGwwLDBsMCwwbDAsMGwwLDBsMCwwYy0wLjQsMC40LTMuNiwxLjYtNC44LDQuNGMtMC44LTAuOC0xLjItMi0xLjItMy4yDQoJYzAsMC01LjYsNC03LjYsOC40YzAsMC0wLjQtMy42LDAuNC00LjhjMCwwLTUuNiw4LjQtNC44LDEwLjRjMCwwLTQtMi44LTMuNi01LjZjMCwwLTIuOCw2LjQtMi40LDguOGMwLDAtMi44LTAuNC0zLjYtMi44DQoJYzAsMC0yLDcuMi0xLjIsMTAuNGMwLDAtNC40LTIuNC01LjItMC44YzAsMCw0LDQuNCwyLDguNGMwLDAtMS42LDIyLDMuMiwzMy42YzAsMCwyLjQsNC40LDIuOCw4LjRjMC00LjQtMC40LTEzLjYsMS4yLTE1LjINCgljMCwwLDYuNC0xMS4yLDEuNi0yMC44YzAsMCwxLjItMTQuNCwxNy4yLThjMCwwLDMuMiwwLjgsNi40LDAuOGwwLDBsMCwwbDAsMGwwLDBjMy4yLTAuNCw2LjQtMC44LDYuNC0wLjhjMTYuNC02LjgsMTcuMiw4LDE3LjIsOA0KCWMtNC44LDkuNiwxLjYsMjAuOCwxLjYsMjAuOGMxLjYsMS42LDEuMiwxMC44LDEuMiwxNS4yYzAuOC00LDIuOC04LjQsMi44LTguNGM0LjgtMTEuNiwzLjItMzMuNiwzLjItMzMuNg0KCUMyODQuNCw0OS42LDI4OC40LDQ1LjIsMjg4LjQsNDUuMnoiLz4NCjwvc3ZnPg==");

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"sp-team-members/index": 0,
/******/ 			"sp-team-members/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunksp_team_members"] = globalThis["webpackChunksp_team_members"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["sp-team-members/style-index"], () => (__webpack_require__("./src/sp-team-members/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map