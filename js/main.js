// VISIBILITY - BEGIN DEFINE /////////////////////////////////////////////////////
function toggleSidebarMobile(elementId) {
    let x = document.getElementById(elementId);
    if (!x.classList.contains("show-on-mobile"))
        x.classList.add("show-on-mobile");
    else
        x.classList.remove("show-on-mobile");
}

function toggleSidebar(elementId) {
    let x = document.getElementById(elementId);
    if (!x.classList.contains("hidden"))
        x.classList.add("hidden");
    else
        x.classList.remove("hidden");
}

function toggleVisibility(elementId) {
    let selectedPage = document.getElementById(elementId);
    let catalougePage = document.getElementById("catalogue");
    let allPages = document.querySelectorAll(".toggle-page");

    const exceptPages = ["login-user", "signup-user"];      // Pop-up pages
    const fullDisplay = ["account-user", "order-history"];  // New pages over catalogue

    // Toggle visibility of the selected page
    if (!selectedPage.classList.contains("is-active-page")) {
        selectedPage.classList.add("is-active-page");
        selectedPage.classList.remove("hidden");
    } else {
        selectedPage.classList.remove("is-active-page");
        if (fullDisplay.includes(elementId))
            selectedPage.classList.add("hidden");
    }

    
    // Hide all pages except the selected one
    allPages.forEach(page => {
        if (page.id !== elementId) {
            page.classList.remove("is-active-page");
        }
    });

    // If selectedPage is a login/signup form, don"t hide the catalogue
    if (exceptPages.includes(elementId)) {
        catalougePage.classList.remove("hidden");
        return;
    }

    // Now check if any page is active
    let anyActivePage = Array.from(allPages).some(page => page.classList.contains("is-active-page"));


    // If no page is active, show catalougePage; otherwise, hide it
    if (!anyActivePage) {
        catalougePage.classList.remove("hidden");
        catalougePage.classList.add("always-active-page");
    } else {
        catalougePage.classList.add("hidden");
        catalougePage.classList.remove("always-active-page");
    }

    window.scrollTo(0, 0);
}
// VISIBILITY - END DEFINE /////////////////////////////////////////////////////


// USER - BEGIN DEFINE /////////////////////////////////////////////////////
// Change UI based on whether user has logged in or not
function updateMenuVisibility() {
    let isLoggedIn = !!localStorage.getItem("currentuser");
    let currentUser = JSON.parse(localStorage.getItem("currentuser"));
    let username = currentUser ? currentUser.username : null;

    // Show logged-in items, hide logged-out items if user is logged in
    document.querySelectorAll(".logged-in").forEach(item => {
        item.style.display = isLoggedIn ? "block" : "none";
    });
    document.querySelectorAll(".logged-out").forEach(item => {
        item.style.display = isLoggedIn ? "none" : "block";
    });

    // Show username in specific places if user is logged in
    document.querySelectorAll(".display-username").forEach(item => {
        item.textContent = isLoggedIn ? username : "";
    });
}

// For signup form
function handleSignupForm() {
    event.preventDefault();

    let username = document.getElementById("username-signup").value.trim();
    let fullname = document.getElementById("fullname-signup").value.trim();
    let phone = document.getElementById("phone-signup").value.trim();
    let address = document.getElementById("address-signup").value.trim();
    let password = document.getElementById("password-signup").value.trim();
    let confirmPassword = document.getElementById("confirm-password-signup").value.trim();

    let errorMsg = document.getElementById("signup-form-msg-error");
    errorMsg.innerHTML = "";

    // Validate each field according to requirements
    if (!username || username.length < 5 || /\W|\s/.test(username)) {
        errorMsg.innerHTML += "<p>Username must be at least 5 characters long, no spaces or special characters.</p>";
    }

    if (!fullname) {
        errorMsg.innerHTML += "<p>Full name cannot be empty.</p>";
    }

    if (!phone || !/^\d{10}$/.test(phone)) {
        errorMsg.innerHTML += "<p>Phone number must be exactly 10 digits.</p>";
    }

    if (!address) {
        errorMsg.innerHTML += "<p>Address cannot be empty.</p>";
    }

    if (!password || password.length < 5 || /\s/.test(password)) {
        errorMsg.innerHTML += "<p>Password must be at least 5 characters long.</p>";
    }

    if (password !== confirmPassword) {
        errorMsg.innerHTML += "<p>Password does not match.</p>";
    }

    if (errorMsg.innerHTML !== "") {
        errorMsg.classList.remove("hidden");
        return;
    } else {
        errorMsg.classList.add("hidden");
    }

    // If no error messages, proceed with saving to local storage
    let user = {
        username: username,
        fullname: fullname,
        phone: phone,
        address: address,
        password: password,
        join: new Date(),
        orderHistory: [],
        cart: [],
        isAdmin: 0,
        status: 1
    };

    let accounts = localStorage.getItem("accounts") ? JSON.parse(localStorage.getItem("accounts")) : [];

    let containsDuplicate = accounts.some(account => {
        return account.phone === user.phone || account.username === user.username;
    });


    if (!containsDuplicate) {
        accounts.push(user);
        localStorage.setItem("accounts", JSON.stringify(accounts));
        localStorage.setItem("currentuser", JSON.stringify(user));
        alert("Account created successfully!");
        updateMenuVisibility();
        toggleVisibility("signup-user");
        document.getElementById("signup-form").reset();
        // toastMsg({ title: "Success", message: "Account created successfully!", type: "success", duration: 3000 });
    } else {
        alert("Account already exited!");
        // toastMsg({ title: "Failed", message: "Account already existed!", type: "error", duration: 3000 });
    }
};

