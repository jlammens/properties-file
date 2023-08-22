"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.escapeValue=exports.escapeKey=void 0;/**
 * Escape a property key.
 *
 * @param unescapedKey - A property key to be escaped.
 * @param escapeUnicode - Escape unicode characters into ISO-8859-1 compatible encoding?
 *
 * @return The escaped key.
 */var escapeKey=function(a){var b=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1];return escapeContent(a,!0,b)};/**
 * Escape property value.
 *
 * @param unescapedValue - Property value to be escaped.
 * @param escapeUnicode - Escape unicode characters into ISO-8859-1 compatible encoding?
 *
 * @return The escaped value.
 */exports.escapeKey=escapeKey;var escapeValue=function(a){var b=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1];return escapeContent(a,!1,b)};/**
 * Escape the content from either key or value of a property.
 *
 * @param unescapedContent - The content to escape.
 * @param escapeSpace - Escape spaces?
 * @param escapeUnicode - Escape unicode characters into ISO-8859-1 compatible encoding?
 *
 * @returns The unescaped content.
 */exports.escapeValue=escapeValue;var escapeContent=function(a,b,c){for(var d="",e=a[0],f=0;f<a.length;f++,e=a[f])switch(e){case" ":{d+=b||0===f?"\\ ":" ";break}// Backslash.
case"\\":{d+="\\\\";break}case"\f":{d+="\\f";break}case"\n":{d+="\\n";break}case"\r":{d+="\\r";break}case"\t":{d+="\\t";break}case"=":case":":case"#":case"!":{d+="\\".concat(e);break}default:{if(c){var g=e.codePointAt(0);// Can never be `undefined`.
if(32>g||126<g){d+="\\u".concat(g.toString(16).padStart(4,"0"));break}}// Non-escapable characters.
d+=e;break}}return d};