"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.unescapeContent=void 0;/**
 * Unescape the content from either key or value of a property.
 *
 * @param escapedContent - The content to unescape.
 *
 * @returns The unescaped content.
 *
 * @throws {@link Error}
 * This exception is thrown if malformed escaped unicode characters are present.
 */var unescapeContent=function(a){for(var b="",c=a[0],d=0;d<a.length;d++,c=a[d])if("\\"===c){var e=a[d+1];switch(e){case"f":{b+="\f",d++;break}case"n":{b+="\n",d++;break}case"r":{b+="\r",d++;break}case"t":{b+="\t",d++;break}case"u":{// Unicode character.
var f=a.slice(d+2,d+6);if(!/[\da-f]{4}/i.test(f))// Code point can only be within Unicode's Multilingual Plane (BMP).
throw new Error("malformed escaped unicode characters '\\u".concat(f,"'"));b+=String.fromCodePoint(Number.parseInt(f,16)),d+=5;break}default:b+=e,d++}}else// When there is \, simply add the character.
b+=c;return b};exports.unescapeContent=unescapeContent;