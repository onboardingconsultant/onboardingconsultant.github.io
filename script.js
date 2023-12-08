function changeText(buttonId) {
    var clickedButton = document.getElementById(buttonId);

    if (clickedButton.classList.contains('active')) {
        // Do nothing if the button is already active
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
            var additionalText = document.getElementById('additionalTextUsers');
            additionalText.innerHTML = `
                <p>Users: Define the onboarding team and roles.</p>
                <p>Conduct internal training sessions on the importance of continuous onboarding.</p>
                <!-- ... (add the rest of the text here) ... -->
                <p>Close the project and transition to ongoing onboarding maintenance and improvement.</p>
            `;
        }

        // Add additional text when the "New Hires" button is clicked
        if (buttonId === 'newHires') {
            var additionalText = document.getElementById('additionalTextnewHires');
            additionalText.innerHTML = `
                <p>New Hires: Define the onboarding team and roles.</p>
                <p>Conduct internal training sessions on the importance of continuous onboarding.</p>
                <!-- ... (add the rest of the text here) ... -->
                <p>Close the project and transition to ongoing onboarding maintenance and improvement.</p>
            `;
        }

        // Add additional text when the "Partners" button is clicked
        if (buttonId === 'partners') {
            var additionalText = document.getElementById('additionalTextPartners');
            additionalText.innerHTML = `
                <p>Partners: Define the onboarding team and roles.</p>
                <p>Conduct internal training sessions on the importance of continuous onboarding.</p>
                <!-- ... (add the rest of the text here) ... -->
                <p>Close the project and transition to ongoing onboarding maintenance and improvement.</p>
            `;
        }

        // Add additional text when the "Customers" button is clicked
        if (buttonId === 'customers') {
            var additionalText = document.getElementById('additionalTextCustomers');
            additionalText.innerHTML = `
                <p>Customers: Define the onboarding team and roles.</p>
                <p>Conduct internal training sessions on the importance of continuous onboarding.</p>
                <!-- ... (add the rest of the text here) ... -->
                <p>Close the project and transition to ongoing onboarding maintenance and improvement.</p>
            `;
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var newHiresButton = document.getElementById('newHires');
    if (newHiresButton) {
        newHiresButton.click();
    }
});