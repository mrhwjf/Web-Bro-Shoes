function toggleSidebar() {
    let x = document.getElementById("header-sidebar");
    if (!x.classList.contains("show-on-mobile"))
        x.classList.add("show-on-mobile");
    else
    x.classList.remove("show-on-mobile");
}

function toggleSidebarAccount() {
    let x = document.getElementById("account-drop-list-sidebar");
    if (!x.classList.contains("hidden"))
        x.classList.add("hidden");
    else
        x.classList.remove("hidden");
}

function toggleVisibility(elementId) {
    let selectedPage = document.getElementById(elementId);
    if (!selectedPage.classList.contains("is-active-page")) {
        selectedPage.classList.remove("hidden");
        selectedPage.classList.add("is-active-page");
    } else {
        selectedPage.classList.add("hidden");
        selectedPage.classList.remove("is-active-page");
    }

    const allPages = document.querySelectorAll('.toggle-page');

    allPages.forEach(page => {
        if (page.id !== elementId) {
            page.classList.add("hidden");
            page.classList.remove("is-active-page");
        }
    });
}

function toggleSearchEngine() {
    toggleVisibility("search-engine");
}

function toggleMyAccount() {
    toggleVisibility("account-user");
}

function toggleSignup() {
    toggleVisibility("signup-user");
}

function toggleLogin() {
    toggleVisibility("login-user");
}

// /////////////////////////////////////////////////////
// CONTENT
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