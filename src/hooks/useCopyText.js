import React from "react";

const copyText = () => {
    // Get the element
    const outputDiv = document.getElementById("output");
    // Select the text
    const range = document.createRange();
    range.selectNode(outputDiv);
    // Copy the text
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    // Unselect the text
    selection.removeAllRanges();

}
export default copyText;


