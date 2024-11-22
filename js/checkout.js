// // Mở trang thanh toán
// let checkoutpage = document.querySelector('.checkout-page');

// function openCheckoutPage() {
//     checkoutpage.classList.add('active');
//     thanhtoanpage(1);
//     closeCart();
//     body.style.overflow = "hidden";
// };

// // Đóng trang thanh toán
// function closeCheckoutPage() {
//     checkoutpage.classList.remove('active');
//     body.style.overflow = "auto";
// }

// function thanhtoanpage(option, product) {
//     // Xử lý ngày nhận hàng
//     let today = new Date();
//     let ngaymai = new Date();
//     let ngaykia = new Date();
//     ngaymai.setDate(today.getDate() + 1);
//     ngaykia.setDate(today.getDate() + 2);
//     let dateorderhtml = `
//         <a href="javascript:;" class="pick-date active" data-date="${today}">
//             <span class="text">Hôm nay</span>
//             <span class="date">${today.getDate()}/${today.getMonth() + 1}</span>
//         </a>
//         <a href="javascript:;" class="pick-date" data-date="${ngaymai}">
//             <span class="text">Ngày mai</span>
//             <span class="date">${ngaymai.getDate()}/${ngaymai.getMonth() + 1}</span>
//         </a>
//         <a href="javascript:;" class="pick-date" data-date="${ngaykia}">
//             <span class="text">Ngày kia</span>
//             <span class="date">${ngaykia.getDate()}/${ngaykia.getMonth() + 1}</span>
//         </a>`;
//     document.querySelector('.date-order').innerHTML = dateorderhtml;
//     let pickdate = document.getElementsByClassName('pick-date');
//     for (let i = 0; i < pickdate.length; i++) {
//         pickdate[i].onclick = function () {
//             document.querySelector(".pick-date.active").classList.remove("active");
//             this.classList.add('active');
//         }
//     }
// }


//......................................
const checkoutPage = document.getElementById("checkout-page");
const DELIVERY_FEE = 30000;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".display-deliveryfee").forEach(ele => {
        ele.innerText = vnd(30000);
    });
});

function togglePaymentMethod(method) {
    document.getElementById('cash-option').style.display = method === 'cash' ? 'block' : 'none';
    document.getElementById('card-option').style.display = method === 'card' ? 'block' : 'none';
}

function toggleAddressMethod(method) {
    const accountInfo = document.getElementById('default-address');
    const newAddressInput = document.getElementById('new-address');

    if (method === 'new') {
        accountInfo.style.display = 'none';
        newAddressInput.style.display = 'flex';
    } else if (method === 'default') {
        accountInfo.style.display = 'block';
        newAddressInput.style.display = 'none';
    }
}

