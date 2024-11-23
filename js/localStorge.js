const localAccounts = localStorage.getItem("accounts");

if (localAccounts) {
  const accounts = JSON.parse(localAccounts);
  const renderAccount = document.querySelector("#accounts");
  const tableBody = document.querySelector("tbody");
  accounts.map((value, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${account.username}</td>
        <td>${account.fullname}</td>
        <td>${account.phone}</td>
        <td>Khóa</td>
    `;
    t;
  });
} else {
  console.log("Không có dữ liệu trong localStorage.");
}
