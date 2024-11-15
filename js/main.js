// VISIBILITY - BEGIN DEFINE /////////////////////////////////////////////////////
// function toggleSidebarMobile(elementId) {
//     let x = document.getElementById(elementId);
//     if (!x.classList.contains("show-on-mobile"))
//         x.classList.add("show-on-mobile");
//     else
//         x.classList.remove("show-on-mobile");
// }

function toggleSidebarDropdown(elementId) {
    let x = document.getElementById(elementId);
    x.classList.toggle("hidden");
}

function toggleModal(elementId) {
    let x = document.getElementById(elementId);

    x.classList.toggle("open");

    Array.from(document.getElementsByClassName("modal")).forEach((modal) => {
        if (modal.id !== elementId)
            modal.classList.remove("open");
    });
}


function togglePage(elementId) {
    let selectedPage = document.getElementById(elementId);
    let catalougePage = document.getElementById("catalogue");
    let allPages = document.querySelectorAll(".toggle-page");


    selectedPage.classList.toggle("hidden");

    allPages.forEach((page) => {
        if (page.id !== elementId) {
            page.classList.add("hidden");
        }
    });

    // Now check if any page is active
    let anyActivePage = Array.from(allPages).some(page => !page.classList.contains("hidden"));


    // If no page is active, show catalougePage; otherwise, hide it
    if (!anyActivePage)
        catalougePage.classList.remove("hidden");
    else
        catalougePage.classList.add("hidden");


    window.scrollTo(top);
}
// VISIBILITY - END DEFINE /////////////////////////////////////////////////////


// USER - BEGIN DEFINE /////////////////////////////////////////////////////
// Change UI based on whether user has logged in or not
function updateMenuVisibility() {
    let isLoggedIn = !!localStorage.getItem("currentuser");
    let currentuser = JSON.parse(localStorage.getItem("currentuser"));
    let username = currentuser ? currentuser.username : null;

    // Show checkout-btn if user is logged in
    let checkoutBtn = document.getElementById("checkout-btn");
    if (isLoggedIn) {
        checkoutBtn.classList.add("active");
        checkoutBtn.disabled = false;
    } else {
        checkoutBtn.classList.remove("active");
        checkoutBtn.disabled = true;
    }

    // Show cart if user is logged in
    if (isLoggedIn) {
        showCart();
        updateCartTotalAmount();
        updateCartTotalPrice();
    }

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
        console.log("handleSignupForm(): Signed up");
        updateMenuVisibility();
        toggleModal("signup-user");
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
            console.log("handleLoginForm(): Signed up");
            updateMenuVisibility();
            toggleModal("login-user");
            document.getElementById("login-form").reset();
        }
    } else {
        errorMsg.classList.remove("hidden");
        errorMsg.innerHTML = "<p>Password is incorrect.</p>";
    }
}

// To sign out
function signOut() {
    let accounts = JSON.parse(localStorage.getItem("accounts"));
    user = JSON.parse(localStorage.getItem("currentuser"));
    let idx = accounts.findIndex(item => item.phone == user.phone)

    //Save cart when logged in again
    accounts[idx].cart.length = 0;
    for (let i = 0; i < user.cart.length; i++) {
        accounts[idx].cart[i] = user.cart[i];
    }
    localStorage.setItem("accounts", JSON.stringify(accounts));
    localStorage.removeItem("currentuser");
    console.log("signOut(): Signed out.");
    updateMenuVisibility();
    location.reload();
}

// Load user info to My Account after user has logged in
function loadUserInfo() {
    event.preventDefault();

    let currentuser = JSON.parse(localStorage.getItem("currentuser"));

    if (currentuser) {
        document.getElementById("infoname").value = currentuser.username || "";
        document.getElementById("fullname").value = currentuser.fullname || "";
        document.getElementById("infophone").value = currentuser.phone || "";
        document.getElementById("infoemail").value = currentuser.email || "";
        document.getElementById("infoaddress").value = currentuser.address || "";
    }
}

