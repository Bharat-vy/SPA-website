document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const pages = document.querySelectorAll('.page');
    
    function showPage(targetId) {
        pages.forEach(page => {
            if (page.id === targetId) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    }

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('data-target');
            showPage(targetId);
        });
    });

    // Show the home page by default
    showPage('home');
});
