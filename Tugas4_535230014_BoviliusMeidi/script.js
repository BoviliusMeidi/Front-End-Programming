const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', function () {
    if (htmlElement.getAttribute('data-bs-theme') === 'dark') {
        htmlElement.setAttribute('data-bs-theme', 'light');
        themeIcon.classList.remove('bi-sun');
        themeIcon.classList.add('bi-moon');
    } else {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        themeIcon.classList.remove('bi-moon');
        themeIcon.classList.add('bi-sun');
    }
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.addEventListener("DOMContentLoaded", function () {
    const subscribeForm = document.getElementById('subscribeForm');
    const subscribeModalElement = document.getElementById('subscribeModal');
    const subscribeModal = new bootstrap.Modal(subscribeModalElement);
    const plansModalElement = document.getElementById('plansModal');
    const plansModal = new bootstrap.Modal(plansModalElement);

    let fullName = "";

    subscribeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        fullName = document.getElementById('fullname').value;

        subscribeModal.hide();
        plansModal.show();

        event.target.reset();
    });

    document.querySelectorAll('.btn-buy').forEach(button => {
        button.addEventListener('click', function () {
            const planName = this.closest('.plan-card').querySelector('h3').textContent;

            const modalMessage = document.querySelector('#notificationModal .modal-body p');
            modalMessage.textContent = `${fullName}, you have successfully subscribed to the ${planName}!`;

            const notificationModal = new bootstrap.Modal(document.getElementById('notificationModal'));
            notificationModal.show();

            plansModal.hide();
        });
    });
});

document.getElementById("subscribeFormTwo").addEventListener("submit", function (event) {
    event.preventDefault();
    let fullName = "";
    fullName = document.getElementById("fullnameTwo").value;

    const modal = new bootstrap.Modal(document.getElementById("plansModal"));
    modal.show();

    document.getElementById("subscribeFormTwo").reset();

    document.querySelectorAll('.btn-buy').forEach(button => {
        button.addEventListener('click', function () {
            const planName = this.closest('.plan-card').querySelector('h3').textContent;

            const modalMessage = document.querySelector('#notificationModal .modal-body p');
            modalMessage.textContent = `${fullName}, you have successfully subscribed to the ${planName}!`;

            const notificationModal = new bootstrap.Modal(document.getElementById('notificationModal'));
            notificationModal.show();
            modal.hide();
        });
    });
});

window.onclick = function (event) {
    const modal = document.getElementById('notificationModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

document.getElementById("exploreMoreBtn").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".navbar").classList.remove("d-none");
    document.querySelector(".bg-first-page").classList.remove("d-none");
    document.querySelector(".tab-section").classList.remove("d-none");
    document.querySelector(".carousel-section").classList.remove("d-none");
    document.querySelector("#joinOurCommunity").classList.remove("d-none");
    document.querySelector("footer").classList.remove("d-none");
    document.querySelector(".hero").style.display = "none";
});