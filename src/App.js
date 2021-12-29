import React from "react";
import Preview from "./Preview";
import Editor from "./Editor";

const App = () => {
    const [markup, setMarkup] = React.useState("");

    return (
        <div id="container">
            <Editor setMarkup={setMarkup}></Editor>
            <Preview markup={markup}></Preview>
        </div>
    );
};

export default App;
