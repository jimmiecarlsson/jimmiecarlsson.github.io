window.enableTooltips = () => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));
};

document.addEventListener("DOMContentLoaded", () => {
    const hues = [30, 55, 125, 200, 280];
    const slumpHue = hues[Math.floor(Math.random() * hues.length)];

    // root
    document.documentElement.style.setProperty("--cst-hue", slumpHue);
});