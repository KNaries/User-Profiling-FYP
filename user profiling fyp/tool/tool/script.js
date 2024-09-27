


document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.querySelector('.search-box button');

    if (submitButton) {
        submitButton.addEventListener('click', () => {
            // Redirect to viewall.html
            window.location.href = 'viewall.html';
        });
    }
});
