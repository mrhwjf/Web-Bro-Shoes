document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: "AIR FLIGHT 89 (GS)", price: "2.000.000 ₫", image: "../asset/img/catalogue/AIR-FLIGHT-89-(GS).jpg" },
        { name: "AIR FORCE 1 LV8-3 (GS)", price: "3.500.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1-LV8-3-(GS).jpg" },
        { name: "AIR FORCE 1'07", price: "2.700.000 ₫", image: "../asset/img/catalogue/AIR-FORCE-1'07.jpg" }
    ];

    // Select the existing shoes box container
    const shoesBox = document.querySelector(".shoes-box");

    products.forEach(product => {
        // Inner div for each product item with the "product-box" class
        const productDiv = document.createElement("div");
        productDiv.className = "product-box";  // Assign class to match CSS

        // Image element
        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;

        // Name div with the "shoes-name" class
        const nameDiv = document.createElement("div");
        nameDiv.className = "shoes-name";
        nameDiv.textContent = product.name;

        // Price div with the "shoes-price" class
        const priceDiv = document.createElement("div");
        priceDiv.className = "shoes-price";
        priceDiv.textContent = product.price;

        // Append image, name, and price to the product div
        productDiv.appendChild(image);
        productDiv.appendChild(nameDiv);
        productDiv.appendChild(priceDiv);

        // Append the product div to the existing shoes box
        shoesBox.appendChild(productDiv);
    });
});
