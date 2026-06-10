// Wait until all HTML content is loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Select the button that displays a UFC-themed message
    const alertButton = document.getElementById("alert-button");

    // Select the theme button
    const themeButton = document.getElementById("theme-button");

    // Show a message when the hero button is clicked
    alertButton.addEventListener("click", function () {
        alert("Fight Night energy activated!");
    });

    // Track the current theme state
    let lightMode = false;

    // Change the website colors when the theme button is clicked
    themeButton.addEventListener("click", function () {
        lightMode = !lightMode;

        if (lightMode) {
            document.body.style.backgroundColor = "#f4f4f4";
            document.body.style.color = "#111111";
        } else {
            document.body.style.backgroundColor = "#111111";
            document.body.style.color = "#f5f5f5";
        }
    });
});
