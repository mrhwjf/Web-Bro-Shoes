const menuLi = document.querySelectorAll(
  ".admin-sidebar__content > ul > li > a"
);
const subMenu = document.querySelectorAll(".sub-menu");

for (let i = 0; i < menuLi.length; i++) {
  menuLi[i].addEventListener("click", (e) => {
    e.preventDefault();
    for (let i = 0; i < subMenu.length; i++) {
      subMenu[i].setAttribute("style", "height: 0px");
    }
    const subMenuHeight = menuLi[i].parentNode.querySelector(
      "ul .sub-menu__items"
    ).offsetHeight;
    menuLi[i].parentNode
      .querySelector("ul")
      .setAttribute("style", "height:" + subMenuHeight + "px");
  });
}

function showProductList(vitri) {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  var s = "";
  var dem = 0;

  for (let i = vitri; i < products.length; i++) {
    // Kiểm tra isDeleted
    const isDeleted =
      products[i].isDeleted === true || products[i].isDeleted === "true";

    s += isDeleted ? "<tr id='hidden-row'>" : "<tr>";

    s +=
      "<td>" +
      products[i].id +
      "</td>" +
      '<td><img src="../' +
      products[i].image +
      '" alt="' +
      products[i].name +
      '"></td>' +
      "<td>" +
      products[i].name +
      "</td>" +
      "<td>" +
      products[i].price +
      "₫" +
      "</td>" +
      "<td>" +
      products[i].category +
      "</td>" +
      "<td>" +
      products[i].brand +
      "</td>" +
      "<td>" +
      products[i].sex +
      "</td>" +
      "<td>" +
      products[i].size +
      "</td>" +
      "<td>" +
      '<button class="delete-btn" onClick="deleteproduct(\'' +
      products[i].id +
      "')\">&times;</button>" +
      '<button><a href="#edit" class="edit-link" onClick="editProduct(\'' +
      products[i].id +
      "')\">Sửa</a></button>" +
      "</td>" +
      "</tr>";

    dem++;
    if (dem == 5) {
      break;
    }
  }

  document.getElementById("products").innerHTML = s;
  setPagination();
}

// renderProduct(0);

function setPagination(product) {
  var productArray = JSON.parse(localStorage.getItem("products"));
  var validProducts = productArray.filter(
    (product) => product.isDeleted !== true
  );
  var sotrang = Math.ceil(validProducts.length / 5);
  var button = "";
  for (var i = 1; i <= sotrang; i++) {
    vitri = (i - 1) * 5;
    button +=
      '<button class="active" onClick="showProductList(' +
      vitri +
      ')">' +
      i +
      "</button>";
  }
  document.querySelector(".listPage").innerHTML = button;
}
showProductList(0);

function addProduct() {
  let products = JSON.parse(localStorage.getItem("products"));
  const id = products.length + 1;
  const name = document.querySelector("#productName").value;
  const price = document.querySelector("#productPrice").value;
  const category = document.querySelector("#productCategory").value;
  const brand = document.querySelector("#productBrand").value;
  const sex = document.querySelector("#sex").value;
  const image = document.getElementById("productImage").files[0]
    ? "./asset/img/catalogue/" +
      document.getElementById("productImage").files[0].name
    : "";

  // Lấy giá trị các size đã chọn
  const selectedSizes = document.querySelectorAll("input[name='size']:checked");
  const sizeValues = Array.from(selectedSizes).map((checkbox) =>
    Number(checkbox.value)
  );
  Array.from(sizeValues);

  // Kiểm tra nếu có size được chọn, nếu không thì thông báo
  if (!name || !price || !category) {
    customAlert("Bạn chưa nhập đủ thông tin sản phẩm", "warning");
    return false;
  }

  // Tạo đối tượng sản phẩm mới
  const newProduct = {
    id: id,
    name: name,
    price: price,
    category: category,
    brand: brand,
    sex: sex,
    image: image,
    size: sizeValues,
    isDeleted: false,
  };

  products.push(newProduct);
  // Lưu lại vào localStorage
  localStorage.setItem("products", JSON.stringify(products));
  customAlert("Sản phẩm đã được thêm thành công!", "success");
  resetForm();
}
function resetForm() {
  document.querySelector("#productName").value = "";
  document.querySelector("#productPrice").value = "";
  document.querySelector("#productCategory").value = "Sneaker";
  document.querySelector("#productBrand").value = "Nike";
  document.querySelector("#sex").value = "M";
  document.getElementById("productImage").value = "";

  // Bỏ chọn tất cả checkbox size
  const checkboxes = document.querySelectorAll("input[name='size']");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
    checkbox.parentElement.classList.remove("select");
  });
}
//click size thì đổi màu
function click() {
  const productCategory = document.querySelectorAll(".size-options.visible");
  Array.from(productCategory).map((category) => {
    const checkbox = Array.from(
      category.querySelectorAll("input[type='checkbox']")
    );
    checkbox.forEach((box) => {
      box.addEventListener("change", function () {
        if (box.checked) {
          box.parentElement.classList.add("select");
        } else {
          box.parentElement.classList.remove("select");
        }
      });
    });
  });
}
document.addEventListener("DOMContentLoaded", click);
// đổi loại sản phẩm sang kid thì đổi size
function changeSize() {
  const productCategory = document.querySelector("#productCategory");
  const normal = document.querySelector("#normal");
  const option = document.querySelector("#option-Kid");

  productCategory.addEventListener("change", function () {
    if (productCategory.value === "Kid") {
      normal.classList.add("hidden");
      normal.classList.remove("visible");
      option.classList.add("visible");
      option.classList.remove("hidden");
    } else {
      normal.classList.remove("hidden");
      normal.classList.add("visible");
      option.classList.remove("visible");
      option.classList.add("hidden");
    }
    const checkboxes = document.querySelectorAll(
      ".size-options.visible input[type='checkbox']"
    );
    checkboxes.forEach((box) => {
      box.checked = false;
      box.parentElement.classList.remove("select");
    });
    click();
  });
}
changeSize();
let productSize = "";