function showCartCheckout() {
    if (!localStorage.getItem("currentuser")) {
        console.log("showCartCheckout(): User not logged in.");
        return;
    }

    let currentuser = JSON.parse(localStorage.getItem("currentuser"));
    const cartBody = document.querySelector(".checkout-page .cart-body");
    cartBody.style.maxHeight = "520px";
    cartBody.style.overflowY = "auto";

    if (currentuser.cart.length !== 0) {
        // Show the checkout button and generate cart items HTML
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
                            <p class="display-product-price" style="position: absolute; bottom: 1.5rem; right: 0;">${vnd(product.price)}</p>
                        </div>
                        <div class="cart-item-amount">
                            <p>x<span class="display-product-quantity">${item.quantity}</span></p>
                        </div>
                    </div>
                `;
        });
        // Inject cart items into cart body
        cartBody.innerHTML = cartItemhtml;
    }
    console.log(cartBody.innerHTML);
    return cartBody.innerHTML;
}

function validateAddress() {
    const addressOption = checkoutPage.querySelector('input[name="address-option"]:checked');
    let isAddressValid = false;
    let addressDetails = {};

    // Get region values
    const province = document.getElementById("province").value.trim();
    const district = document.getElementById("district").value.trim();
    const ward = document.getElementById("ward").value.trim();

    if (addressOption) {
        const checkoutType = addressOption.getAttribute("checkout-type");

        if (!province || !district || !ward) {
            // Region validation regardless of address option
            toastMsg({ title: "ERROR", message: "Please select a region.", type: "error" });
        } else if (checkoutType === "default-address") {
            // Default address validation
            const defaultAddress = document.getElementById("default-address").value.trim();
            if (defaultAddress !== "") {
                isAddressValid = true;
                addressDetails = {
                    fullAddress: defaultAddress,
                    region: { 
                        province: province,
                        district: district,
                        ward: ward,
                    }
                };
            } else {
                toastMsg({ title: "ERROR", message: "Cannot read address from user.", type: "error" });
            }
        } else if (checkoutType === "new-address") {
            // New address validation
            const newAddress = document.getElementById("checkout-address-new").value.trim();
            if (newAddress) {
                isAddressValid = true;
                addressDetails = {
                    fullAddress: newAddress,
                    region: { 
                        province: province,
                        district: district,
                        ward: ward,
                    }
                };
            } else {
                toastMsg({ title: "ERROR", message: "Please enter your new address.", type: "error" });
            }
        }
    } else {
        toastMsg({ title: "ERROR", message: "Please select an address option.", type: "error" });
    }

    return { isAddressValid, addressDetails };
}


function validatePayment() {
    const paymentMethod = checkoutPage.querySelector('input[name="payment-method"]:checked');
    let isPaymentValid = false;
    let paymentDetails = {};

    if (paymentMethod) {
        if (paymentMethod.value === "cash") {
            isPaymentValid = true;
            paymentDetails = {
                method: "Cash"
            };
        } else if (paymentMethod.value === "card") {
            const cardOwner = document.getElementById("card-owner-name").value.trim().toUpperCase();
            const cardNumber = document.getElementById("card-number").value.trim();
            const cvv = document.getElementById("cvv").value.trim();
            const expDate = document.getElementById("card-expdate").value.trim();

            if (cardOwner && cardNumber.length >= 12 && cvv.length === 3 && expDate) {
                const [expMonth, expYear] = expDate.split('/').map(num => parseInt(num.trim(), 10));
                const expDateObj = new Date(expYear, expMonth - 1);
                const currentDate = new Date();
                currentDate.setHours(0, 0, 0, 0);

                if (expDateObj < currentDate) {
                    toastMsg({ title: "ERROR", message: "Your card's expiration date has passed.", type: "error" });
                    return;
                } else {
                    isPaymentValid = true;
                    paymentDetails = {
                        method: "Card",
                        cardOwner: cardOwner,
                        cvv: cvv,
                        cardNumber: cardNumber
                    };
                }
            } else {
                toastMsg({ title: "ERROR", message: "Please fill out all fields correctly for card payment.", type: "error" });
            }
        }
    } else {
        toastMsg({ title: "ERROR", message: "Please select a payment method.", type: "error" });
    }

    return { isPaymentValid, paymentDetails };
}


function handleCheckout() {
    // First, validate address and payment
    const addressValidation = validateAddress();
    const paymentValidation = validatePayment();

    // Proceed only if both address and payment are valid
    if (!addressValidation.isAddressValid || !paymentValidation.isPaymentValid) {
        // toastMsg({ title: "ERROR", message: "Please complete all forms before proceeding.", type: "error" });
        return;
    }

    const accounts = JSON.parse(localStorage.getItem("accounts"));
    const currentuser = JSON.parse(localStorage.getItem("currentuser"));
    if (!currentuser) {
        toastMsg({ title: "REMINDER", message: "You must be logged in to checkout.", type: "warning" });
        return;
    }

    //Save to local storage: orderHistory[]
    let newOrder = {
        id: 0,
        cart: currentuser.cart,
        address: addressValidation.addressDetails,
        payment: paymentValidation.paymentDetails,
        orderDate: new Date(),
        total: getCartTotalPrice() + DELIVERY_FEE,
        status: "0",
    }

    newOrder.id = currentuser.orderHistory.length + 1;
    currentuser.orderHistory.push(newOrder);
    localStorage.setItem("currentuser", JSON.stringify(currentuser));
    
    // Save to accounts in local storage
    let userIdx = accounts.findIndex(item => item.phone == currentuser.phone);
    if (userIdx != -1) {
        accounts[userIdx] = currentuser;
        localStorage.setItem("accounts", JSON.stringify(accounts));
    }

    resetCart();
    toggleModal("checkout-page");
    
    toastMsg({ title: "SUCCESS", message: "Checkout success! More details in My Order.", type: "success" });
    
    console.group();
    console.log(`handleCheckout(): Order of id ${newOrder.id} saved to local storage`);
    console.log(newOrder);
    console.groupEnd();
    
}


// Toggle checkout-options
// const checkoutPage = document.getElementById("checkout-page");
// checkoutPage.addEventListener("click", (event) => {
//     let clickedElement = event.target;
//     let parent = clickedElement.closest(".payment-option");

//     if (parent && clickedElement.classList.contains("checkout-option")) {
//         let optionSelected = checkoutPage.querySelector(".checkout-option");

//         checkoutPage.querySelectorAll(".option-detail").forEach(optDetail => {
//             optDetail.style.display = "none"; 
//         });

//         let correspondingOptionDetail = parent.querySelector(".option-detail");
//         if (optionSelected.checked && correspondingOptionDetail) {
//             correspondingOptionDetail.style.display = "block";
//         }
//     }
// });

//.......................................

// Hàm khởi tạo danh sách tỉnh
function initializeProvinces() {
    const provinceSelect = document.getElementById("province");
    for (let province in locations) {
        const option = document.createElement("option");
        option.value = province;
        option.text = province;
        provinceSelect.add(option);
    }
}

// Hàm cập nhật danh sách huyện khi chọn tỉnh
function updateDistricts() {
    const provinceSelect = document.getElementById("province");
    const districtSelect = document.getElementById("district");
    const wardSelect = document.getElementById("ward");

    const selectedProvince = provinceSelect.value;

    // Xóa các lựa chọn hiện tại
    districtSelect.innerHTML = '<option value="">Chọn Quận/Huyện</option>';
    wardSelect.innerHTML = '<option value="">Chọn Xã/Phường</option>';

    if (selectedProvince && locations[selectedProvince]) {
        for (let district in locations[selectedProvince]) {
            const option = document.createElement("option");
            option.value = district;
            option.text = district;
            districtSelect.add(option);
        }
    }
}

// Hàm cập nhật danh sách xã/phường khi chọn huyện
function updateWards() {
    const provinceSelect = document.getElementById("province");
    const districtSelect = document.getElementById("district");
    const wardSelect = document.getElementById("ward");

    const selectedProvince = provinceSelect.value;
    const selectedDistrict = districtSelect.value;

    // Xóa các lựa chọn hiện tại
    wardSelect.innerHTML = '<option value="">Chọn Xã/Phường</option>';

    if (selectedProvince && selectedDistrict && locations[selectedProvince][selectedDistrict]) {
        const wards = locations[selectedProvince][selectedDistrict];
        for (let ward of wards) {
            const option = document.createElement("option");
            option.value = ward;
            option.text = ward;
            wardSelect.add(option);
        }
    }
}