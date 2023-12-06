function changeText(buttonId) {
    var buttons = document.querySelectorAll('.custom-button');

    buttons.forEach(function (btn) {
        btn.classList.remove('active');
    });

    var clickedButton = document.getElementById(buttonId);
    clickedButton.classList.add('active');

    var hiddenAreas = document.querySelectorAll('.hidden-area');
    hiddenAreas.forEach(function (area) {
        area.style.display = 'none';
    });

    var textArea = document.getElementById(buttonId + 'Text');
    textArea.style.display = 'block';
}
