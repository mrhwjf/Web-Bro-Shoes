// INDEX.HTML
const toggleButton = document.getElementById('header-responsive-button');
const navResponsive = document.getElementById('header-responsive');

toggleButton.addEventListener('click', () => {
    navResponsive.style.display = navResponsive.style.display === 'none' ? 'flex' : 'none';
});
// INDEX.HTML