/**
 * Object representing a line from the content of .properties file.
 */
export declare class PropertyLine {
    /** The line content, minus the trailing \ that identifies that the line is continuing. */
    content: string;
    /** True if the line is continuing to the next line, otherwise false. */
    isContinuing: boolean;
    /** True if the line is blank, otherwise false. */
    isBlank: boolean;
    /** True if the line is a comment, otherwise false. */
    isComment: boolean;
    /** Is the line object a continuation from a previous line? */
    isMultiline: boolean;
    /**
     * Create a new line object.
     *
     * @param line - The raw content of a line.
     * @param isMultiline - Is the line spreading on multiple lines?
     */
    constructor(line: string, isMultiline: boolean);
}