if (productCategory === "Kid") {
  const sizes = document.querySelectorAll(
    "#option-Kid input[name=size]:checked"
  );
  productSize = Array.from(sizes)
    .map((size) => size.value)
    .join(",");
} else {
  const sizes = document.querySelectorAll("#normal input[name=size]:checked");
  productSize = Array.from(sizes)
    .map((size) => size.value)
    .join(",");
}

function size() {
  const sizes = document.querySelectorAll("#normal input[name=size]:checked");
  const selectedSizes = Array.from(sizes).map((checkbox) => checkbox.value);
  return selectedSizes;
}

// Bắt sự kiện thay đổi (change) của các checkbox
document.querySelectorAll("#normal input[name=size]").forEach((checkbox) => {
  checkbox.addEventListener("change", size); // Khi có sự thay đổi, gọi hàm size()
});
/* hết thêm sản phẩm */

//Xóa sản phẩm
function deleteproduct(productiddelete) {
  var products = JSON.parse(localStorage.getItem("products"));
  var vitri;
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == productiddelete) {
      if (confirm("Bạn có muốn xóa sản phẩm này?")) {
        products[i].isDeleted = true;
        // products.splice(i, 1);
      }
      vitri = Math.floor(i / 5) * 5;
    }
  }

  localStorage.setItem("products", JSON.stringify(products));

  showProductList(vitri);
}
// Sửa sản phẩm
// function editProduct(index) {
//   let products = JSON.parse(localStorage.getItem("products"));
//   document.querySelector("#productName").value = products[index - 1].name;
//   document.querySelector("#productPrice").value = products[index - 1].price;
//   document.querySelector("#productCategory").value =
//     products[index - 1].category;
//   document.querySelector("#productBrand").value = products[index - 1].brand;
//   document.querySelector("#sex").value = products[index - 1].sex;
//   document.querySelector("#imagePreview").src = products[index - 1].image;
//   // sản phẩm có size thì thêm select
//   const normal = document.querySelector("#normal");
//   const option = document.querySelector("#option-Kid");
//   if (products[index - 1].category === "Kid") {
//     normal.classList.add("hidden");
//     normal.classList.remove("visible");
//     option.classList.add("visible");
//     option.classList.remove("hidden");
//   } else {
//     normal.classList.remove("hidden");
//     normal.classList.add("visible");
//     option.classList.remove("visible");
//     option.classList.add("hidden");
//   }
//   const editSize = products[index - 1].size;
//   const labels = document.querySelectorAll(".size-options.visible label");
//   labels.forEach((label) => {
//     const checkbox = label.querySelector("input[type='checkbox']");
//     if (checkbox) {
//       const value = Number(checkbox.value);
//       if (editSize.includes(value)) {
//         label.classList.add("select");
//       } else {
//         label.classList.remove("select");
//       }
//     }
//   });
//   document.querySelector(".add h2").textContent = "CHỈNH SỬA SẢN PHẨM";
//   document.querySelector("#form").textContent = "Lưu";
// }

