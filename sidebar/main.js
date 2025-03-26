const toggleBtn = document.querySelectorAll('.toggle-btn');

toggleBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let subMenu = document.querySelector('.toggle-sidebar-'+e.target.id.split('-')[1]);
        subMenu.classList.toggle('show');
    });
});