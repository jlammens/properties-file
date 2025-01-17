/// <reference types="../properties-file" />
/**
 * Webpack file loader for `.properties` files.
 *
 * @param content - the content of a `.properties` file.
 *
 * @returns A Webpack file loader string containing the content of  a `.properties` file.
 */
declare const webpackLoader: (content: string) => string;
export default webpackLoader;
