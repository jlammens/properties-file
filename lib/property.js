"use strict";var _unescape=require("./unescape");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Property=void 0;function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _wrapRegExp(){function a(b,c,e){var f=new RegExp(b,c);return d.set(f,e||d.get(b)),_setPrototypeOf(f,a.prototype)}function b(a,b){var c=d.get(b);return Object.keys(c).reduce(function(b,d){var e=c[d];if("number"==typeof e)b[d]=a[e];else{for(var f=0;void 0===a[e[f]]&&f+1<e.length;)f++;b[d]=a[e[f]]}return b},Object.create(null))}_wrapRegExp=function(b,c){return new a(b,void 0,c)};var c=RegExp.prototype,d=new WeakMap;return _inherits(a,RegExp),a.prototype.exec=function(a){var d=c.exec.call(this,a);if(d){d.groups=b(d,this);var e=d.indices;e&&(e.groups=b(e,this))}return d},a.prototype[Symbol.replace]=function(a,e){if("string"==typeof e){var f=d.get(this);return c[Symbol.replace].call(this,a,e.replace(/\$<([^>]+)>/g,function(a,b){var c=f[b];return"$"+(Array.isArray(c)?c.join("$"):c)}))}if("function"==typeof e){var g=this;return c[Symbol.replace].call(this,a,function(){var a=arguments;return"object"!=_typeof(a[a.length-1])&&(a=[].slice.call(a)).push(b(a,g)),e.apply(this,a)})}return c[Symbol.replace].call(this,a,e)},_wrapRegExp.apply(this,arguments)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,_toPropertyKey(c.key),c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}function _defineProperty(a,b,c){return b=_toPropertyKey(b),b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _toPropertyKey(a){var b=_toPrimitive(a,"string");return"symbol"===_typeof(b)?b:b+""}function _toPrimitive(a,b){if("object"!==_typeof(a)||null===a)return a;var c=a[Symbol.toPrimitive];if(c!==void 0){var d=c.call(a,b||"default");if("object"!==_typeof(d))return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}/**
 * Object representing a property (key/value).
 */var Property=/*#__PURE__*/function(){/** The line number at which the property starts. */ /** The line number at which the property ends. */ /** The previous property object if it exists. */ /** The next property object if it exists. */ /**
   * Create a new property object.
   *
   * @param propertyLine - A property line object.
   * @param startingLineNumber - The line number at which the property starts.
   */function a(b,c,d){_classCallCheck(this,a),_defineProperty(this,"key",""),_defineProperty(this,"escapedKey",""),_defineProperty(this,"hasNoKey",!1),_defineProperty(this,"hasMultilineKey",!1),_defineProperty(this,"keyCollisionLines",[]),_defineProperty(this,"hasKeyCollisions",!1),_defineProperty(this,"value",""),_defineProperty(this,"escapedValue",""),_defineProperty(this,"hasNoValue",!1),_defineProperty(this,"newlinePositions",[]),this.linesContent=b.content,this.startingLineNumber=c,this.endingLineNumber=c,this.previousProperty=d,null===d||void 0===d?void 0:d.setNextProperty(this)}/**
   * Set the next property object.
   *
   * @param property - The next property object
   */return _createClass(a,[{key:"setNextProperty",value:function setNextProperty(a){this.nextProperty=a}/**
   * Add the a line to a multiline property object.
   *
   * @param propertyLine - A property line object.
   */},{key:"addLine",value:function addLine(a){0<this.linesContent.length&&(this.newlinePositions.push(this.linesContent.length),this.endingLineNumber++),this.linesContent+=a.content}/**
   * Set the property's key and value.
   */},{key:"setKeyAndValue",value:function setKeyAndValue(){this.findSeparator(),void 0!==this.separatorPosition&&void 0!==this.separatorLength?(!this.hasNoKey&&(this.escapedKey=this.linesContent.slice(0,this.separatorPosition),this.key=this.unescapeLine(this.escapedKey,this.startingLineNumber)),!this.hasNoValue&&(this.escapedValue=this.linesContent.slice(this.separatorPosition+this.separatorLength),this.value=this.unescapeLine(this.escapedValue,this.startingLineNumber))):this.hasNoValue&&(this.escapedKey=this.linesContent,this.key=this.unescapeLine(this.escapedKey,this.startingLineNumber))}/**
   * Unescape the content from either key or value of a property.
   *
   * @param escapedContent - The content to unescape.
   * @param startingLineNumber - The starting line number of the content being unescaped.
   *
   * @returns The unescaped content.
   *
   * @throws {@link Error}
   * This exception is thrown if malformed escaped unicode characters are present.
   */},{key:"unescapeLine",value:function unescapeLine(a,b){try{return(0,_unescape.unescapeContent)(a)}catch(a){throw new Error("".concat(a.message," in property starting at line ").concat(b))}}/**
   * Find the character separating the key from the value.
   */},{key:"findSeparator",value:function findSeparator(){// If the separator was already found, skip.
if(!(this.hasNoKey||this.hasNoValue||this.separatorPosition)){for(var a=this.linesContent[0],b=0;b<this.linesContent.length;b++,a=this.linesContent[b]){var c;// If the character is not a separator, check the next one.
if(/[\t\f :=]/.test(a)){// Check if the separator might be escaped.
var d=b?this.linesContent.slice(0,b):"";if(0<d.length){var e=d.match(/*#__PURE__*/_wrapRegExp(/(\\+)$/,{backslashes:1}));if(null!==e&&void 0!==e&&e.groups){var f=!!(e.groups.backslashes.length%2);if(f)// If the separator is escaped, check the next character.
continue}}var g="";this.separatorPosition=b;// Check if the separator starts with a whitespace.
var h=this.linesContent.slice(b),i=h.match(/*#__PURE__*/_wrapRegExp(/^([\t\n\v\f\r ]+)/,{whitespace:1})),j=(null===i||void 0===i||null===(c=i.groups)||void 0===c?void 0:c.whitespace)||"";// All white-space characters, excluding non-breaking spaces.
// If there is a whitespace, move to the next character.
// Check if there is an equal or colon character.
if(0<j.length&&(g+=j,h=h.slice(j.length)),/[:=]/.test(h[0])){var k;g+=h[0],h=h.slice(1);// If an equal or colon character was found, try to get trailing whitespace.
var l=h.match(/*#__PURE__*/_wrapRegExp(/^([\t\n\v\f\r ]+)/,{whitespace:1})),m=(null===l||void 0===l||null===(k=l.groups)||void 0===k?void 0:k.whitespace)||"";g+=m}this.separatorLength=g.length,this.valuePosition=this.separatorPosition+this.separatorLength,this.separator=this.linesContent.slice(this.separatorPosition,this.separatorPosition+this.separatorLength),b||(this.hasNoKey=!0);break}}void 0===this.separatorPosition?this.hasNoValue=!0:0<this.newlinePositions.length&&this.newlinePositions[0]<this.separatorPosition&&(this.hasMultilineKey=!0)}}}]),a}();exports.Property=Property;