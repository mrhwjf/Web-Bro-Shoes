// Doi sang dinh dang tien VND 
function vnd(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

// Close popup 
const body = document.querySelector("body");
let modalContainer = document.querySelectorAll('.modal');
let modalBox = document.querySelectorAll('.mdl-cnt');

// Click vùng ngoài sẽ tắt Popup
modalContainer.forEach(item => {
    item.addEventListener('click', closeModal);
});

modalBox.forEach(item => {
    item.addEventListener('click', function (event) {
        event.stopPropagation();
    })
});

function closeModal() {
    modalContainer.forEach(item => {
        item.classList.remove('open');
    });
    // console.log(modalContainer);
    body.style.overflow = "auto";
}

function increasingNumber(e) {
    let qty = e.parentNode.querySelector('.input-qty');
    if (parseInt(qty.value) < qty.max) {
        qty.value = parseInt(qty.value) + 1;
    } else {
        qty.value = qty.max;
    }
}

function decreasingNumber(e) {
    let qty = e.parentNode.querySelector('.input-qty');
    if (qty.value > qty.min) {
        qty.value = parseInt(qty.value) - 1;
    } else {
        qty.value = qty.min;
    }
}

function detailProduct(index) {
    let modal = document.querySelector('.modal.product-detail');
    let products = JSON.parse(localStorage.getItem('products'));
    event.preventDefault();
    let infoProduct = products.find(sp => {
        return sp.id === index;
    })
    const sizeButtonsHTML = infoProduct.size.map(size => `
        <button class="size-button">${size}</button>
    `).join("");
    let modalHtml = `
    <div class="img-container">
        <img src="${infoProduct.image}" alt="">
    </div>
    <div class="modal-body">
        <h2 class="product-title">${infoProduct.name}</h2>
        <div class="product-control">
            <div class="priceBox">
                <span class="current-price">${vnd(infoProduct.price)}</span>
            </div>
             <div class="buttons_added">
                <button class="minus is-form" type="button" value="-" onclick="decreasingNumber(this)">
                    <i class="fa-solid fa-minus"></i>
                </button>
                <input class="input-qty" max="100" min="1" name="" type="number" value="1">
                <button class="plus is-form" type="button" value="+" onclick="increasingNumber(this)">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
    </div>
    <div class="size-container">${sizeButtonsHTML}</div>
    <div class="modal-footer">
        <div class="price-total">
            <span class="thanhtien">Total</span>
            <span class="price">${vnd(infoProduct.price)}</span>
        </div>
        <div class="modal-footer-control">
            <button class="checkout-btn" data-product="${infoProduct.id}">Buy now</button>
            <button class="button-dat" id="add-cart"><i class="fa-solid fa-cart-shopping "></i></button>
        </div>
    </div>`;
    document.querySelector('#product-detail-content').innerHTML = modalHtml;
    modal.classList.add('open');
    body.style.overflow = "hidden";

    //Cap nhat gia tien khi tang so luong san pham
    let tgbtn = document.querySelectorAll('.is-form');
    let qty = document.querySelector('.product-control .input-qty');
    let priceText = document.querySelector('.price');
    tgbtn.forEach(element => {
        element.addEventListener('click', () => {
            let price = infoProduct.price * parseInt(qty.value.trim());
            priceText.innerHTML = vnd(price);
        });
    });

    // qty.addEventListener("keyup", () => {
    //     qty.value = qty.value.trim().replace(/[^0-9]/g, ""); 

    //     let quantity = parseInt(qty.value.trim());
    //     let price = infoProduct.price * (isNaN(quantity) ? 0 : quantity);

    //     priceText.innerHTML = vnd(price);
    // });


    // Select a shoes size
    let selectedSize;
    document.querySelector(".size-container").addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            document.querySelectorAll(".size-container button").forEach(button => {
                button.classList.remove("active");
            });

            event.target.classList.add("active");
            selectedSize = event.target.textContent.trim();
            console.log("Selected size: " + selectedSize);
        }
    });

    modal.querySelector('.button-dat').addEventListener('click', () => {
        if (!selectedSize) {
            toastMsg({ title: "REMINDER", message: "Please chose a shoe size first!", type: "warning" });
            return;
        }

        if (localStorage.getItem('currentuser')) {
            addCart(infoProduct.id, selectedSize, parseInt(qty.value));
        } else {
            toastMsg({ title: "REMINDER", message: "Please login first!", type: "warning" });
            closeModal();
        }
    });

    modal.querySelector(".checkout-btn").addEventListener("click", () => {
        if (!selectedSize) {
            toastMsg({ title: "REMINDER", message: "Please chose a shoe size first!", type: "warning" });
            return;
        }

        if (localStorage.getItem('currentuser')) {
            addCart(infoProduct.id, selectedSize, parseInt(qty.value));
            showCartCheckout();
            toggleModal("checkout-page");
        } else {
            toastMsg({ title: "REMINDER", message: "Please login first!", type: "warning" });
            closeModal();
        }
    });

}

