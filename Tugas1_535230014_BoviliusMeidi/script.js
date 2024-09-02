document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('open_btn');
    const sidebarItems = document.querySelectorAll(".side-item");

    openBtn.addEventListener('click', function () {
        sidebar.classList.toggle('open-sidebar');
    });

    sidebarItems.forEach((item) => {
        item.addEventListener("click", function () {
            sidebarItems.forEach((el) => el.classList.remove("active"));
            item.classList.add("active");
        });
    });
});
