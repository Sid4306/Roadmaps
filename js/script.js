// Function to open the dialog and overlay
function openDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    const overlay = document.getElementById('dialog-overlay');
    dialog.style.display = 'block'; // Show the dialog
    overlay.style.display = 'block'; // Show the overlay
}

// Function to close the dialog and overlay
function closeDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    const overlay = document.getElementById('dialog-overlay');
    dialog.style.display = 'none'; // Hide the dialog
    overlay.style.display = 'none'; // Hide the overlay
}

// Close all dialogs and the overlay
function closeAllDialogs() {
    const dialogs = document.querySelectorAll('.roadmap-dialog');
    dialogs.forEach(dialog => {
        dialog.style.display = 'none'; // Hide each dialog
    });
    const overlay = document.getElementById('dialog-overlay');
    overlay.style.display = 'none'; // Hide the overlay
}

// Ensure all listeners are set up after the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners for closing dialogs
    const closeButtons = document.querySelectorAll('.close-dialog');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            closeDialog(button.closest('.roadmap-dialog').id);
        });
    });

    // Optional: Close dialog on clicking outside the dialog
    window.addEventListener('click', function(event) {
        const dialogs = document.querySelectorAll('.roadmap-dialog');
        dialogs.forEach(dialog => {
            if (event.target === dialog) {
                closeDialog(dialog.id);
            }
        });
    });
});
