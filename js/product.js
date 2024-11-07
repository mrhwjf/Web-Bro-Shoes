//Khoi tao danh sach san pham
// function createProduct() {
//     if (localStorage.getItem('products') == null) {
        let products = [{
        id: 1,
        name: "70 COURT CANVAS HI",
        price: "2000000",
        image: "../asset/img/catalogue/70-COURT-CANVAS-HI.jpg",
        category: "Sneaker",
        brand: "Converse",
        sex: "U",
        size: [36,37,38,39,41,42,43]
    },
    { 
        id: 2,
        name: "AIR FLIGHT 89 (GS)",
        price: "2400000",
        image: "../asset/img/catalogue/AIR-FLIGHT-89-(GS).jpg",
        category: "Sneaker",
        brand: "Nike",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 3,
        name: "AIR FORCE 1 LV8-3 (GS)",
        price: "3200000",
        image: "../asset/img/catalogue/AIR-FORCE-1-LV8-3-(GS).jpg",
        category: "Sneaker",
        brand: "Nike",
        sex: "U",
        size: [36,37,38,39,41,42,43]
    },
    { 
        id: 4,
        name: "AIR FORCE 1'07", 
        price: "3500000", 
        image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg",
        category: "Sneaker",
        brand: "Nike",
        sex: "U",
        size: [36,37,38,39,41,42,43]
    },
    { 
        id: 5,
        name: "AIR MAX 90 LTR", 
        price: "4600000", 
        image: "../asset/img/catalogue/AIR-MAX-90-LTR.jpg",
        category: "Sneaker",
        brand: "Nike",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 6,
        name: "AIR TERRRA HUMARA", 
        price: "3200000", 
        image: "../asset/img/catalogue/AIR-TERRA-HUMARA.jpg",
        category: "Sneaker",
        brand: "Nike",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 7,
        name: "AIRIZONA VEG THYME", 
        price: "3500000", 
        image: "../asset/img/catalogue/AIRIZONA-VEG-THYME.jpg",
        category: "Sandal",
        brand: "BirkenStock",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 8,
        name: "ARIZONA BLACKBIRKO FLOR SFB", 
        price: "3200000", 
        image: "../asset/img/catalogue/ARIZONA-BLACKBIRKO-FLOR-SFB.jpg",
        category: "Sandal",
        brand: "BirkenStock",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 9,
        name: "ARIZONA TOBACCO BROWN OILDED LEATHER", 
        price: "4000000", 
        image: "../asset/img/catalogue/ARIZONA-TOBACCO-BROWN-OILED-LEATHER.jpg",
        category: "Sandal",
        brand: "BirkenStock",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 10,
        name: "CHUCK 70 SEASONAL", 
        price: "1650000", 
        image: "../asset/img/catalogue/CHUCK-70-SEASONAL.jpg",
        category: "Sneaker",
        brand: "Converse",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 11,
        name: "DUNK LOW (W)", 
        price: "3500000", 
        image: "../asset/img/catalogue/DUNK-LOW-(W).jpg",
        category: "Sneaker",
        brand: "Nike",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 12,
        name: "FASTBREAK PRO SUEDE MID", 
        price: "2800000", 
        image: "../asset/img/catalogue/FASTBREAK-PRO-SUEDE-MID.jpg",
        category: "Sneaker",
        brand: "Converse",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 13,
        name: "FENG CHENG WANG QS", 
        price: "4200000", 
        image: "../asset/img/catalogue/FENG-CHENG-WANG-QS.jpg",
        category: "Sneaker",
        brand: "Converse",
        sex: "U",
        size: [36,37,38,39,41,42,43]
    },
    { 
        id: 14,
        name: "GAZELLE (PS)", 
        price: "1800000", 
        image: "../asset/img/catalogue/GAZELLE-(PS).jpg",
        category: "Kid",
        brand: "Adidas",
        sex: "U",
        size: [20,21,22,23,24]
    },
    { 
        id: 15,
        name: "GAZELLE INDOOR (W)", 
        price: "2800000", 
        image: "../asset/img/catalogue/GAZELLE-INDOOR-(W).jpg",
        category: "Sneaker",
        brand: "Adidas",
        sex: "F",
        size: [36,37,38,39]
    },
    { 
        id: 16,
        name: "HANDBALL SPEZIAL (W)", 
        price: "2500000", 
        image: "../asset/img/catalogue/HANDBALL-SPEZIAL-(W).jpg",
        category: "Sneaker",
        brand: "Adidas",
        sex: "F",
        size: [36,37,38,39]
    },
    { 
        id: 17,
        name: "NIKE CALM BEIGE (W)", 
        price: "2349000", 
        image: "../asset/img/catalogue/Nike_Calm_Be(w).jpg",
        category: "Sandal",
        brand: "Nike",
        sex: "F",
        size: [36,37,38,39]
    },
    { 
        id: 18,
        name: "NMD S1", 
        price: "3000000", 
        image: "../asset/img/catalogue/NMD_S1.jpg",
        category: "Sneaker",
        brand: "Adidas",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 19,
        name: "RUN STAR HIKE HI", 
        price: "3200000", 
        image: "../asset/img/catalogue/RUN-STAR-HIKE-HI.jpg",
        category: "Sneaker",
        brand: "Converse",
        sex: "U",
        size: [36,37,38,39,41,42,43]
    },
    {
        id: 20,
        name: "SAMBA OG", 
        price: "2500000", 
        image: "../asset/img/catalogue/SAMBA-OG.jpg",
        category: "Sneaker",
        brand: "Adidas",
        sex: "U",
        size: [36,37,38,39,41,42,43]
    },
    { 
        id: 21,
        name: "SABA XLG", 
        price: "3500000", image: "../asset/img/catalogue/SAMBA-XLG.jpg",
        category: "Sneaker",
        brand: "Adidas",
        sex: "M",
        size: [41,42,43]
    },
    {
        id: 22,
        name: "SL72 RS (PS)", 
        price: "2000000", 
        image: "../asset/img/catalogue/SL-72-RS-(PS).jpg",
        category: "Kid",
        brand: "Adidas",
        sex: "U",
        size: [20,21,22,23,24]
    },
    { 
        id: 23,
        name: "SL72 RS (TD)", 
        price: "1800000", 
        image: "../asset/img/catalogue/SL72-RS-(TD).jpg",
        category: "Kid",
        brand: "Adidas",
        sex: "U",
        size: [20,21,22,23,24]
    },
    { 
        id: 24,
        name: "SL72 RS", 
        price: "2500000", 
        image: "../asset/img/catalogue/SL72-RS.jpg",
        category: "Sneaker",
        brand: "Adidas",
        sex: "M",
        size: [41,42,43] 
    },
    { 
        id: 25,
        name: "STAN SMITH (TD)", 
        price: "1500000", 
        image: "../asset/img/catalogue/STAN-SMITH-(TD).jpg",
        category: "Kid",
        brand: "Adidas",
        sex: "U",
        size: [20,21,22,23,24]
    },
    { 
        id: 26,
        name: "SUPERSTAR", 
        price: "2500000", 
        image: "../asset/img/catalogue/SUPERSTAR.jpg",
        category: "Sneaker",
        brand: "Adidas",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 27,
        name: "TEVA HURRICANE DRIFT (M)", 
        price: "990000", 
        image: "../asset/img/catalogue/Teva_Hurricane_Drift(m)-990k.jpg",
        category: "Sandal",
        brand: "Teva",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 28,
        name: "TEVA TERRA FI 5 UNIVERSAL", 
        price: "2099000", 
        image: "../asset/img/catalogue/Teva_Terra_Fi_5_Universal-2099k.jpg",
        category: "Sandal",
        brand: "Teva",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 29,
        name: "TEVA VOYA STRAPPY (W)", 
        price: "845000", 
        image: "../asset/img/catalogue/Teva_Voya_Strappy(w)-845k.jpg",
        category: "Sandal",
        brand: "Teva",
        sex: "F",
        size: [36,37,38,39]
    },
    {
        id: 30,
        name: "TEVA ZYMIC (W)", 
        price: "1600000", 
        image: "../asset/img/catalogue/Teva_Zymic-1600k(w).jpg",
        category: "Sandal",
        brand: "Teva",
        sex: "F",
        size: [36,37,38,39]
    },
    {
        id: 31,
        name: "TEVA SANDALS HURRICANE (W)", 
        price: "1900000", 
        image: "../asset/img/catalogue/TevaSandalsHunrricane(w).jpg",
        category: "Sandal",
        brand: "Teva",
        sex: "F",
        size: [36,37,38,39]
    },
    { 
        id: 32,
        name: "UNISEX FILA PONG SD (W)", 
        price: "1595000", 
        image: "../asset/img/catalogue/Unisex_Fila_Pong_Sd-1595k(w).jpg",
        category: "Sandal",
        brand: "Fila",
        sex: "F",
        size: [36,37,38,39]
    },
    { 
        id: 33,
        name: "UNISEX FILA TORI (M)", 
        price: "1995000", 
        image: "../asset/img/catalogue/unisex_fila_tori-1995k(m).jpg",
        category: "Sandal",
        brand: "Fila",
        sex: "M",
        size: [41,42,43]
    },

];
// localStorage.setItem('products', JSON.stringify(products));
//     }
// }

