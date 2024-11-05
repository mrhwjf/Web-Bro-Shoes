const products = [
    { 
        id: 1,
        name: "70 COURT CANVAS HI",
        price: "2.000.000 ₫",
        image: "../asset/img/catalogue/70-COURT-CANVAS-HI.jpg",
        category: "Sneaker",
        brand: "Converse",
        sex: "U",
        size: [36,37,38,39,41,42,43]
    },
    { 
        id: 2,
        name: "AIR FLIGHT 89 (GS)",
        price: "2.400.000 ₫",
        image: "../asset/img/catalogue/AIR-FLIGHT-89-(GS).jpg",
        category: "Sneaker",
        brand: "Nike",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 3,
        name: "AIR FORCE 1 LV8-3 (GS)",
        price: "3.200.000 ₫",
        image: "../asset/img/catalogue/AIR-FORCE-1-LV8-3-(GS).jpg",
        category: "Sneaker",
        brand: "Nike",
        sex: "U",
        size: [36,37,38,39,41,42,43]
    },
    { 
        id: 4,
        name: "AIR FORCE 1'07", 
        price: "3.500.000 ₫", 
        image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg",
        category: "Sneaker",
        brand: "Nike",
        sex: "U",
        size: [36,37,38,39,41,42,43]
    },
    { 
        id: 5,
        name: "AIR MAX 90 LTR", 
        price: "4.600.000 ₫", 
        image: "../asset/img/catalogue/AIR-MAX-90-LTR.jpg",
        category: "Sneaker",
        brand: "Nike",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 6,
        name: "AIR TERRRA HUMARA", 
        price: "3.200.000 ₫", 
        image: "../asset/img/catalogue/AIR-TERRA-HUMARA.jpg",
        category: "Sneaker",
        brand: "Nike",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 7,
        name: "AIRIZONA VEG THYME", 
        price: "3.500.000 ₫", 
        image: "../asset/img/catalogue/AIRIZONA-VEG-THYME.jpg",
        category: "Sandal",
        brand: "BirkenStock",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 8,
        name: "ARIZONA BLACKBIRKO FLOR SFB", 
        price: "3.200.000 ₫", 
        image: "../asset/img/catalogue/ARIZONA-BLACKBIRKO-FLOR-SFB.jpg",
        category: "Sandal",
        brand: "BirkenStock",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 9,
        name: "ARIZONA TOBACCO BROWN OILDED LEATHER", 
        price: "4.000.000 ₫", 
        image: "../asset/img/catalogue/ARIZONA-TOBACCO-BROWN-OILED-LEATHER.jpg",
        category: "Sandal",
        brand: "BirkenStock",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 10,
        name: "CHUCK 70 SEASONAL", 
        price: "1.650.000 ₫", 
        image: "../asset/img/catalogue/CHUCK-70-SEASONAL.jpg",
        category: "Sneaker",
        brand: "Converse",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 11,
        name: "DUNK LOW (W)", 
        price: "3.500.000 ₫", 
        image: "../asset/img/catalogue/DUNK-LOW-(W).jpg",
        category: "Sneaker",
        brand: "Nike",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 12,
        name: "FASTBREAK PRO SUEDE MID", 
        price: "2.800.000 ₫", 
        image: "../asset/img/catalogue/FASTBREAK-PRO-SUEDE-MID.jpg",
        category: "Sneaker",
        brand: "Converse",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 13,
        name: "FENG CHENG WANG QS", 
        price: "4.200.000 ₫", 
        image: "../asset/img/catalogue/FENG-CHENG-WANG-QS.jpg",
        category: "Sneaker",
        brand: "Converse",
        sex: "U",
        size: [36,37,38,39,41,42,43]
    },
    { 
        id: 14,
        name: "GAZELLE (PS)", 
        price: "1.800.000 ₫", 
        image: "../asset/img/catalogue/GAZELLE-(PS).jpg",
        category: "Kid",
        brand: "Adidas",
        sex: "U",
        size: [20,21,22,23,24]
    },
    { 
        id: 15,
        name: "GAZELLE INDOOR (W)", 
        price: "2.800.000 ₫", 
        image: "../asset/img/catalogue/GAZELLE-INDOOR-(W).jpg",
        category: "Sneaker",
        brand: "Adidas",
        sex: "F",
        size: [36,37,38,39]
    },
    { 
        id: 16,
        name: "HANDBALL SPEZIAL (W)", 
        price: "2.500.000 ₫", 
        image: "../asset/img/catalogue/HANDBALL-SPEZIAL-(W).jpg",
        category: "Sneaker",
        brand: "Adidas",
        sex: "F",
        size: [36,37,38,39]
    },
    { 
        id: 17,
        name: "NIKE CALM BEIGE (W)", 
        price: "2.349.000 ₫", 
        image: "../asset/img/catalogue/Nike_Calm_Be(w).jpg",
        category: "Sandal",
        brand: "Nike",
        sex: "F",
        size: [36,37,38,39]
    },
    { 
        id: 18,
        name: "NMD S1", 
        price: "3.000.000 ₫", 
        image: "../asset/img/catalogue/NMD_S1.jpg",
        category: "Sneaker",
        brand: "Adidas",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 19,
        name: "RUN STAR HIKE HI", 
        price: "3.200.000 ₫", 
        image: "../asset/img/catalogue/RUN-STAR-HIKE-HI.jpg",
        category: "Sneaker",
        brand: "Converse",
        sex: "U",
        size: [36,37,38,39,41,42,43]
    },
    {
        id: 20,
        name: "SAMBA OG", 
        price: "2.500.000 ₫", 
        image: "../asset/img/catalogue/SAMBA-OG.jpg",
        category: "Sneaker",
        brand: "Adidas",
        sex: "U",
        size: [36,37,38,39,41,42,43]
    },
    { 
        id: 21,
        name: "SABA XLG", 
        price: "3.500.000 ₫", image: "../asset/img/catalogue/SAMBA-XLG.jpg",
        category: "Sneaker",
        brand: "Adidas",
        sex: "M",
        size: [41,42,43]
    },
    {
        id: 22,
        name: "SL72 RS (PS)", 
        price: "2.000.000 ₫", 
        image: "../asset/img/catalogue/SL-72-RS-(PS).jpg",
        category: "Kid",
        brand: "Adidas",
        sex: "U",
        size: [20,21,22,23,24]
    },
    { 
        id: 23,
        name: "SL72 RS (TD)", 
        price: "1.800.000 ₫", 
        image: "../asset/img/catalogue/SL72-RS-(TD).jpg",
        category: "Kid",
        brand: "Adidas",
        sex: "U",
        size: [20,21,22,23,24]
    },
    { 
        id: 24,
        name: "SL72 RS", 
        price: "2.500.000 ₫", 
        image: "../asset/img/catalogue/SL72-RS.jpg",
        category: "Sneaker",
        brand: "Adidas",
        sex: "M",
        size: [41,42,43] 
    },
    { 
        id: 25,
        name: "STAN SMITH (TD)", 
        price: "1.500.000 ₫", 
        image: "../asset/img/catalogue/STAN-SMITH-(TD).jpg",
        category: "Kid",
        brand: "Adidas",
        sex: "U",
        size: [20,21,22,23,24]
    },
    { 
        id: 26,
        name: "SUPERSTAR", 
        price: "2.500.000 ₫", 
        image: "../asset/img/catalogue/SUPERSTAR.jpg",
        category: "Sneaker",
        brand: "Adidas",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 27,
        name: "TEVA HURRICANE DRIFT (M)", 
        price: "990.000 ₫", 
        image: "../asset/img/catalogue/Teva_Hurricane_Drift(m)-990k.jpg",
        category: "Sandal",
        brand: "Teva",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 28,
        name: "TEVA TERRA FI 5 UNIVERSAL", 
        price: "2.099.000 ₫", 
        image: "../asset/img/catalogue/Teva_Terra_Fi_5_Universal-2099k.jpg",
        category: "Sandal",
        brand: "Teva",
        sex: "M",
        size: [41,42,43]
    },
    { 
        id: 29,
        name: "TEVA VOYA STRAPPY (W)", 
        price: "845.000 ₫", 
        image: "../asset/img/catalogue/Teva_Voya_Strappy(w)-845k.jpg",
        category: "Sandal",
        brand: "Teva",
        sex: "F",
        size: [36,37,38,39]
    },
    {
        id: 30,
        name: "TEVA ZYMIC (W)", 
        price: "1.600.000 ₫", 
        image: "../asset/img/catalogue/Teva_Zymic-1600k(w).jpg",
        category: "Sandal",
        brand: "Teva",
        sex: "F",
        size: [36,37,38,39]
    },
    {
        id: 31,
        name: "TEVA SANDALS HURRICANE (W)", 
        price: "1.900.000 ₫", 
        image: "../asset/img/catalogue/TevaSandalsHunrricane(w).jpg",
        category: "Sandal",
        brand: "Teva",
        sex: "F",
        size: [36,37,38,39]
    },
    { 
        id: 32,
        name: "UNISEX FILA PONG SD (W)", 
        price: "1.595.000 ₫", 
        image: "../asset/img/catalogue/Unisex_Fila_Pong_Sd-1595k(w).jpg",
        category: "Sandal",
        brand: "Fila",
        sex: "F",
        size: [36,37,38,39]
    },
    { 
        id: 33,
        name: "UNISEX FILA TORI (M)", 
        price: "1.995.000 ₫", 
        image: "../asset/img/catalogue/unisex_fila_tori-1995k(m).jpg",
        category: "Sandal",
        brand: "Fila",
        sex: "M",
        size: [41,42,43]
    },

];


