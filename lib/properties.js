"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getFirstEolCharacter=exports.Properties=exports.KeyCollisions=exports.DEFAULT_END_OF_LINE_CHARACTER=exports.BOM_CODE_POINT=exports.BOM=void 0;var _property=require("./property"),_propertyLine=require("./property-line");function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(a,b){var c=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=c){var d,e,f,g,h=[],i=!0,j=!1;try{if(f=(c=c.call(a)).next,0===b){if(Object(c)!==c)return;i=!1}else for(;!(i=(d=f.call(c)).done)&&(h.push(d.value),h.length!==b);i=!0);}catch(a){j=!0,e=a}finally{try{if(!i&&null!=c.return&&(g=c.return(),Object(g)!==g))return}finally{if(j)throw e}}return h}}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _createForOfIteratorHelper(a,b){var c="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!c){if(Array.isArray(a)||(c=_unsupportedIterableToArray(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function n(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function e(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function s(){c=c.call(a)},n:function n(){var a=c.next();return g=a.done,a},e:function e(a){h=!0,f=a},f:function f(){try{g||null==c.return||c.return()}finally{if(h)throw f}}}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,_toPropertyKey(c.key),c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}function _defineProperty(a,b,c){return b=_toPropertyKey(b),b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _toPropertyKey(a){var b=_toPrimitive(a,"string");return"symbol"===_typeof(b)?b:b+""}function _toPrimitive(a,b){if("object"!==_typeof(a)||null===a)return a;var c=a[Symbol.toPrimitive];if(c!==void 0){var d=c.call(a,b||"default");if("object"!==_typeof(d))return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}/**
 * Byte-order mark.
 */var BOM="\uFEFF";exports.BOM="\uFEFF";var BOM_CODE_POINT="\uFEFF".codePointAt(0);/** The default end of line character. */exports.BOM_CODE_POINT=65279;var DEFAULT_END_OF_LINE_CHARACTER="\n";/**
 * Get the first end of line (EOL) character from multiline content.
 *
 * @param content - The content of a `.properties` file.
 *
 * @returns The multiline content's first end of line (EOL) character.
 */exports.DEFAULT_END_OF_LINE_CHARACTER="\n";var getFirstEolCharacter=function(a){var b=a.indexOf("\n");return 0>b?void 0:"".concat("\r"===a[b-1]?"\r":"","\n")};/**
 * A class representing the content of a .properties file.
 */exports.getFirstEolCharacter=getFirstEolCharacter;var Properties=/*#__PURE__*/function(){/**
   * Create `Properties` object.
   *
   * @param content - The content of a `.properties` file.
   */function a(b){var c;_classCallCheck(this,a),_defineProperty(this,"collection",[]),_defineProperty(this,"keyLineNumbers",{});var d="string"==typeof b?b:b.toString();this.hasBom=d.codePointAt(0)===BOM_CODE_POINT,this.eolCharacter=null!==(c=getFirstEolCharacter(d))&&void 0!==c?c:DEFAULT_END_OF_LINE_CHARACTER,this.lines=(this.hasBom?d.slice(1):d).split(/\r?\n/),this.parseLines()}/**
   * Parse the `.properties` content line by line.
   */return _createClass(a,[{key:"parseLines",value:function parseLines(){this.collection=[],this.keyLineNumbers={};/** Line number while parsing properties file content. */var a,b,c,d=0,e=_createForOfIteratorHelper(this.lines);/** The current property object being parsed. */ /** The previous property object that was parsed. */try{for(e.s();!(c=e.n()).done;){var f=c.value;d++;var g=new _propertyLine.PropertyLine(f,!!a);if(!a){// Check if the line is a new property.
if(g.isComment||g.isBlank)continue;// Skip line if its a comment or blank.
// The line is a new property.
if(a=new _property.Property(g,d,b),g.isContinuing)continue;// Continue parsing the next line.
}else if(a.addLine(g),g.isContinuing)continue;// If the line does not continue, add the property to the collection.
this.addToCollection(a),b=a,a=void 0}}catch(a){e.e(a)}finally{e.f()}}/**
   * Add a property object into a properties object collection.
   *
   * @param property - A property object, or undefined.
   *
   * @returns Undefined so that we conveniently overwrite the property object.
   */},{key:"addToCollection",value:function addToCollection(a){var b;a.setKeyAndValue(),null!==(b=this.keyLineNumbers[a.key])&&void 0!==b&&b.length?(this.keyLineNumbers[a.key].push(a.startingLineNumber),a.hasKeyCollisions=!0,a.keyCollisionLines=this.keyLineNumbers[a.key],this.collection=this.collection.filter(function(b){return b.key!==a.key})):this.keyLineNumbers[a.key]=[a.startingLineNumber],this.collection.push(a)}/**
   * Get keys that have collisions (more than one occurrence).
   */},{key:"getKeyCollisions",value:function getKeyCollisions(){for(var a=[],b=0,c=Object.entries(this.keyLineNumbers);b<c.length;b++){var d=_slicedToArray(c[b],2),e=d[0],f=d[1];1<f.length&&a.push(new KeyCollisions(e,f))}return a}/**
   * Get the key/value object representing the properties.
   *
   * @returns A key/value object representing the properties.
   */},{key:"toObject",value:function toObject(){var a={};return this.collection.forEach(function(b){a[b.key]=b.value}),a}/**
   * Format the object in `.properties`.
   *
   * @param endOfLineCharacter - The character used for end of lines.
   *
   * @returns The object in `.properties` format.
   */},{key:"format",value:function format(a){return"".concat(this.hasBom?BOM:"").concat(this.lines.join(a||this.eolCharacter))}}]),a}();/**
 * Object associating keys with their line numbers.
 */exports.Properties=Properties;/**
 * A class representing key within a .properties file that had collisions (more than one occurrence).
 */var KeyCollisions=/*#__PURE__*/function(){/** The key with collisions. */ /** The starting line numbers where collisions are found. */ /**
   * Create a new key collision object.
   *
   * @param key - The key with collisions.
   * @param startingLineNumbers - The starting line numbers where collisions are found.
   */function a(b,c){_classCallCheck(this,a),this.key=b,this.startingLineNumbers=c}/**
   * Get the number of the line from which the value will be used.
   */return _createClass(a,[{key:"getApplicableLineNumber",value:function getApplicableLineNumber(){return this.startingLineNumbers.slice(-1)[0]}}]),a}();exports.KeyCollisions=KeyCollisions;