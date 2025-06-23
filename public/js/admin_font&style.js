document.addEventListener('DOMContentLoaded', function () {
    const fontFamilySelector = document.getElementById('font-family');
    const fontSizeInput = document.getElementById('font-size');
    const applyFontSettingsBtn = document.getElementById('applyFontSettings');

    // Apply font settings and save them to localStorage
    applyFontSettingsBtn.addEventListener('click', function () {
        const selectedFontFamily = fontFamilySelector.value;
        const selectedFontSize = fontSizeInput.value;

        // Apply the font settings to the entire document
        if (selectedFontFamily) {
            document.body.style.fontFamily = selectedFontFamily;
            localStorage.setItem('fontFamily', selectedFontFamily);  // Save to localStorage
        }

        if (selectedFontSize && selectedFontSize >= 12 && selectedFontSize <= 36) {
            document.body.style.fontSize = `${selectedFontSize}px`;
            localStorage.setItem('fontSize', selectedFontSize);  // Save to localStorage
        } else {
            alert('Please enter a valid font size between 12 and 36.');
        }
    });
});
