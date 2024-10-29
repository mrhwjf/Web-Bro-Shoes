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