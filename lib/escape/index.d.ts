/**
 * Escape a property key.
 *
 * @param unescapedKey - A property key to be escaped.
 * @param escapeUnicode - Escape unicode characters into ISO-8859-1 compatible encoding?
 *
 * @return The escaped key.
 */
export declare const escapeKey: (unescapedKey: string, escapeUnicode?: boolean) => string;
/**
 * Escape property value.
 *
 * @param unescapedValue - Property value to be escaped.
 * @param escapeUnicode - Escape unicode characters into ISO-8859-1 compatible encoding?
 * @param escapeSpecial - Escape special characters ()=, :, # and !) ?
 *
 * @return The escaped value.
 */
export declare const escapeValue: (unescapedValue: string, escapeUnicode?: boolean, escapeSpecial?: boolean) => string;
