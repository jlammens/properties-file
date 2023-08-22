"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.escapeValue=exports.escapeKey=void 0;/**
 * Escape a property key.
 *
 * @param unescapedKey - A property key to be escaped.
 * @param escapeUnicode - Escape unicode characters into ISO-8859-1 compatible encoding?
 *
 * @return The escaped key.
 */var escapeKey=function(a){var b=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1];return escapeContent(a,!0,b,!0)};/**
 * Escape property value.
 *
 * @param unescapedValue - Property value to be escaped.
 * @param escapeUnicode - Escape unicode characters into ISO-8859-1 compatible encoding?
 * @param escapeSpecial - Escape special characters ()=, :, # and !) ?
 *
 * @return The escaped value.
 */exports.escapeKey=escapeKey;var escapeValue=function(a){var b=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],c=!(2<arguments.length&&arguments[2]!==void 0)||arguments[2];return escapeContent(a,!1,b,c)};/**
 * Escape the content from either key or value of a property.
 *
 * @param unescapedContent - The content to escape.
 * @param escapeSpace - Escape spaces?
 * @param escapeUnicode - Escape unicode characters into ISO-8859-1 compatible encoding?
 * @param escapeSpecial - Escape special characters ()=, :, # and !) ?
 *
 * @returns The unescaped content.
 */exports.escapeValue=escapeValue;var escapeContent=function(a,b,c,d){for(var e="",f=a[0],g=0;g<a.length;g++,f=a[g])switch(f){case" ":{e+=b||0===g?"\\ ":" ";break}// Backslash.
case"\\":{e+="\\\\";break}case"\f":{e+="\\f";break}case"\n":{e+="\\n";break}case"\r":{e+="\\r";break}case"\t":{e+="\\t";break}case"=":case":":case"#":case"!":{e+=d?"\\".concat(f):f;break}default:{if(c){var h=f.codePointAt(0);// Can never be `undefined`.
if(32>h||126<h){e+="\\u".concat(h.toString(16).padStart(4,"0"));break}}// Non-escapable characters.
e+=f;break}}return e};