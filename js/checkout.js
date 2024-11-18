
// Mở trang thanh toán
let nutthanhtoan = document.querySelector('.thanh-toan');
let checkoutpage = document.querySelector('.checkout-page');
let body = document.querySelector('body');

nutthanhtoan.addEventListener('click', () => {
    checkoutpage.classList.add('active');
    thanhtoanpage(1);
    closeCart();
    body.style.overflow = "hidden";
});

// Đóng trang thanh toán
function closecheckout() {
    checkoutpage.classList.remove('active');
    body.style.overflow = "auto";
}

function thanhtoanpage(option, product) {
    // Xử lý ngày nhận hàng
    let today = new Date();
    let ngaymai = new Date();
    let ngaykia = new Date();
    ngaymai.setDate(today.getDate() + 1);
    ngaykia.setDate(today.getDate() + 2);
    let dateorderhtml = `
        <a href="javascript:;" class="pick-date active" data-date="${today}">
            <span class="text">Hôm nay</span>
            <span class="date">${today.getDate()}/${today.getMonth() + 1}</span>
        </a>
        <a href="javascript:;" class="pick-date" data-date="${ngaymai}">
            <span class="text">Ngày mai</span>
            <span class="date">${ngaymai.getDate()}/${ngaymai.getMonth() + 1}</span>
        </a>
        <a href="javascript:;" class="pick-date" data-date="${ngaykia}">
            <span class="text">Ngày kia</span>
            <span class="date">${ngaykia.getDate()}/${ngaykia.getMonth() + 1}</span>
        </a>`;
    document.querySelector('.date-order').innerHTML = dateorderhtml;
    let pickdate = document.getElementsByClassName('pick-date');
    for (let i = 0; i < pickdate.length; i++) {
        pickdate[i].onclick = function () {
            document.querySelector(".pick-date.active").classList.remove("active");
            this.classList.add('active');
        }
    }
}


//......................................

function togglePaymentMethod(method) {
    document.getElementById('cash-option').style.display = method === 'cash' ? 'block' : 'none';
    document.getElementById('card-option').style.display = method === 'card' ? 'block' : 'none';
}

function confirmPayment(method) {
    if (method === 'cash') {
        alert("Thanh toán bằng tiền mặt đã được xác nhận!");
    } else if (method === 'card') {
        alert("Thanh toán bằng thẻ đã được xác nhận!");
    }
}
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

// Gọi hàm khởi tạo khi trang tải xong
window.onload = initializeProvinces;

// Hàm để hiển thị phần nhập địa chỉ tùy theo lựa chọn
function toggleAddressInput(option) {
    const accountInfo = document.getElementById('account-info');
    const newAddressInput = document.getElementById('new-address');
    const addressSelect = document.getElementById('address-select');

    if (option === 'new') {
        // Hiển thị phần nhập mới và các dropdown
        accountInfo.style.display = 'none'; // Ẩn thông tin tài khoản
        newAddressInput.style.display = 'block'; // Hiển thị input nhập địa chỉ mới
        addressSelect.style.display = 'block'; // Hiển thị các dropdown (tỉnh, quận, xã)
    } else if (option === 'account') {
        // Ẩn phần nhập mới và các dropdown, hiển thị thông tin từ tài khoản
        accountInfo.style.display = 'block'; // Hiển thị thông tin tài khoản
        newAddressInput.style.display = 'none'; // Ẩn input nhập địa chỉ mới
        addressSelect.style.display = 'none'; // Ẩn các dropdown
    }
}