function displayProducts(productShow) {
    const productContainer = document.getElementById("home-product");
    productContainer.innerHTML = ""; // Clear current content

    let productHTML = ""; // Create HTML string
    if (productShow.length !== 0) {
        productShow.forEach(product => {
            if (product.isDeleted) return;

            productHTML += `
            <div class="product-box" onclick="detailProduct(${product.id})">
                <div class="img-container">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='./asset/img/catalogue/coming-soon.jpg'" />
                </div>
                <div class="shoes-name">${product.name}</div>
                <div class="shoes-price">${vnd(product.price)}</div>
            </div>
        `;
        });

        productContainer.innerHTML = productHTML;
    } else {
        // No products to show
        productContainer.style.display = "flex"; // Ensure the container is visible
        displayWhenEmpty("#home-product", displayEmptyHTML_catalogue);
    }
}


// Phân trang 
let perPage = 8;
let currentPage = 1;

function displayList(productAll, perPage, currentPage) {
    let start = (currentPage - 1) * perPage;
    let end = (currentPage - 1) * perPage + perPage;
    let productShow = productAll.slice(start, end);
    displayProducts(productShow);
}

function showHomeProduct(products) {
    const filters = getFilterOption();

    console.group("Filtered products");
    let filteredProducts = filterProducts(products, filters);
    console.groupEnd();

    filteredProducts = sortProducts(filteredProducts, filters.sortbyOption);
    let displayCatalogueAmount = document.getElementById("display-catalogue-amount");
    displayCatalogueAmount.textContent = filteredProducts.length + " ";

    displayList(filteredProducts, perPage, currentPage);
    setupPagination(filteredProducts, perPage);
    window.scrollTo({ top: 0 });
}


function setupPagination(productAll, perPage) {
    const pageNav = document.querySelector('.page-nav'); // Get the pagination container
    const pageNavList = document.querySelector('.page-nav-list'); // Get the list inside pagination

    // Clear previous pagination content
    pageNavList.innerHTML = '';

    // Handle case where no products are available
    if (productAll.length === 0) {
        pageNav.style.display = 'none'; // Hide pagination
        return; // Exit the function early
    }

    // Show pagination if there are products
    pageNav.style.display = 'flex'; // Ensure pagination is visible

    // Calculate the number of pages
    let page_count = Math.ceil(productAll.length / perPage);

    // Generate pagination items
    for (let i = 1; i <= page_count; i++) {
        let li = paginationChange(i, productAll, currentPage);
        pageNavList.appendChild(li);
    }
}

function paginationChange(page, productAll, currentPage) {
    let node = document.createElement(`li`);
    node.classList.add('page-nav-item');
    node.innerHTML = `<a href="javascript:;">${page}</a>`;
    if (currentPage == page) node.classList.add('active');
    node.addEventListener('click', function () {
        currentPage = page;
        displayList(productAll, perPage, currentPage);
        let t = document.querySelectorAll('.page-nav-item.active');
        for (let i = 0; i < t.length; i++) {
            t[i].classList.remove('active');
        }
        node.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    return node;
}


window.onload = () => {
    window.scrollTo({ top: 0 });
    createProduct(); // Ensure products are created in localStorage
    let products = JSON.parse(localStorage.getItem('products')); // Fetch the products from localStorage
    showHomeProduct(products); // Display products after initialization

    // For checkout.js
    initializeProvinces();

    //For main.js
    updateMenuVisibility();
}