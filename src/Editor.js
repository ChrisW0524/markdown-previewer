import React from "react";

export const Editor = (props) => {
    const { setMarkup } = props;

    const defaultMarkup =
        "# Markdown syntax guide\n" +
        "\n" +
        "## Headers\n" +
        "\n" +
        "# This is a Heading h1\n" +
        "## This is a Heading h2 \n" +
        "###### This is a Heading h6\n" +
        "\n" +
        "## Emphasis\n" +
        "\n" +
        "*This text will be italic*  \n" +
        "_This will also be italic_\n" +
        "\n" +
        "**This text will be bold**  \n" +
        "__This will also be bold__\n" +
        "\n" +
        "_You **can** combine them_\n" +
        "\n" +
        "## Lists\n" +
        "\n" +
        "### Unordered\n" +
        "\n" +
        "* Item 1\n" +
        "* Item 2\n" +
        "* Item 2a\n" +
        "* Item 2b\n" +
        "\n" +
        "### Ordered\n" +
        "\n" +
        "1. Item 1\n" +
        "1. Item 2\n" +
        "1. Item 3\n" +
        "  1. Item 3a\n" +
        "  1. Item 3b\n" +
        "\n" +
        "## Images\n" +
        "\n" +
        '![This is a alt text.](/image/sample.png "This is a sample image.")\n' +
        "\n" +
        "## Links\n" +
        "\n" +
        "You may be using [Markdown Live Preview](https://markdownlivepreview.com/).\n" +
        "\n" +
        "## Blockquotes\n" +
        "\n" +
        "> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.\n" +
        ">\n" +
        ">> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.\n" +
        "\n" +
        "## Tables\n" +
        "\n" +
        "| Left columns  | Right columns |\n" +
        "| ------------- |:-------------:|\n" +
        "| left foo      | right foo     |\n" +
        "| left bar      | right bar     |\n" +
        "| left baz      | right baz     |\n" +
        "\n" +
        "## Blocks of code\n" +
        "\n" +
        "```\n" +
        "let message = 'Hello world';\n" +
        "alert(message);\n" +
        "```\n" +
        "\n" +
        "## Inline code\n" +
        "\n" +
        "This web site is using `markedjs/marked`.";

    const handleOnChange = (e) => {
        setMarkup(e.target.value);
    };

    return (
        <div id="editor-container">
            <h1>Editor</h1>
            <textarea name="editor" id="editor" onChange={handleOnChange}>
                {defaultMarkup}
            </textarea>
        </div>
    );
};

export default Editor;