// Doi sang dinh dang tien VND
function vnd(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

const itemsPerPage = 8;
let currentPage = 1;

// Function to setup pagination
function setupPagination() {
    const paginationContainer = document.querySelector(".pagination");
    paginationContainer.innerHTML = ""; // Clear existing pagination buttons

    const totalPages = Math.ceil(products.length / itemsPerPage);

    // Create page buttons for all pages
    for (let i = 1; i <= totalPages; i++) {
        createPageButton(i);
    }

    // Highlight current page button
    highlightCurrentPage();
}

// Helper function to create a page button
function createPageButton(pageNumber) {
    const paginationContainer = document.querySelector(".pagination");
    const button = document.createElement("button");
    button.textContent = pageNumber;
    button.className = "pagination-button";
    button.addEventListener("click", function() {
        currentPage = pageNumber;
        displayProducts(currentPage); // Call your display function
        setupPagination(); // Rebuild pagination
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Adds a smooth scroll effect
        });
    });
    paginationContainer.appendChild(button);
}

// Helper function to highlight the current page
function highlightCurrentPage() {
    const buttons = document.querySelectorAll(".pagination-button");
    buttons.forEach(button => {
        button.classList.toggle("active", parseInt(button.textContent) === currentPage);
    });
}

// Function to display products
function displayProducts(page) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = ""; // Clear current content

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToDisplay = products.slice(start, end);

    let productHTML = ""; // Create HTML string

    productsToDisplay.forEach(product => {
        // Create HTML block for each product
        productHTML += `
            <div class="product-box" onclick="openProductDetails(${product.id})">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='../asset/img/catalogue/coming-soon.jpg'" />
                <div class="shoes-name">${product.name}</div>
                <div class="shoes-price">${vnd(product.price)}</div>
            </div>
        `;
    });

    // Set HTML string to the container's innerHTML
    productContainer.innerHTML = productHTML;
}

// Dynamically create modal structure
function createModal(img, productname, price, sizeArray) {
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
                        <button class="add-to-cart-button">Add to cart</button>
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

// Mở modal với chi tiết sản phẩm cụ thể
function openProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        createModal(product.image, product.name, product.price, product.size);
        const modal = document.getElementById("productDetailsModal");
        modal.classList.add("active"); // Add class to show modal
    }
}

function closeProductDetails() {
    const modal = document.getElementById("productDetailsModal");
    if (modal) {
        modal.style.display = "none";
    }
    // Đảm bảo .pagination có thể nhận sự kiện
    document.querySelector(".pagination").style.pointerEvents = "auto";
}

// Initialize pagination and display products on page load
document.addEventListener("DOMContentLoaded", function() {
    setupPagination();
    displayProducts(currentPage);
    createModal();
});
