// Ensure the DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded Successfully!");

    // Dynamically update the portfolio title
    let titleElement = document.getElementById("portfolio-title");
    if (titleElement) {
        titleElement.innerText = "Rahul Shetty | AI Engineer";
    }

    // Add event listeners for project links
    let projectLinks = document.querySelectorAll("#projects ul li a");
    projectLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            alert("This project will be added soon. Stay tuned!");
        });
    });
});
