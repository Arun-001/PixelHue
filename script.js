// Select the color buttons
const colorButtons = document.querySelectorAll('.color-btn');

// Add event listener to each button
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color');
        document.body.style.backgroundColor = color;
    });
});

// Select the custom color input
const customColorInput = document.getElementById('custom-color');

customColorInput.addEventListener('input', () => {
    const customColor = customColorInput.value;
    document.body.style.backgroundColor = customColor;
});

// Select the button container, color picker, and toggle button
const buttonContainer = document.getElementById('button-container');
const colorPicker = document.getElementById('color-picker');
const toggleButton = document.getElementById('toggle-button');

// Add event listener to the toggle button
toggleButton.addEventListener('click', () => {

    if (buttonContainer.style.display === 'none' && colorPicker.style.display === 'none') {
        buttonContainer.style.display = 'grid';
        colorPicker.style.display = 'block';
        toggleButton.textContent = 'Hide Buttons';
    } else {
        buttonContainer.style.display = 'none';
        colorPicker.style.display = 'none';
        toggleButton.textContent = 'Show Buttons';
    }
});
