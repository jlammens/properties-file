/// <reference types="./properties-file" />
/// <reference types="node" />
export { Properties } from './properties';
/**
 * A key-value pair object.
 */
export type KeyValuePairObject = {
    [key: string]: string;
};
/**
 * Converts the content of a `.properties` file to a key-value pair object.
 *
 * @param content - The content of a `.properties` file.
 *
 * @returns A key/value object representing the content of a `.properties` file.
 */
export declare const getProperties: (content: string | Buffer) => KeyValuePairObject;
