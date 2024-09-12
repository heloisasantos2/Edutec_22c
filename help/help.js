document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('help-form');
    const alertMessage = document.getElementById('alert-message');
    const input = document.getElementById('help');

    form.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            alertMessage.classList.add('visible');
            setTimeout(function() {
                alertMessage.classList.remove('visible');
            }, 2000);
        }
    });
});