function editProduct(index) {
  let products = JSON.parse(localStorage.getItem("products"));
  const product = products[index - 1];

  // Điền thông tin của sản phẩm vào form
  document.querySelector("#productName").value = product.name;
  document.querySelector("#productPrice").value = product.price;
  document.querySelector("#productCategory").value = product.category;
  document.querySelector("#productBrand").value = product.brand;
  document.querySelector("#sex").value = product.sex;
  document.querySelector("#imagePreview").src = product.image;

  // Chuyển đổi chế độ size dựa vào category
  const normal = document.querySelector("#normal");
  const option = document.querySelector("#option-Kid");
  if (product.category === "Kid") {
    normal.classList.add("hidden");
    normal.classList.remove("visible");
    option.classList.add("visible");
    option.classList.remove("hidden");
  } else {
    normal.classList.remove("hidden");
    normal.classList.add("visible");
    option.classList.remove("visible");
    option.classList.add("hidden");
  }

  // Chọn các size đã lưu vào
  const editSize = product.size;
  const labels = document.querySelectorAll(".size-options.visible label");
  labels.forEach((label) => {
    const checkbox = label.querySelector("input[type='checkbox']");
    if (checkbox) {
      const value = Number(checkbox.value);
      if (editSize.includes(value)) {
        label.classList.add("select");
        checkbox.checked = true; // Đánh dấu checkbox đã chọn
      } else {
        label.classList.remove("select");
        checkbox.checked = false; // Bỏ đánh dấu checkbox
      }
    }
  });

  document.querySelector(".add h2").textContent = "CHỈNH SỬA SẢN PHẨM";
  document.querySelector("#form").textContent = "Lưu";

  document.querySelector("#form").onclick = function () {
    updateProduct(index);
  };
}

// Cập nhật sản phẩm
function updateProduct(index) {
  let products = JSON.parse(localStorage.getItem("products"));

  const name = document.querySelector("#productName").value;
  const price = document.querySelector("#productPrice").value;
  const category = document.querySelector("#productCategory").value;
  const brand = document.querySelector("#productBrand").value;
  const sex = document.querySelector("#sex").value;
  const image = document.getElementById("productImage").files[0]
    ? "./asset/img/catalogue/" +
      document.getElementById("productImage").files[0].name
    : products[index - 1].image; // Giữ lại hình ảnh cũ nếu không chọn mới

  const selectedSizes = document.querySelectorAll("input[name='size']:checked");
  const sizeValues = Array.from(selectedSizes).map((checkbox) =>
    Number(checkbox.value)
  );

  if (!name || !price || !category) {
    customAlert("Bạn chưa nhập đủ thông tin sản phẩm", "warning");
    return false;
  }

  const updatedProduct = {
    id: products[index - 1].id,
    name: name,
    price: price,
    category: category,
    brand: brand,
    sex: sex,
    image: image,
    size: sizeValues,
    isDeleted: products[index - 1].isDeleted,
  };

  // Cập nhật vào mảng sản phẩm
  products[index - 1] = updatedProduct;

  // Lưu lại vào localStorage
  localStorage.setItem("products", JSON.stringify(products));

  customAlert("Sản phẩm đã được chỉnh sửa thành công!", "success");

  // Reset form và thay đổi lại nút
  resetForm();
  document.querySelector(".add h2").textContent = "THÊM SẢN PHẨM";
  document.querySelector("#form").textContent = "Thêm";
  document.querySelector(".form-group img").src = "./asset/img/temp.jpg";
  document.querySelector("#form").onclick = addProduct; // Gán lại sự kiện cho nút
}
// Tìm kiếm sản phẩm
/*CUSTOM ALERT BOX*/
function customAlert(message, type) {
  if (type == "success") {
    document.getElementById("customAlert").style.backgroundColor = "#4CAF50";
  }
  if (type == "warning") {
    document.getElementById("customAlert").style.backgroundColor = "#f44336";
  }
  document.getElementById("customAlert").innerHTML = message;
  var x = document.getElementById("customAlert");
  x.className = "show";
  setTimeout(function () {
    x.className = x.classList.remove("show");
  }, 3500);
}
// chọn file hiển thị ảnh
document
  .querySelector("#productImage")
  .addEventListener("change", function (event) {
    const file = event.target.files[0]; // Lấy tệp đầu tiên người dùng chọn
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        // Khi tệp được đọc xong, cập nhật ảnh hiển thị
        document.querySelector("#imagePreview").src = e.target.result;
      };
      reader.readAsDataURL(file); // Đọc tệp dưới dạng URL
    }
  });
