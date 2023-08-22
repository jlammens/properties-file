"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.PropertiesEditor=exports.DEFAULT_SEPARATOR=exports.DEFAULT_COMMENT_DELIMITER=void 0;var _escape=require("../escape"),_properties=require("../properties");function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _iterableToArray(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,_toPropertyKey(c.key),c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}function _toPropertyKey(a){var b=_toPrimitive(a,"string");return"symbol"===_typeof(b)?b:b+""}function _toPrimitive(a,b){if("object"!==_typeof(a)||null===a)return a;var c=a[Symbol.toPrimitive];if(c!==void 0){var d=c.call(a,b||"default");if("object"!==_typeof(d))return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=_getPrototypeOf(a);if(b){var e=_getPrototypeOf(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(a,b){if(b&&("object"===_typeof(b)||"function"==typeof b))return b;if(void 0!==b)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}/** The default separator between keys and values. */var DEFAULT_SEPARATOR="=";/** The default character used as comment delimiter. */exports.DEFAULT_SEPARATOR="=";var DEFAULT_COMMENT_DELIMITER="#";/** Characters that can be used as key-value pair separators. */ /** Characters that can be used as comment delimiters. */ /** Options on the `Properties.insert` method. */ /** Options on the `Properties.insertComment` method. */ /** Options on the `Properties.update` method. */ /** Options on the `Properties.upsert` method. */exports.DEFAULT_COMMENT_DELIMITER="#";/**
 * A .properties file editor.
 */var PropertiesEditor=/*#__PURE__*/function(a){/**
   * Create `PropertiesEditor` object.
   *
   * @param content - The content of a `.properties` file.
   */function b(a){return _classCallCheck(this,b),c.call(this,a)}/**
   * Insert a new property in the existing object (by default it will be at the end).
   *
   * @param key - A property key (unescaped).
   * @param value - A property value (unescaped).
   * @param options - Additional options.
   *
   * @returns True if the key was inserted, otherwise false.
   */_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"insert",value:function insert(a,b,c){var d=(null===c||void 0===c?void 0:c.escapeUnicode)||!1,e=(null===c||void 0===c?void 0:c.escapeSpecial)||!0,f=null!==c&&void 0!==c&&c.separator?" "===c.separator?" ":" ".concat(c.separator," "):" ".concat(DEFAULT_SEPARATOR," ").replace("  "," "),g=null===c||void 0===c?void 0:c.referenceKey,h=(null===c||void 0===c?void 0:c.position)||"after",i=a.split(/\r?\n/).map(function(a){return(0,_escape.escapeKey)(a,d)}).join("\\\n"),j=b.split(/\r?\n/).map(function(a){return(0,_escape.escapeValue)(a,d,e)}).join("\\\n"),k="".concat((null===c||void 0===c?void 0:c.commentDelimiter)||DEFAULT_COMMENT_DELIMITER," "),l=void 0===(null===c||void 0===c?void 0:c.comment)?"":"".concat("".concat(k).concat(c.comment).split(/\r?\n/).join("\n".concat(k)),"\n"),m="".concat(l).concat(i).concat(f).concat(j).split(/\n/);// Allow multiline keys.
// Allow multiline values.
// Allow multiline comments.
if(void 0===g){var n;return(n=this.lines).push.apply(n,_toConsumableArray(m)),this.parseLines(),!0}// Find the last occurrence of the reference key.
var o=_toConsumableArray(this.collection).reverse().find(function(a){return a.key===g});// Insert the new property when a reference key defined only when found.
if(o){var p,q,r="after"===h?o.endingLineNumber:null!==(p=null===(q=o.previousProperty)||void 0===q?void 0:q.endingLineNumber)&&void 0!==p?p:0;return this.lines=[].concat(_toConsumableArray(this.lines.slice(0,r)),_toConsumableArray(m),_toConsumableArray(this.lines.slice(r))),this.parseLines(),!0}return!1}/**
   * Insert a new comment in the existing object (by default it will be at the end).
   *
   * @param comment - The comment to add.
   * @param options - Additional options.
   *
   * @returns True if the comment was inserted, otherwise false.
   */},{key:"insertComment",value:function insertComment(a,b){var c=null===b||void 0===b?void 0:b.referenceKey,d=(null===b||void 0===b?void 0:b.position)||"after",e="".concat((null===b||void 0===b?void 0:b.commentDelimiter)||DEFAULT_COMMENT_DELIMITER," "),f="".concat(e).concat(a).replace(/\r?\n/g,"\n".concat(e)).split(/\n/);// Allow multiline comments.
if(void 0===c){var g;return(g=this.lines).push.apply(g,_toConsumableArray(f)),this.parseLines(),!0}// Find the last occurrence of the reference key.
var h=_toConsumableArray(this.collection).reverse().find(function(a){return a.key===c});// Insert the new comment when a reference key defined only when found.
if(h){var i,j,k="after"===d?h.endingLineNumber:null!==(i=null===(j=h.previousProperty)||void 0===j?void 0:j.endingLineNumber)&&void 0!==i?i:0;return this.lines=[].concat(_toConsumableArray(this.lines.slice(0,k)),_toConsumableArray(f),_toConsumableArray(this.lines.slice(k))),this.parseLines(),!0}return!1}/**
   * Delete the last occurrence of a given key from the existing object.
   *
   * @param key - The name of the key to delete.
   * @param deleteCommentsAndWhiteSpace - By default, comments and white-space characters before the key will be deleted.
   *
   * @returns True if the key was deleted, otherwise false.
   */},{key:"delete",value:function _delete(a){var b=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],c=_toConsumableArray(this.collection).reverse().find(function(b){return b.key===a});// Find the last occurrence of the key.
if(c){var d,e,f=b?null!==(d=null===(e=c.previousProperty)||void 0===e?void 0:e.endingLineNumber)&&void 0!==d?d:0:c.startingLineNumber-1,g=c.endingLineNumber;return this.lines=[].concat(_toConsumableArray(this.lines.slice(0,f)),_toConsumableArray(this.lines.slice(g))),this.parseLines(),!0}return!1}/**
   * Restore the original newline characters of a key.
   *
   * @param property - A property object.
   *
   * @returns The key with its original newlines characters restored.
   */},{key:"getKeyWithNewlines",value:function getKeyWithNewlines(a){return 0===a.newlinePositions.length?a.key:// eslint-disable-next-line unicorn/no-array-reduce
_toConsumableArray(a.key).reduce(function(b,c,d){return"".concat(b).concat(a.newlinePositions.includes(d)?"\n":"").concat(c)},"")}/**
   * Restore the original newline characters of a value.
   *
   * @param property - A property object.
   *
   * @returns The value with its original newlines characters restored.
   */},{key:"getValueWithNewlines",value:function getValueWithNewlines(a){return 0===a.newlinePositions.length||void 0===a.valuePosition?a.value:// eslint-disable-next-line unicorn/no-array-reduce
_toConsumableArray(a.value).reduce(function(b,c,d){return"".concat(b).concat(a.newlinePositions.includes(d+a.valuePosition)?"\n":"").concat(c)},"")}/**
   * Update the last occurrence of a given key from the existing object.
   *
   * @param key - The name of the key to update.
   * @param options - Additional options.
   *
   * @returns True if the key was updated, otherwise false.
   */},{key:"update",value:function update(a,b){var c,d,e,f,g=_toConsumableArray(this.collection).reverse().find(function(b){return b.key===a});// Find the last occurrence of the key to update.
if(!g||!b)return!1;var h=b.escapeUnicode||!1,i=(null===b||void 0===b?void 0:b.escapeSpecial)||!0,j=b.separator?" "===b.separator?" ":" ".concat(b.separator," "):g.separator||" ".concat(DEFAULT_SEPARATOR," ").replace("  "," "),k=(null!==(c=b.newKey)&&void 0!==c?c:this.getKeyWithNewlines(g)).split(/\r?\n/).map(function(a){return(0,_escape.escapeKey)(a,h)}).join("\\\n"),l=(null!==(d=b.newValue)&&void 0!==d?d:this.getValueWithNewlines(g)).split(/\r?\n/).map(function(a){return(0,_escape.escapeValue)(a,h,i)}).join("\\\n"),m="".concat(b.commentDelimiter||DEFAULT_COMMENT_DELIMITER," "),n=void 0===b.newComment?"":"".concat("".concat(m).concat(b.newComment).split(/\r?\n/).join("\n".concat(m)),"\n"),o="".concat(n).concat(k).concat(j).concat(l).split(/\n/);// Allow multiline keys.
// Allow multiline values.
// Allow multiline comments.
// Replace the existing property with the new one.
return this.lines=[].concat(_toConsumableArray(this.lines.slice(0,void 0===b.newComment?g.startingLineNumber-1:null!==(e=null===(f=g.previousProperty)||void 0===f?void 0:f.endingLineNumber)&&void 0!==e?e:0)),_toConsumableArray(o),_toConsumableArray(this.lines.slice(g.endingLineNumber))),this.parseLines(),!0}/**
   * Update a key if it exist, otherwise add it at the end.
   *
   * @param key - A property key (unescaped).
   * @param value - A property value (unescaped).
   * @param options - Additional options.
   *
   * @returns True if the key was updated or inserted, otherwise false.
   */},{key:"upsert",value:function upsert(a,b,c){return this.keyLineNumbers[a]?this.update(a,{newValue:b,newComment:null===c||void 0===c?void 0:c.comment,commentDelimiter:null===c||void 0===c?void 0:c.commentDelimiter,separator:null===c||void 0===c?void 0:c.separator,escapeUnicode:null===c||void 0===c?void 0:c.escapeUnicode,escapeSpecial:null===c||void 0===c?void 0:c.escapeSpecial}):this.insert(a,b,c)}}]),b}(_properties.Properties);exports.PropertiesEditor=PropertiesEditor;