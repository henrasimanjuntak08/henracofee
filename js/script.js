//toogle class active

const navbarnav = document.querySelector("nav-navbar");

// ketika menu diklik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};
