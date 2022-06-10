window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
})

const toggleMenu = () => {
    const menuToggle = document.querySelector('.menuToggle');
    menuToggle.classList.toggle('active');
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
}