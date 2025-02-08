document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to the Crazy Portfolio! 🚀");

    // Particles.js Configuration
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 100 },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": false },
            "move": { "enable": true, "speed": 3 }
        }
    });
});
