import { Properties } from '../properties';
/** The default separator between keys and values. */
export declare const DEFAULT_SEPARATOR = "=";
/** The default character used as comment delimiter. */
export declare const DEFAULT_COMMENT_DELIMITER = "#";
/** Characters that can be used as key-value pair separators. */
export type KeyValuePairSeparator = ' ' | ':' | '=';
/** Characters that can be used as comment delimiters. */
export type CommentDelimiter = '#' | '!';
/** Options on the `Properties.insert` method. */
export type InsertOptions = {
    /** The name of the key to insert before or after. If the key not found, the new property will not be inserted. */
    referenceKey?: string;
    /** The position of the insertion related to the `referenceKey` (default is `after`) */
    position?: 'before' | 'after';
    /** Escape unicode characters into ISO-8859-1 compatible encoding? */
    escapeUnicode?: boolean;
    /** The key/value separator character. */
    separator?: KeyValuePairSeparator;
    /** A comment to insert before. */
    comment?: string;
    /** The comment's delimiter. */
    commentDelimiter?: CommentDelimiter;
    /** Escape special characters in values */
    escapeSpecial?: boolean;
};
/** Options on the `Properties.insertComment` method. */
export type InsertCommentOptions = {
    /** The name of the key to insert before or after. If the key not found, the new property will not be inserted. */
    referenceKey?: string;
    /** The position of the insertion related to the `referenceKey` (default is `after`) */
    position?: 'before' | 'after';
    /** The comment's delimiter. */
    commentDelimiter?: CommentDelimiter;
};
/** Options on the `Properties.update` method. */
export type UpdateOptions = {
    /** Optionally replace the existing value with a new value. */
    newValue?: string;
    /** Optionally replace the existing key with a new key name. */
    newKey?: string;
    /** Escape unicode characters into ISO-8859-1 compatible encoding? */
    escapeUnicode?: boolean;
    /** A key/value separator character. */
    separator?: ' ' | ':' | '=';
    /** Optionally insert a new comment, or replace the existing one (including white-space characters). */
    newComment?: string;
    /** The comment's delimiter. */
    commentDelimiter?: CommentDelimiter;
    /** Escape special characters in values */
    escapeSpecial?: boolean;
};
/** Options on the `Properties.upsert` method. */
export type UpsertOptions = {
    /** Escape unicode characters into ISO-8859-1 compatible encoding? */
    escapeUnicode?: boolean;
    /** The key/value separator character. */
    separator?: KeyValuePairSeparator;
    /** A comment to insert before. */
    comment?: string;
    /** The comment's delimiter. */
    commentDelimiter?: CommentDelimiter;
    /** Escape special characters in values */
    escapeSpecial?: boolean;
};
/**
 * A .properties file editor.
 */
export declare class PropertiesEditor extends Properties {
    /**
     * Create `PropertiesEditor` object.
     *
     * @param content - The content of a `.properties` file.
     */
    constructor(content: string);
    /**
     * Insert a new property in the existing object (by default it will be at the end).
     *
     * @param key - A property key (unescaped).
     * @param value - A property value (unescaped).
     * @param options - Additional options.
     *
     * @returns True if the key was inserted, otherwise false.
     */
    insert(key: string, value: string, options?: InsertOptions): boolean;
    /**
     * Insert a new comment in the existing object (by default it will be at the end).
     *
     * @param comment - The comment to add.
     * @param options - Additional options.
     *
     * @returns True if the comment was inserted, otherwise false.
     */
    insertComment(comment: string, options?: InsertCommentOptions): boolean;
    /**
     * Delete the last occurrence of a given key from the existing object.
     *
     * @param key - The name of the key to delete.
     * @param deleteCommentsAndWhiteSpace - By default, comments and white-space characters before the key will be deleted.
     *
     * @returns True if the key was deleted, otherwise false.
     */
    delete(key: string, deleteCommentsAndWhiteSpace?: boolean): boolean;
    /**
     * Restore the original newline characters of a key.
     *
     * @param property - A property object.
     *
     * @returns The key with its original newlines characters restored.
     */
    private getKeyWithNewlines;
    /**
     * Restore the original newline characters of a value.
     *
     * @param property - A property object.
     *
     * @returns The value with its original newlines characters restored.
     */
    private getValueWithNewlines;
    /**
     * Update the last occurrence of a given key from the existing object.
     *
     * @param key - The name of the key to update.
     * @param options - Additional options.
     *
     * @returns True if the key was updated, otherwise false.
     */
    update(key: string, options?: UpdateOptions): boolean;
    /**
     * Update a key if it exist, otherwise add it at the end.
     *
     * @param key - A property key (unescaped).
     * @param value - A property value (unescaped).
     * @param options - Additional options.
     *
     * @returns True if the key was updated or inserted, otherwise false.
     */
    upsert(key: string, value: string, options?: UpsertOptions): boolean;
}