// For login form
function handleLoginForm() {
    event.preventDefault();

    let usernameOrPhone = document.getElementById("username-login").value.trim();
    let password = document.getElementById("password-login").value.trim();

    // Ensure accounts exist in local storage
    let accountsData = localStorage.getItem("accounts");
    let accounts = accountsData ? JSON.parse(accountsData) : [];

    let errorMsg = document.getElementById("login-form-msg-error");
    errorMsg.innerHTML = "";

    if (!usernameOrPhone || !password) {
        errorMsg.classList.remove("hidden");
        errorMsg.innerHTML = "<p>Both fields are required.</p>";
        return;
    } else {
        errorMsg.classList.add("hidden");
    }

    let userIdx = accounts.findIndex(item => (item.phone === usernameOrPhone || item.username === usernameOrPhone));

    if (userIdx === -1) {
        errorMsg.classList.remove("hidden");
        errorMsg.innerHTML = "<p>Account with this username or phone number does not exist.</p>";
    } else if (accounts[userIdx].password === password) {
        if (accounts[userIdx].status === 0) {
            errorMsg.classList.remove("hidden");
            errorMsg.innerHTML = "<p>This account has been locked.</p>";
        } else {
            localStorage.setItem("currentuser", JSON.stringify(accounts[userIdx]));
            // toast({ title: "Success", message: "Login successful", type: "success", duration: 3000 });
            alert("Login successful!");
            updateMenuVisibility();
            toggleVisibility("login-user");
            document.getElementById("login-form").reset();
        }
    } else {
        errorMsg.classList.remove("hidden");
        errorMsg.innerHTML = "<p>Password is incorrect.</p>";
    }
}

// To sign out
function signOut() {
    localStorage.removeItem("currentuser");
    updateMenuVisibility();
    location.reload();
}

// Load user info to My Account after user has logged in
function loadUserInfo() {
    event.preventDefault();

    let currentUser = JSON.parse(localStorage.getItem("currentuser"));

    if (currentUser) {
        document.getElementById("infoname").value = currentUser.username || "";
        document.getElementById("fullname").value = currentUser.fullname || "";
        document.getElementById("infophone").value = currentUser.phone || "";
        document.getElementById("infoemail").value = currentUser.email || "";
        document.getElementById("infoaddress").value = currentUser.address || "";
    }
}

