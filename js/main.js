
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
//---------------------------

let modalCart = document.querySelector('.modal-cart');
let overlay = document.createElement('div');
overlay.className = 'modal-overlay';
document.body.appendChild(overlay);

function openCart() {
    modalCart.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = "hidden"; // Khóa cuộn trang
}

function closeCart() {
    modalCart.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = "auto"; // Mở khóa cuộn trang
}

// Đóng modal khi nhấp vào nền mờ
overlay.onclick = closeCart;

// Khởi tạo giỏ hàng
let cart = [];

// Hàm cập nhật số lượng sản phẩm trong giỏ hàng
function updateCartCount() {
    document.querySelector('.count-product-cart').textContent = cart.length;
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity += 1; // Tăng số lượng nếu đã có trong giỏ
        } else {
            cart.push({ ...product, quantity: 1 }); // Thêm sản phẩm với quantity ban đầu là 1
        }
        updateCartCount(); // Cập nhật số lượng hiển thị
        displayCartItems(); // Cập nhật danh sách sản phẩm trong giỏ
        alert(`${product.name} đã được thêm vào giỏ hàng!`);
    }
}



function createModal(img, productname, price, sizeArray, productId) {
    const sizeButtonsHTML = sizeArray.map(size => `
        <button class="size-button">${size}</button>
    `).join("");

    const modalHTML = `
    <div id="productDetailsModal" class="product-details-modal" style="display: none;">
        <div class="modal-content">
            <span class="close-modal" onclick="closeProductDetails()">&times;</span>
            <div class="modal-content-container">
                <div class="modal-product-image">
                    <img src="${img}" alt="${productname}">
                </div>
                <div class="product-info">
                    <h2 id="modalProductName">${productname}</h2>
                    <p id="modalProductPrice">${vnd(price)}</p>
                    <div class="size-container">${sizeButtonsHTML}</div>
                    <div>
                        <!-- Thêm sự kiện onclick gọi hàm addToCart với productId -->
                        <button class="add-to-cart-button" onclick="addToCart(${productId})">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

    // Xóa modal cũ (nếu có) và thêm modal mới vào cuối body
    const existingModal = document.getElementById("productDetailsModal");
    if (existingModal) existingModal.remove();
    document.getElementsByClassName("catalogue-container")[0].innerHTML += modalHTML;

    // Hiển thị modal
    document.getElementById("productDetailsModal").style.display = "flex";
}
function openProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        createModal(product.image, product.name, product.price, product.size, productId);
        const modal = document.getElementById("productDetailsModal");
        modal.classList.add("active"); // Thêm class để hiển thị modal
    }
}
function displayCartItems() {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.innerHTML = ''; // Xóa nội dung cũ

    let totalPrice = 0;

    // Hiển thị từng sản phẩm trong giỏ hàng
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity; // Giá của sản phẩm x số lượng
        totalPrice += itemTotal; // Cộng dồn để tính tổng

        const cartItemHTML = `
            <div class="cart-item">
                <p>${item.name}</p>
                <p>Giá: ${vnd(item.price)}</p>
                <p>Số lượng: ${item.quantity}</p>
                <p>Tổng: ${vnd(itemTotal)}</p>
            </div>
        `;
        cartContainer.innerHTML += cartItemHTML; // Thêm sản phẩm vào giỏ
    });

    // Hiển thị tổng giá trị đơn hàng
    const totalHTML = `
        <div class="cart-total">
            <strong>Tổng giá trị đơn hàng: ${vnd(totalPrice)}</strong>
        </div>
    `;
    cartContainer.innerHTML += totalHTML;
}
function openCart() {
    displayCartItems(); // Cập nhật danh sách sản phẩm trong giỏ khi mở
    document.querySelector('.modal-cart').classList.add('open');
    document.body.style.overflow = "hidden";
}
function vnd(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}


function closeCart() {
    document.querySelector('.modal-cart').classList.remove('open'); // Ẩn modal
    document.body.style.overflow = "auto"; // Cho phép cuộn trang
}
/*
function openCart() {
    const modal = document.getElementById("cartModal");
    modal.style.display = "flex"; // Hiển thị modal
    document.body.style.overflow = "hidden"; // Khóa cuộn trang
}

function closeCart() {
    const modal = document.getElementById("cartModal");
    modal.style.display = "none"; // Ẩn modal
    document.body.style.overflow = "auto"; // Mở khóa cuộn trang
}
*/
// Đóng modal nếu người dùng nhấn vào nền bên ngoài
function closeModalIfClickedOutside(event) {
    const modal = document.getElementById("cartModal");
    if (event.target === modal) { // Kiểm tra nếu nhấn vào nền ngoài modal
        closeCart(); // Gọi hàm đóng modal
    }
}
