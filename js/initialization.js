//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            name: "70 COURT CANVAS HI",
            price: "2000000",
            image: "./asset/img/catalogue/70-COURT-CANVAS-HI.jpg",
            category: "Sneaker",
            brand: "Converse",
            sex: "U",
            size: [36, 37, 38, 41, 42],
            isDeleted: false
        },
        {
            id: 2,
            name: "AIR FLIGHT 89 (GS)",
            price: "2400000",
            image: "./asset/img/catalogue/AIR-FLIGHT-89-(GS).jpg",
            category: "Sneaker",
            brand: "Nike",
            sex: "M",
            size: [41, 42, 43],
            isDeleted: false
        },
        {
            id: 3,
            name: "AIR FORCE 1 LV8-3 (GS)",
            price: "3200000",
            image: "./asset/img/catalogue/AIR-FORCE-1-LV8-3-(GS).jpg",
            category: "Sneaker",
            brand: "Nike",
            sex: "U",
            size: [36, 37, 38, 41, 42],
            isDeleted: false
        },
        {
            id: 4,
            name: "AIR FORCE 1'07",
            price: "3500000",
            image: "./asset/img/catalogue/AIR-FORCE-1'07.jpg",
            category: "Sneaker",
            brand: "Nike",
            sex: "U",
            size: [36, 37, 38, 41, 42],
            isDeleted: false
        },
        {
            id: 5,
            name: "AIR MAX 90 LTR",
            price: "4600000",
            image: "./asset/img/catalogue/AIR-MAX-90-LTR.jpg",
            category: "Sneaker",
            brand: "Nike",
            sex: "M",
            size: [41, 42, 43],
            isDeleted: false
        },
        {
            id: 6,
            name: "AIR TERRRA HUMARA",
            price: "3200000",
            image: "./asset/img/catalogue/AIR-TERRA-HUMARA.jpg",
            category: "Sneaker",
            brand: "Nike",
            sex: "M",
            size: [41, 42, 43],
            isDeleted: false
        },
        {
            id: 7,
            name: "AIRIZONA VEG THYME",
            price: "3500000",
            image: "./asset/img/catalogue/AIRIZONA-VEG-THYME.jpg",
            category: "Sandal",
            brand: "BirkenStock",
            sex: "M",
            size: [41, 42, 43],
            isDeleted: false
        },
        {
            id: 8,
            name: "ARIZONA BLACKBIRKO FLOR SFB",
            price: "3200000",
            image: "./asset/img/catalogue/ARIZONA-BLACKBIRKO-FLOR-SFB.jpg",
            category: "Sandal",
            brand: "BirkenStock",
            sex: "M",
            size: [41, 42, 43],
            isDeleted: false
        },
        {
            id: 9,
            name: "ARIZONA TOBACCO BROWN OILDED LEATHER",
            price: "4000000",
            image: "./asset/img/catalogue/ARIZONA-TOBACCO-BROWN-OILED-LEATHER.jpg",
            category: "Sandal",
            brand: "BirkenStock",
            sex: "M",
            size: [41, 42, 43],
            isDeleted: false
        },
        {
            id: 10,
            name: "CHUCK 70 SEASONAL",
            price: "1650000",
            image: "./asset/img/catalogue/CHUCK-70-SEASONAL.jpg",
            category: "Sneaker",
            brand: "Converse",
            sex: "M",
            size: [41, 42, 43],
            isDeleted: false
        },
        {
            id: 11,
            name: "DUNK LOW (W)",
            price: "3500000",
            image: "./asset/img/catalogue/DUNK-LOW-(W).jpg",
            category: "Sneaker",
            brand: "Nike",
            sex: "M",
            size: [41, 42, 43],
            isDeleted: false
        },
        {
            id: 12,
            name: "FASTBREAK PRO SUEDE MID",
            price: "2800000",
            image: "./asset/img/catalogue/FASTBREAK-PRO-SUEDE-MID.jpg",
            category: "Sneaker",
            brand: "Converse",
            sex: "M",
            size: [41, 42, 43],
            isDeleted: false
        },
        {
            id: 13,
            name: "FENG CHENG WANG QS",
            price: "4200000",
            image: "./asset/img/catalogue/FENG-CHENG-WANG-QS.jpg",
            category: "Sneaker",
            brand: "Converse",
            sex: "U",
            size: [36, 37, 38, 41, 42],
            isDeleted: false
        },
        {
            id: 14,
            name: "GAZELLE (PS)",
            price: "1800000",
            image: "./asset/img/catalogue/GAZELLE-(PS).jpg",
            category: "Kid",
            brand: "Adidas",
            sex: "U",
            size: [20, 21, 22, 23, 24],
            isDeleted: false
        },
        {
            id: 15,
            name: "GAZELLE INDOOR (W)",
            price: "2800000",
            image: "./asset/img/catalogue/GAZELLE-INDOOR-(W).jpg",
            category: "Sneaker",
            brand: "Adidas",
            sex: "F",
            size: [36, 37, 38, 39],
            isDeleted: false
        },
        {
            id: 16,
            name: "HANDBALL SPEZIAL (W)",
            price: "2500000",
            image: "./asset/img/catalogue/HANDBALL-SPEZIAL-(W).jpg",
            category: "Sneaker",
            brand: "Adidas",
            sex: "F",
            size: [36, 37, 38, 39],
            isDeleted: false
        },
        {
            id: 17,
            name: "NIKE CALM BEIGE (W)",
            price: "2349000",
            image: "./asset/img/catalogue/Nike_Calm_Be(w).jpg",
            category: "Sandal",
            brand: "Nike",
            sex: "F",
            size: [36, 37, 38, 39],
            isDeleted: false
        },
        {
            id: 18,
            name: "NMD S1",
            price: "3000000",
            image: "./asset/img/catalogue/NMD_S1.jpg",
            category: "Sneaker",
            brand: "Adidas",
            sex: "M",
            size: [41, 42, 43],
            isDeleted: false
        },
        {
            id: 19,
            name: "RUN STAR HIKE HI",
            price: "3200000",
            image: "./asset/img/catalogue/RUN-STAR-HIKE-HI.jpg",
            category: "Sneaker",
            brand: "Converse",
            sex: "U",
            size: [36, 37, 38, 41, 42],
            isDeleted: false
        },
        {
            id: 20,
            name: "SAMBA OG",
            price: "2500000",
            image: "./asset/img/catalogue/SAMBA-OG.jpg",
            category: "Sneaker",
            brand: "Adidas",
            sex: "U",
            size: [36, 37, 38, 41, 42],
            isDeleted: false
        },
        {
            id: 21,
            name: "SABA XLG",
            price: "3500000", image: "./asset/img/catalogue/SAMBA-XLG.jpg",
            category: "Sneaker",
            brand: "Adidas",
            sex: "M",
            size: [41, 42, 43],
            isDeleted: false
        },
        {
            id: 22,
            name: "SL72 RS (PS)",
            price: "2000000",
            image: "./asset/img/catalogue/SL-72-RS-(PS).jpg",
            category: "Kid",
            brand: "Adidas",
            sex: "U",
            size: [20, 21, 22, 23, 24],
            isDeleted: false
        },
        {
            id: 23,
            name: "SL72 RS (TD)",
            price: "1800000",
            image: "./asset/img/catalogue/SL72-RS-(TD).jpg",
            category: "Kid",
            brand: "Adidas",
            sex: "U",
            size: [20, 21, 22, 23, 24],
            isDeleted: false
        },
        {
            id: 24,
            name: "SL72 RS",
            price: "2500000",
            image: "./asset/img/catalogue/SL72-RS.jpg",
            category: "Sneaker",
            brand: "Adidas",
            sex: "M",
            size: [41, 42, 43],
            isDeleted: false
        },
        {
            id: 25,
            name: "STAN SMITH (TD)",
            price: "1500000",
            image: "./asset/img/catalogue/STAN-SMITH-(TD).jpg",
            category: "Kid",
            brand: "Adidas",
            sex: "U",
            size: [20, 21, 22, 23, 24],
            isDeleted: false
        },
        {
            id: 26,
            name: "SUPERSTAR",
            price: "2500000",
            image: "./asset/img/catalogue/SUPERSTAR.jpg",
            category: "Sneaker",
            brand: "Adidas",
            sex: "M",
            size: [41, 42, 43],
            isDeleted: false
        },
        {
            id: 27,
            name: "TEVA HURRICANE DRIFT (M)",
            price: "990000",
            image: "./asset/img/catalogue/Teva_Hurricane_Drift(m)-990k.jpg",
            category: "Sandal",
            brand: "Teva",
            sex: "M",
            size: [41, 42, 43],
            isDeleted: false
        },
        {
            id: 28,
            name: "TEVA TERRA FI 5 UNIVERSAL",
            price: "2099000",
            image: "./asset/img/catalogue/Teva_Terra_Fi_5_Universal-2099k.jpg",
            category: "Sandal",
            brand: "Teva",
            sex: "M",
            size: [41, 42, 43],
            isDeleted: false
        },
        {
            id: 29,
            name: "TEVA VOYA STRAPPY (W)",
            price: "845000",
            image: "./asset/img/catalogue/Teva_Voya_Strappy(w)-845k.jpg",
            category: "Sandal",
            brand: "Teva",
            sex: "F",
            size: [36, 37, 38, 39],
            isDeleted: false
        },
        {
            id: 30,
            name: "TEVA ZYMIC (W)",
            price: "1600000",
            image: "./asset/img/catalogue/Teva_Zymic-1600k(w).jpg",
            category: "Sandal",
            brand: "Teva",
            sex: "F",
            size: [36, 37, 38, 39],
            isDeleted: false
        },
        {
            id: 31,
            name: "TEVA SANDALS HURRICANE (W)",
            price: "1900000",
            image: "./asset/img/catalogue/TevaSandalsHunrricane(w).jpg",
            category: "Sandal",
            brand: "Teva",
            sex: "F",
            size: [36, 37, 38, 39],
            isDeleted: false
        },
        {
            id: 32,
            name: "UNISEX FILA PONG SD (W)",
            price: "1595000",
            image: "./asset/img/catalogue/Unisex_Fila_Pong_Sd-1595k(w).jpg",
            category: "Sandal",
            brand: "Fila",
            sex: "F",
            size: [36, 37, 38, 39],
            isDeleted: false
        },
        {
            id: 33,
            name: "UNISEX FILA TORI (M)",
            price: "1995000",
            image: "./asset/img/catalogue/unisex_fila_tori-1995k(m).jpg",
            category: "Sandal",
            brand: "Fila",
            sex: "M",
            size: [41, 42, 43],
            isDeleted: false
        },

        ]
        localStorage.setItem('products', JSON.stringify(products));
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