// Apply changes to current account in My Acocunt
function changeAccInfo() {
    event.preventDefault();

    let errorMsg = document.getElementById("changeacc-info-msg-error");
    errorMsg.innerHTML = ""; // Clear previous messages

    // Collect updated values from the form
    let username = document.getElementById("infoname").value.trim();
    let fullname = document.getElementById("fullname").value.trim();
    let phone = document.getElementById("infophone").value.trim();
    let email = document.getElementById("infoemail").value.trim();
    let address = document.getElementById("infoaddress").value.trim();

    // Validation checks
    if (!username || username.length < 5 || /\W|\s/.test(username)) {
        errorMsg.innerHTML += "<p>Username must be at least 5 characters long, no spaces or special characters.</p>";
    }

    if (!fullname) {
        errorMsg.innerHTML += "<p>Full name cannot be empty.</p>";
    }

    if (!phone || !/^\d{10}$/.test(phone)) {
        errorMsg.innerHTML += "<p>Phone number must be exactly 10 digits.</p>";
    }

    if (email && (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
        errorMsg.innerHTML += "<p>Please enter a valid email address.</p>";
    }

    if (!address) {
        errorMsg.innerHTML += "<p>Address cannot be empty.</p>";
    }

    if (errorMsg.innerHTML !== "") {
        errorMsg.classList.remove("hidden");
        return;
    } else {
        errorMsg.classList.add("hidden");
    }

    let updatedUser = {
        username: username,
        fullname: fullname,
        phone: phone,
        email: email,
        address: address
    };

    let accounts = JSON.parse(localStorage.getItem("accounts"));
    let currentUser = JSON.parse(localStorage.getItem("currentuser"));

    let userIdx = accounts.findIndex(account => account.username === currentUser.username);

    if (userIdx !== -1) {
        accounts[userIdx] = { ...accounts[userIdx], ...updatedUser };
        localStorage.setItem("accounts", JSON.stringify(accounts));
        localStorage.setItem("currentuser", JSON.stringify(accounts[userIdx]));
        alert("Account information updated successfully!");
    } else {
        alert("Failed to update account information. Please try again.");
    }
}

function toggleChangePass() {
    let changepass = document.getElementById("user-info-changepass");
    let changeacc = document.getElementById("user-info-changeacc");
    if (changepass.classList.contains("hidden")) {
        changepass.classList.remove("hidden");
        changeacc.classList.add("hidden");
    } else {
        changepass.classList.add("hidden");
        changeacc.classList.remove("hidden");
    }
    window.scrollTo(0, 0);
}

// Change current user"s password
function changePassword() {
    event.preventDefault();

    let currentPassword = document.getElementById("password-cur-info").value.trim();
    let newPassword = document.getElementById("password-after-info").value.trim();
    let confirmNewPassword = document.getElementById("password-comfirm-info").value.trim();

    let errorMsg = document.getElementById("changepass-info-msg-error");
    errorMsg.innerHTML = "";

    let currentUser = JSON.parse(localStorage.getItem("currentuser"));
    let accounts = JSON.parse(localStorage.getItem("accounts"));

    if (currentPassword !== currentUser.password) {
        errorMsg.innerHTML += "<p>Current password is incorrect.</p>";
    }

    if (!newPassword || newPassword.length < 5 || /\s/.test(newPassword)) {
        errorMsg.innerHTML += "<p>New password must be at least 5 characters long and cannot contain spaces.</p>";
    }

    if (newPassword === currentPassword) {
        errorMsg.innerHTML += "<p>New password must be different from current password.</p>"
    }

    if (newPassword !== confirmNewPassword) {
        errorMsg.innerHTML += "<p>New password and confirmation do not match.</p>";
    }

    if (errorMsg.innerHTML === "") {
        currentUser.password = newPassword;
        let userIdx = accounts.findIndex(account => account.phone === currentUser.phone || account.username === currentUser.username);

        if (userIdx !== -1) {
            accounts[userIdx].password = newPassword;
            localStorage.setItem("accounts", JSON.stringify(accounts));
        }

        localStorage.setItem("currentuser", JSON.stringify(currentUser));
        errorMsg.classList.add("hidden");
        alert("Password changed successfully!");
        document.getElementById("changepass-form").reset();
    } else {
        errorMsg.classList.remove("hidden");
    }
}



// USER - END DEFINE /////////////////////////////////////////////////////



// CATALOGUE - BEGIN DEFINE /////////////////////////////////////////////////////
// Function to toggle visibility of the dropdown menu
function toggleDropdown(menuId) {
    let menu = document.getElementById(menuId);

    // Close other dropdowns
    document.querySelectorAll(".dropdown-menu").forEach(dropdown => {
        if (dropdown.id !== menuId) {
            dropdown.style.display = "none";
        }
    });

    // Toggle the clicked dropdown
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Event listener to close dropdowns when clicking outside
document.addEventListener("click", function (event) {
    let isClickInside = event.target.closest(".dropdown");

    if (!isClickInside) {
        document.querySelectorAll(".dropdown-menu").forEach(dropdown => {
            dropdown.style.display = "none";
        });
    }
});

// Initialize: Hide all dropdowns on page load
window.addEventListener("load", function () {
    document.querySelectorAll(".dropdown-menu").forEach(dropdown => {
        dropdown.style.display = "none";
    });
});

// CATALOGUE - FILTER - BEGIN DEFINE /////////////////////////////////////////////////////

// Toggle filter options
const filterOptions = document.querySelectorAll(".filter-option");
filterOptions.forEach(option => {
    option.addEventListener("click", (event) => {
        let clickedElement = event.target;
        if (!clickedElement.classList.contains("active")) {
            clickedElement.classList.add("active");
        } else {
            clickedElement.classList.remove("active");
        }
    });
});

// Toggle sortby
const sortbyDisplay = document.getElementById("sortby-mode-display");
const sortbyOptions = document.querySelectorAll(".sortby-option");
sortbyOptions.forEach(option => {
    option.addEventListener("click", (event) => {
        let clickedElement = event.target;
        sortbyDisplay.innerText = clickedElement.innerText;
    })
});

// Reset all filter & sortby options
function resetFilter() {
    const filterOptions = document.querySelectorAll(".filter-option");
    filterOptions.forEach(option => {
        option.classList.remove("active");
        option.value = "";
    });
    sortbyDisplay.textContent = "None";
}

// CATALOGUE - FILTER - END DEFINE /////////////////////////////////////////////////////

// CATALOGUE - END DEFINE /////////////////////////////////////////////////////

// ONLOAD /////////////////////////////////////////////////////
window.onload = () => {
    updateMenuVisibility();
}