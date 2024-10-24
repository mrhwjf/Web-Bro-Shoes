function toggleSidebar() {
    let x = document.getElementById("header-sidebar");
    if (!x.classList.contains("show-on-mobile")) {
        x.classList.add("show-on-mobile");
    } else {
        x.classList.remove("show-on-mobile");
    }
}