// Apply changes to current account in My Acocunt
function changeAccInfo() {
    event.preventDefault();

    let errorMsg = document.getElementById("changeacc-info-msg-error");
    errorMsg.innerHTML = "";

    // Collect updated values from the form
    // let username = document.getElementById("infoname").value.trim();
    let fullname = document.getElementById("fullname").value.trim();
    let phone = document.getElementById("infophone").value.trim();
    let email = document.getElementById("infoemail").value.trim();
    let address = document.getElementById("infoaddress").value.trim();

    // Validation checks
    // if (!username || username.length < 5 || /\W|\s/.test(username)) {
    //     errorMsg.innerHTML += "<p>Username must be at least 5 characters long, no spaces or special characters.</p>";
    // }

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
    let currentuser = JSON.parse(localStorage.getItem("currentuser"));

    let userIdx = accounts.findIndex(account => account.username === currentuser.username);

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
    window.scrollTo(top);
}

// Change current user"s password
function changePassword() {
    event.preventDefault();

    let currentPassword = document.getElementById("password-cur-info").value.trim();
    let newPassword = document.getElementById("password-after-info").value.trim();
    let confirmNewPassword = document.getElementById("password-comfirm-info").value.trim();

    let errorMsg = document.getElementById("changepass-info-msg-error");
    errorMsg.innerHTML = "";

    let currentuser = JSON.parse(localStorage.getItem("currentuser"));
    let accounts = JSON.parse(localStorage.getItem("accounts"));

    if (currentPassword !== currentuser.password) {
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
        currentuser.password = newPassword;
        let userIdx = accounts.findIndex(account => account.phone === currentuser.phone || account.username === currentuser.username);

        if (userIdx !== -1) {
            accounts[userIdx].password = newPassword;
            localStorage.setItem("accounts", JSON.stringify(accounts));
        }

        localStorage.setItem("currentuser", JSON.stringify(currentuser));
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


function displayWhenEmpty(selector, innerhtml) {
    let element = document.querySelector(selector);
    if (element.innerHTML.trim() === "" || element.childElementCount === 0) {
        element.innerHTML = innerhtml;
    }
}


// CATALOGUE - MODAL PRODUCT DETAILS - BEGIN DEFINE /////////////////////////////////////////////////////


// CATALOGUE - MODAL PRODUCT DETAILS - END DEFINE /////////////////////////////////////////////////////


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
document.querySelector(".sortby .float-dropdown .menu-list").addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        sortbyDisplay.innerText = event.target.innerText.trim();
        showHomeProduct(JSON.parse(localStorage.getItem("products")))
    }
});

// Toggle & display products by category
const displayCatalogueName = document.getElementById("display-catalogue-name");
document.querySelectorAll(".filter-category").forEach(category => {
    category.addEventListener("click", (event) => {
        // If header-sidebar is open, toggle it off
        let headerSideabar = document.getElementById("header-sidebar");
        if (parseFloat(window.getComputedStyle(headerSideabar).getPropertyValue("width"))) {
            toggleModal("header-sidebar");
        }
        
        // If toggle-page is open, toggle it off
        let isTogglePage = document.querySelector(".toggle-page:not(.hidden)");
        if (isTogglePage) {
            if (isTogglePage.classList.contains("account-user")) togglePage("account-user");
            if (isTogglePage.classList.contains("order-history")) togglePage("order-history");
        }

        document.querySelectorAll(".category-menu .filter-category.active").forEach(ele => ele.classList.remove("active"));
        event.target.classList.add("active");
        displayCatalogueName.innerText = event.target.innerText.trim();
        resetFilter();
        showHomeProduct(JSON.parse(localStorage.getItem("products")));
    });
});

// Toggle search by name
document.getElementById("search-bar").addEventListener("keyup", () => {
    showHomeProduct(JSON.parse(localStorage.getItem("products")));
})


