"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Properties",{enumerable:!0,get:function get(){return _properties.Properties}}),exports.getProperties=void 0;var _properties=require("./properties"),getProperties=function(a){return new _properties.Properties(a).toObject()};/**
 * A key-value pair object.
 */ /**
 * Converts the content of a `.properties` file to a key-value pair object.
 *
 * @param content - The content of a `.properties` file.
 *
 * @returns A key/value object representing the content of a `.properties` file.
 */exports.getProperties=getProperties;