import React from "react";
import { marked } from "marked";
import parse from "html-react-parser";


const Preview = (props) => {
    const { markup } = props;

    console.log(marked.parse(markup));

    return (
        <div id="preview-container">
            <h1>Preview</h1>
            <div id="preview">
             {parse(marked.parse(markup))}
             </div>
        </div>
    );
};

export default Preview;
