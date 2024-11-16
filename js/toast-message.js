// Function to show a toast message
function showToast(message, type) {
    const toastContainer = document.getElementById("toast-container");

    // Create a new toast element
    const toast = document.createElement("div");
    toast.classList.add("toast");

    // Add a specific class based on success or error type
    if (type === "success") {
        toast.classList.add("success");
        toast.innerHTML = `<i class="fa-solid fa-check-circle"></i> ${message}`;
    } else if (type === "error") {
        toast.classList.add("error");
        toast.innerHTML = `<i class="fa-solid fa-times-circle"></i> ${message}`;
    } else {
        toast.classList.add("warning");
        toast.innerHTML = '<i class=""></i> ${message}';
    }


    // Append the toast to the container
    toastContainer.appendChild(toast);

    // Remove the toast after animation (3 seconds)
    setTimeout(() => {
        toast.remove();
    }, 3000);
}
