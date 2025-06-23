document.addEventListener('DOMContentLoaded', function () {
    // Retrieve saved font settings from localStorage
    const savedFontFamily = localStorage.getItem('fontFamily');
    const savedFontSize = localStorage.getItem('fontSize');

    // Apply the saved font settings to the body
    if (savedFontFamily) {
        document.body.style.fontFamily = savedFontFamily;
    }

    if (savedFontSize) {
        document.body.style.fontSize = `${savedFontSize}px`;
    }
});
