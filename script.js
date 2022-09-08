
document.getElementById("submitbutton").addEventListener("click", function () {
    alert("Data Submitted!");
    const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

    // Usage: 
    addCSS("body{ height:0px; }")
});