// Reset all filter & sortby options
function resetFilter() {
    const filterOptions = document.querySelectorAll(".filter-option");
    filterOptions.forEach(option => {
        option.classList.remove("active");
        option.value = "";
    });
    sortbyDisplay.textContent = "None";
    showHomeProduct(JSON.parse(localStorage.getItem("products")));
    scrollTo(top);
}

function getFilterOption() {
    let brandOption = Array.from(document.querySelectorAll(".filter-brand.active")).map(option => option.getAttribute("data-filter"));
    let sizeOption = Array.from(document.querySelectorAll(".filter-size.active")).map(option => option.getAttribute("data-filter"));
    let genderOption = Array.from(document.querySelectorAll(".filter-gender.active")).map(option => option.getAttribute("data-filter"));

    let categoryOption = document.querySelector(".filter-category.active").getAttribute("data-filter");
    if (categoryOption == "Home")
        categoryOption = ["Sneaker", "Sandal", "Kid"];
    else
        categoryOption = [document.querySelector(".filter-category.active").getAttribute("data-filter")];

    let nameOption = document.getElementById("search-bar").value.trim();

    let sortbyOption = document.getElementById("sortby-mode-display").innerText.trim();
    let minprice = parseInt(document.getElementById("price-lowerbound").value.trim()) || 0;
    let maxprice = parseInt(document.getElementById("price-upperbound").value.trim()) || Infinity;

    console.log("Filter options:", brandOption, sizeOption, genderOption, sortbyOption, nameOption, categoryOption, minprice, maxprice);

    return { brandOption, sizeOption, genderOption, sortbyOption, nameOption, categoryOption, minprice, maxprice };
}

function filterProducts(products, filters) {
    return products.filter(product => {

        // Check matching name
        if (
            filters.nameOption &&
            !product.name.toLowerCase().includes(filters.nameOption.toLowerCase())
        ) {
            return false;
        }

        // Check price range
        if (product.price < filters.minprice || product.price > filters.maxprice) {
            return false;
        }

        // Check category
        if (!filters.categoryOption.includes(product.category)) {
            return false;
        }

        // Check brand
        if (filters.brandOption.length > 0 && !filters.brandOption.includes(product.brand)) {
            return false;
        }

        // Check gender
        if (filters.genderOption.length > 0 && !filters.genderOption.includes(product.sex)) {
            return false;
        }

        // Check size (at least one matching size is required)
        if (
            filters.sizeOption.length > 0 &&
            !filters.sizeOption.every(size => product.size.includes(Number(size)))
        ) {
            return false;
        }

        console.log(product.id, product.name);
        return true;
    });
}



function sortProducts(products, sortbyOption) {
    if (sortbyOption === "Alphabetically, A-Z") {
        return products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortbyOption === "Alphabetically, Z-A") {
        return products.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortbyOption === "Price, low to high") {
        return products.sort((a, b) => a.price - b.price);
    } else if (sortbyOption === "Price, high to low") {
        return products.sort((a, b) => b.price - a.price);
    }
    return products;
}

// Start filter if clicked the Apply Filter button
document.querySelectorAll(".apply-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        showHomeProduct(JSON.parse(localStorage.getItem("products")));
    });
});


// CATALOGUE - FILTER - END DEFINE /////////////////////////////////////////////////////

// CATALOGUE - CART - BEGIN DEFINE /////////////////////////////////////////////////////
const displayEmptyHTML_cart = `
<div class="display-when-empty">
    <p>Your cart is empty... Start shopping now!</p>
</div>
`;

const displayEmptyHTML_orderhistory = `
<div class="display-when-empty">
    <div class="img-container">
        <img src="./asset/img/empty-order-history.png">
    </div>
    <p>It's empty here... <a onclick="togglePage('order-history')">Start shopping
        now!</a></p>
</div>
`;


