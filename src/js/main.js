import '@fortawesome/fontawesome-free/css/all.css';
import 'normalize.css';
import '../css/style.css';

document.querySelector(".nav-toggle").addEventListener("click", () => {
    document.querySelector(".header").classList.toggle("header--open")
})
