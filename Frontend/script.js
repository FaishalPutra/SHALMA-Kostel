document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hero-text, .hero-image, .profile-description, .profile-tabs, .htitle, .service-container");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});


function showTab(tabId) {
    // Menghapus class 'active' dari semua tombol
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Menghapus class 'active' dari semua konten
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Menambahkan class 'active' pada tombol yang dipilih
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');

    // Menampilkan konten yang sesuai
    document.getElementById(tabId).classList.add('active');
}