//Get product from the the "products" array
function getProduct(item) {
    let products = JSON.parse(localStorage.getItem("products"));
    let infoCartItem = products.find(sp => item.id == sp.id)
    let cartItem = {
        ...infoCartItem,
        ...item
    }
    return cartItem;
}

function getCartTotalAmount() {
    let currentuser = JSON.parse(localStorage.getItem("currentuser"));
    let amount = 0;
    currentuser.cart.forEach(element => {
        amount += parseInt(element.quantity);
    });
    return amount;
}

function updateCartTotalAmount() {
    if (!localStorage.getItem("currentuser")) {
        console.log("updateCartTotalAmount(): Not logged in.");
        return;
    }

    let amount = getCartTotalAmount();
    document.querySelectorAll(".display-cart-total-amount").forEach(ele => ele.innerText = amount);
    console.log("updateCartTotalAmount(): ", amount);
}

// Display/update the totalprice of the cart
function updateCartTotalPrice() {
    const total = vnd(getCartTotalPrice());
    document.querySelectorAll(".display-totalprice").forEach(ele => {
        ele.innerText = total;
    });
}


// Get the totalprice of the cart
function getCartTotalPrice() {
    let currentuser = JSON.parse(localStorage.getItem("currentuser"));
    let totalprice = 0;
    if (currentuser != null) {
        currentuser.cart.forEach(item => {
            let product = getProduct(item);
            totalprice += (parseInt(product.quantity) * parseInt(product.price));
        });
    }
    return totalprice;
}

// Update total cart amount when changing cartItem quantity
function updateCartAll(id, size, ele) {
    let currentuser = JSON.parse(localStorage.getItem("currentuser"));
    let parent = ele.parentNode;
    console.log("updateCartAll(): ", parent);
    let quantity = parseInt(parent.querySelector(".input-qty").value.trim());
    console.log("updateCartAll(): ", quantity);
    let idx = currentuser.cart.findIndex(item => item.id == id && item.size == size);
    if (idx == -1) {
        console.log("updateCartAll(): Error findIndex()");
        return;
    }
    currentuser.cart[idx].quantity = quantity;
    localStorage.setItem("currentuser", JSON.stringify(currentuser));
    updateCartTotalAmount();
    updateCartTotalPrice();
    // saveCartInfo();
}



//Add cart item to cart[]
function addCart(index, size, quantity) {
    if (!localStorage.getItem("currentuser")) {
        console.log(-1);
        return;
    }

    let currentuser = JSON.parse(localStorage.getItem("currentuser"));

    let cartItem = {
        id: index,
        quantity: quantity,
        size: parseInt(size)
    }

    console.log("Cart item:", cartItem);

    let idx = currentuser.cart.findIndex(item => item.id == cartItem.id && item.size == cartItem.size);
    if (idx === -1) {
        currentuser.cart.push(cartItem);
    } else {
        currentuser.cart[idx].quantity += cartItem.quantity;
    }

    localStorage.setItem("currentuser", JSON.stringify(currentuser));
    updateCartTotalAmount();
    updateCartTotalPrice();
    showCart();
    // saveCartInfo();
    closeModal();
}

//Delete the cart item
function deleteCartItem(id, size, ele) {
    const checkoutBtn = document.getElementById("checkout-btn");
    let cartParent = ele.parentNode.parentNode;
    cartParent.remove();
    let currentuser = JSON.parse(localStorage.getItem("currentuser"));
    let idx = currentuser.cart.findIndex(item => item.id == id && item.size == size)
    currentuser.cart.splice(idx, 1);

    if (currentuser.cart.length == 0) {
        displayWhenEmpty(".cart .cart-body", displayEmptyHTML_cart);
        checkoutBtn.classList.remove(".active");
        checkoutBtn.disabled = true;
    }
    localStorage.setItem("currentuser", JSON.stringify(currentuser));
    updateCartTotalPrice();
    updateCartTotalAmount();
    console.log("Deleted item cart ID = ", id, ", size = ", size);
    console.log("Updated cart:", currentuser.cart);

}

