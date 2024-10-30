const products = [
        { name: "AIR FLIGHT 89 (GS)", price: "2.000.000 ₫", image: "../asset/img/catalogue/AIR-FLIGHT-89-(GS).jpg" },
        { name: "AIR FORCE 1 LV8-3 (GS)", price: "3.500.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1-LV8-3-(GS).jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" },

    ];


    // Variables
const itemsPerPage = 8;
const totalPages = Math.ceil(products.length / itemsPerPage);
let currentPage = 1;

// Display page buttons dynamically
function setupPagination() {
    const paginationContainer = document.querySelector(".pagination");
    paginationContainer.innerHTML = ""; // Clear existing pagination buttons

    // Define how many pages to show before and after the current page
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
    createPageButton(totalPages);

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

function displayProducts(page) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = ""; // Clear existing products

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToDisplay = products.slice(start, end);

    productsToDisplay.forEach(product => {
        // Create product box
        const productBox = document.createElement("div");
        productBox.className = "product-box";

        // Add product image
        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;

        // Add placeholder if image fails to load
        image.onerror = () => { image.src = "../asset/img/catalogue/coming-soon.jpg"; };

        // Add product name
        const name = document.createElement("div");
        name.className = "shoes-name";
        name.textContent = product.name;

        // Add product price
        const price = document.createElement("div");
        price.className = "shoes-price";
        price.textContent = product.price;

        // Append to product box
        productBox.appendChild(image);
        productBox.appendChild(name);
        productBox.appendChild(price);

        // Append product box to container
        productContainer.appendChild(productBox);
    });
}

// Initialize pagination and display products on page load
document.addEventListener("DOMContentLoaded", function() {
    setupPagination();
    displayProducts(currentPage);
});
