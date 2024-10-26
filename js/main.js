function toggleSidebar() {
    let x = document.getElementById("header-sidebar");
    if (!x.classList.contains("show-on-mobile")) {
        x.classList.add("show-on-mobile");
    } else {
        x.classList.remove("show-on-mobile");
    }
}

// Function to toggle visibility of the dropdown menu
function toggleDropdown(menuId) {
    const menu = document.getElementById(menuId);

    // Close other dropdowns
    document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
        if (dropdown.id !== menuId) {
            dropdown.style.display = 'none';
        }
    });

    // Toggle the clicked dropdown
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Event listener to close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    const isClickInside = event.target.closest('.dropdown');

    if (!isClickInside) {
        document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }
});

// Initialize: Hide all dropdowns on page load
window.addEventListener('load', function() {
    document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
        dropdown.style.display = 'none';
    });
});