// Save Cart Info
// function saveCartInfo() {
//     let cartAmountbtn = document.querySelectorAll(".cart-item-control .is-form");
//     let listProduct = document.querySelectorAll(".cart-item");
//     let currentUser = JSON.parse(localStorage.getItem("currentuser"));
//     cartAmountbtn.forEach((btn, index) => {
//         btn.addEventListener("click", () => {
//             let id = listProduct[parseInt(index / 2)].getAttribute("data-id");
//             let productId = currentUser.cart.find(item => {
//                 return item.id == id;
//             });
//             productId.quantity = parseInt(listProduct[parseInt(index / 2)].querySelector(".input-qty").value);
//             localStorage.setItem("currentuser", JSON.stringify(currentUser));
//             updateCartTotalPrice();
//         })
//     });
// }


function showCart() {
    if (!localStorage.getItem("currentuser")) {
        displayWhenEmpty(".cart .cart-body", displayEmptyHTML_cart);
        return;
    }
    let currentuser = JSON.parse(localStorage.getItem("currentuser"));
    const cartBody = document.querySelector(".cart .cart-body");
    const checkoutBtn = document.getElementById("checkout-btn");

    if (currentuser.cart.length !== 0) {
        // Show the checkout button and generate cart items HTML
        checkoutBtn.classList.add("active");
        checkoutBtn.disabled = false;

        let cartItemhtml = "";
        currentuser.cart.forEach(item => {
            let product = getProduct(item);
            cartItemhtml += `
                    <div class="modal-container cart-item" data-productID="${product.id}">
                        <div class="img-container">
                            <img src="${product.image}">
                        </div>
                        <div class="cart-item-info">
                            <p class="display-product-name">${product.name}</p>
                            <p>Brand: <span class="display-product-brand">${product.brand}</span></p>
                            <p>Size: <span class="display-product-size">${product.size}</span></p>
                            <p class="display-product-price">${vnd(product.price)}</p>
                        </div>
                        <div class="cart-item-control">
                            <a onclick="deleteCartItem(${product.id}, ${product.size}, this)">
                                <i class="fa-regular fa-circle-xmark"></i>
                            </a>
                            <div class="cart-item-amount">
                                <button class="minus is-form" onclick="decreasingNumber(this); updateCartAll(${product.id},${product.size}, this)">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <input class="input-qty" max="100" min="1" name="" type="number" value="${product.quantity}" onkeyup="updateCartAll(${product.id},${product.size}, this)">
                                <button class="plus is-form" onclick="increasingNumber(this); updateCartAll(${product.id},${product.size}, this)">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
        });
        // Inject cart items into cart body
        cartBody.innerHTML = cartItemhtml;
    } else {
        // If the cart is empty, show the empty message and hide checkout button
        checkoutBtn.classList.remove("active");
        checkoutBtn.disabled = true;
        displayWhenEmpty(".cart .cart-body", displayEmptyHTML_cart);
    }
}

// CATALOGUE - CART - END DEFINE /////////////////////////////////////////////////////


// CATALOGUE - ORDER HISTORY - BEGIN DEFINE /////////////////////////////////////////////////////

function showOrderHistory() {
    if (!localStorage.getItem("currentuser")) {
        console.log("showOrderHistory(): User not logged in.")
        return;
    }

    let currentuser = JSON.parse(localStorage.getItem("currentuser"));
    let OHbody = document.querySelector(".order-history .main-account-body-col");

    if (currentuser.orderHistory.length !== 0) {

    } else {
        displayWhenEmpty(".order-history .main-account-body-col", displayEmptyHTML_orderhistory);
    }
}

// CATALOGUE - ORDER HISTORY - END DEFINE /////////////////////////////////////////////////////


// CATALOGUE - END DEFINE /////////////////////////////////////////////////////