const itemsPerPage = 8;
let currentPage = 1;

// Function to setup pagination
function setupPagination() {
    const paginationContainer = document.querySelector(".pagination");
    paginationContainer.innerHTML = ""; // Clear existing pagination buttons

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const maxButtons = 3; // Total visible buttons in pagination (not including first/last)
    const half = Math.floor(maxButtons / 2);
    const startPage = Math.max(2, currentPage - half); // Start after page 1
    const endPage = Math.min(totalPages - 1, currentPage + half); // End before last page

    // Add first page button
    createPageButton(1);

    // Add ellipsis if starting page is greater than 2
    if (startPage > 2) {
        createEllipsis();
    }

    // Add page buttons around the current page
    for (let i = startPage; i <= endPage; i++) {
        createPageButton(i);
    }

    // Add ellipsis if ending page is less than the last page - 1
    if (endPage < totalPages - 1) {
        createEllipsis();
    }

    // Add last page button
    if (totalPages > 1) {
        createPageButton(totalPages);
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

// Helper function to create ellipsis
function createEllipsis() {
    const paginationContainer = document.querySelector(".pagination");
    const ellipsis = document.createElement("span");
    ellipsis.textContent = "...";
    ellipsis.className = "ellipsis";
    paginationContainer.appendChild(ellipsis);
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
    productContainer.innerHTML = ""; // Xóa nội dung hiện tại

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToDisplay = products.slice(start, end);

    let productHTML = ""; // Tạo chuỗi HTML

    productsToDisplay.forEach(product => {
        // Tạo khối HTML cho sản phẩm
        productHTML += `
            <div class="product-box" onclick="openProductDetails(${product.id})">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='../asset/img/catalogue/coming-soon.jpg'" />
                <div class="shoes-name">${product.name}</div>
                <div class="shoes-price">${product.price}</div>
            </div>
        `;
    });

    // Gán chuỗi HTML vào innerHTML của container
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
                    <p id="modalProductPrice">${price}</p>
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
    }
}

function closeProductDetails() {
    document.getElementById("productDetailsModal").style.display = "none";
}

// Function to close the modal
function closeProductDetails() {
document.getElementById("productDetailsModal").style.display = "none";
}

// Initialize pagination and display products on page load
document.addEventListener("DOMContentLoaded", function() {
    setupPagination();
    displayProducts(currentPage);
    createModal();
});