const locations = {
    "Hà Nội": {
        "Quận Ba Đình": ["Phường Liễu Giai", "Phường Ngọc Khánh", "Phường Quán Thánh", "Phường Cống Vị", "Phường Điện Biên"],
        "Quận Hoàn Kiếm": ["Phường Hàng Trống", "Phường Hàng Bạc", "Phường Lý Thái Tổ", "Phường Hàng Bông", "Phường Tràng Tiền"],
        "Quận Đống Đa": ["Phường Khâm Thiên", "Phường Ô Chợ Dừa", "Phường Văn Chương", "Phường Trung Liệt", "Phường Thịnh Quang"],
        "Quận Cầu Giấy": ["Phường Nghĩa Đô", "Phường Nghĩa Tân", "Phường Mai Dịch", "Phường Dịch Vọng", "Phường Quan Hoa"]
    },
    "Hồ Chí Minh": {
        "Quận 1": ["Phường Bến Nghé", "Phường Bến Thành", "Phường Nguyễn Thái Bình", "Phường Cô Giang", "Phường Tân Định"],
        "Quận 3": ["Phường Võ Thị Sáu", "Phường Phạm Ngọc Thạch", "Phường Phường 7", "Phường Phường 8", "Phường Phường 9"],
        "Quận 5": ["Phường Phường 1", "Phường Phường 2", "Phường Phường 3", "Phường Phường 4", "Phường Phường 6"],
        "Quận Tân Bình": ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5"]
    },
    "Đà Nẵng": {
        "Quận Hải Châu": ["Phường Hòa Thuận", "Phường Bình Thuận", "Phường Nam Dương", "Phường Thuận Phước", "Phường Thạch Thang"],
        "Quận Thanh Khê": ["Phường Thanh Khê Đông", "Phường Vĩnh Trung", "Phường Chính Gián", "Phường Thanh Khê Tây", "Phường Tân Chính"],
        "Quận Sơn Trà": ["Phường Mân Thái", "Phường An Hải Bắc", "Phường An Hải Tây", "Phường Nại Hiên Đông", "Phường Thọ Quang"],
        "Quận Liên Chiểu": ["Phường Hòa Hiệp", "Phường Hòa Khánh", "Phường Hòa Minh", "Phường Hòa Phát", "Phường Hòa An"]
    },
    "Hải Phòng": {
        "Quận Ngô Quyền": ["Phường Máy Chai", "Phường Lạc Viên", "Phường Cầu Đất", "Phường Máy Tơ", "Phường Đằng Giang"],
        "Quận Lê Chân": ["Phường An Biên", "Phường An Dương", "Phường Hồ Nam", "Phường Trần Nguyên Hãn", "Phường Dư Hàng Kênh"],
        "Quận Hải An": ["Phường Đông Hải 1", "Phường Đông Hải 2", "Phường Đằng Hải", "Phường Cát Bi", "Phường Nam Hải"],
        "Quận Kiến An": ["Phường Trần Thành Ngọ", "Phường Nam Sơn", "Phường Quán Trữ", "Phường Ngọc Sơn", "Phường Đồng Hòa"]
    },
    "Cần Thơ": {
        "Quận Ninh Kiều": ["Phường Tân An", "Phường An Cư", "Phường An Hòa", "Phường Xuân Khánh", "Phường Hưng Lợi"],
        "Quận Bình Thủy": ["Phường Long Tuyền", "Phường Bình Thủy", "Phường Trà An", "Phường Trà Nóc", "Phường An Thới"],
        "Quận Ô Môn": ["Phường Châu Văn Liêm", "Phường Thới Long", "Phường Phước Thới", "Phường Trường Lạc", "Phường Thới An"],
        "Quận Thốt Nốt": ["Phường Thới Thuận", "Phường Trung Nhứt", "Phường Tân Lộc", "Phường Trung Kiên", "Phường Thuận Hưng"]
    },
    "Nha Trang": {
        "Quận Nha Trang": ["Phường Vĩnh Nguyên", "Phường Vĩnh Trường", "Phường Xương Huân", "Phường Phước Long", "Phường Vạn Thạnh"],
        "Quận Cam Ranh": ["Phường Cam Lợi", "Phường Cam Phú", "Phường Cam Phúc Bắc", "Phường Cam Phúc Nam", "Phường Ba Ngòi"],
        "Quận Diên Khánh": ["Xã Diên An", "Xã Diên Phú", "Xã Diên Toàn", "Xã Diên Hòa", "Xã Diên Thọ"]
    },
    "Huế": {
        "Thành phố Huế": ["Phường Thuận Hòa", "Phường Phú Hội", "Phường Vĩnh Ninh", "Phường Xuân Phú", "Phường Phú Nhuận"],
        "Thị xã Hương Thủy": ["Phường Thủy Dương", "Phường Thủy Phương", "Phường Phú Bài", "Phường Thủy Lương", "Xã Thủy Thanh"],
        "Thị xã Hương Trà": ["Phường Hương Chữ", "Phường Hương Xuân", "Phường Hương Văn", "Phường Hương Vân", "Xã Hương Thọ"]
    },
    "An Giang": {
        "Thành phố Long Xuyên": ["Phường Mỹ Bình", "Phường Mỹ Hòa", "Phường Bình Khánh"],
        "Thành phố Châu Đốc": ["Phường Vĩnh Mỹ", "Phường Châu Phú B", "Phường Núi Sam"]
    },
    "Bà Rịa - Vũng Tàu": {
        "Thành phố Vũng Tàu": ["Phường Thắng Nhất", "Phường Rạch Dừa", "Phường 1"],
        "Thị xã Phú Mỹ": ["Phường Mỹ Xuân", "Phường Phú Mỹ", "Phường Hắc Dịch"]
    },
    "Bắc Giang": {
        "Thành phố Bắc Giang": ["Phường Hoàng Văn Thụ", "Phường Thọ Xương", "Phường Ngô Quyền"],
        "Huyện Yên Thế": ["Xã An Thượng", "Xã Đồng Tiến", "Xã Phồn Xương"]
    },
    "Bắc Kạn": {
        "Thành phố Bắc Kạn": ["Phường Đức Xuân", "Phường Sông Cầu", "Phường Huyền Tụng"],
        "Huyện Chợ Đồn": ["Xã Ngọc Phái", "Xã Đồng Thắng", "Xã Quảng Bạch"]
    },
    "Bạc Liêu": {
        "Thành phố Bạc Liêu": ["Phường 1", "Phường 2", "Phường 3"],
        "Huyện Hồng Dân": ["Xã Ninh Quới", "Xã Vĩnh Lộc", "Xã Long Thạnh"]
    },
    "Bắc Ninh": {
        "Thành phố Bắc Ninh": ["Phường Đại Phúc", "Phường Kinh Bắc", "Phường Ninh Xá"],
        "Huyện Gia Bình": ["Xã Đại Lai", "Xã Xuân Lai", "Xã Song Giang"]
    },
    "Bến Tre": {
        "Thành phố Bến Tre": ["Phường An Hội", "Phường Phú Khương", "Phường 5"],
        "Huyện Chợ Lách": ["Xã Sơn Định", "Xã Vĩnh Thành", "Xã Phú Phụng"]
    },
    "Bình Định": {
        "Thành phố Quy Nhơn": ["Phường Lê Lợi", "Phường Hải Cảng", "Phường Trần Phú"],
        "Huyện Tuy Phước": ["Xã Phước Hòa", "Xã Phước Thắng", "Xã Phước An"]
    },
    "Bình Dương": {
        "Thành phố Thủ Dầu Một": ["Phường Chánh Nghĩa", "Phường Phú Thọ", "Phường Phú Mỹ"],
        "Thị xã Dĩ An": ["Phường Dĩ An", "Phường Tân Đông Hiệp", "Phường Đông Hòa"]
    },
    "Bình Phước": {
        "Thành phố Đồng Xoài": ["Phường Tân Bình", "Phường Tân Phú", "Phường Tân Đồng"],
        "Thị xã Bình Long": ["Phường An Lộc", "Phường Phú Thịnh", "Phường Phú Đức"]
    },
    "Bình Thuận": {
        "Thành phố Phan Thiết": ["Phường Đức Thắng", "Phường Phú Thủy", "Phường Mũi Né"],
        "Thị xã La Gi": ["Phường Tân An", "Phường Phước Hội", "Phường Bình Tân"]
    },
    "Cà Mau": {
        "Thành phố Cà Mau": ["Phường 4", "Phường 5", "Phường Tân Thành"],
        "Huyện Thới Bình": ["Xã Biển Bạch", "Xã Thới Bình", "Xã Trí Lực"]
    },
    "Cao Bằng": {
        "Thành phố Cao Bằng": ["Phường Hợp Giang", "Phường Ngọc Xuân", "Phường Sông Bằng"],
        "Huyện Trùng Khánh": ["Xã Khâm Thành", "Xã Đàm Thủy", "Xã Đình Phong"]
    },
    "Đắk Lắk": {
        "Thành phố Buôn Ma Thuột": ["Phường Tân Lợi", "Phường Tân An", "Phường Ea Tam"],
        "Huyện Cư M'gar": ["Xã Ea H'đing", "Xã Quảng Tiến", "Xã Ea Mnang"]
    },
    "Đắk Nông": {
        "Thành phố Gia Nghĩa": ["Phường Nghĩa Đức", "Phường Nghĩa Thành", "Phường Nghĩa Phú"],
        "Huyện Cư Jút": ["Xã Nam Dong", "Xã Đắk Wil", "Xã Ea Pô"]
    },
    "Điện Biên": {
        "Thành phố Điện Biên Phủ": ["Phường Noong Bua", "Phường Mường Thanh", "Phường Tân Thanh"],
        "Huyện Điện Biên": ["Xã Thanh Xương", "Xã Thanh Chăn", "Xã Noong Luống"]
    },
    "Đồng Nai": {
        "Thành phố Biên Hòa": ["Phường Tân Phong", "Phường Tân Mai", "Phường Long Bình"],
        "Huyện Long Thành": ["Xã Phước Thái", "Xã An Phước", "Xã Lộc An"]
    },
    "Đồng Tháp": {
        "Thành phố Cao Lãnh": ["Phường Mỹ Phú", "Phường Hòa Thuận", "Phường 11"],
        "Huyện Lấp Vò": ["Xã Mỹ An Hưng A", "Xã Bình Thạnh Trung", "Xã Long Hưng A"]
    },
    "Gia Lai": {
        "Thành phố Pleiku": ["Phường Diên Hồng", "Phường Hoa Lư", "Phường Tây Sơn"],
        "Huyện Ia Grai": ["Xã Ia Yok", "Xã Ia Dêr", "Xã Ia Tô"]
    },
    "Hà Giang": {
        "Thành phố Hà Giang": ["Phường Minh Khai", "Phường Trần Phú", "Phường Nguyễn Trãi"],
        "Huyện Đồng Văn": ["Xã Lũng Cú", "Xã Sủng Là", "Xã Phố Cáo"]
    },
    "Hà Nam": {
        "Thành phố Phủ Lý": ["Phường Lê Hồng Phong", "Phường Châu Sơn", "Phường Thanh Tuyền"],
        "Huyện Duy Tiên": ["Xã Duy Hải", "Xã Tiên Sơn", "Xã Mộc Nam"]
    },
};
