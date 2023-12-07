function changeText(buttonId) {
    var clickedButton = document.getElementById(buttonId);

    if (clickedButton.classList.contains('active')) {
        // If the button is already active, toggle it off
        clickedButton.classList.remove('active');
        hideText(buttonId);
    } else {
        // If the button is not active, toggle it on
        var buttons = document.querySelectorAll('.custom-button');
        buttons.forEach(function (btn) {
            btn.classList.remove('active');
        });

        clickedButton.classList.add('active');

        var hiddenAreas = document.querySelectorAll('.hidden-area');
        hiddenAreas.forEach(function (area) {
            area.style.display = 'none';
        });

        var textArea = document.getElementById(buttonId + 'Text');
        textArea.style.display = 'block';

        // Add additional text when the "Users" button is clicked
        if (buttonId === 'users') {
            var additionalText = document.getElementById('additionalText');
            additionalText.innerHTML = `
                <p>Define the onboarding team and roles.</p>
                <p>Conduct internal training sessions on the importance of continuous onboarding.</p>
                <!-- ... (add the rest of the text here) ... -->
                <p>Close the project and transition to ongoing onboarding maintenance and improvement.</p>
            `;
        }

    }
}

function hideText(buttonId) {
    // Function to hide the text section
    var textArea = document.getElementById(buttonId + 'Text');
    textArea.style.display = 'none';
}
