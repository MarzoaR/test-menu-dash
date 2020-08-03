// Obtoner valor dash en dolares y bolivares

let currentcy_dollar = document.querySelector('#currentcy-dollar');
let currentcy_ves = document.querySelector('#currentcy-ves');

  function getCurrentcy() {
    const API = 'https://rates2.dashretail.org/rates?symbol=dashves&nested=1';

    fetch(API)
      .then(response => response.json())
      .then(myJson => {
        let USD, VES;
        let usd = myJson[0].nested[0].price;
        let ves = myJson[0].price;
        USD = new Intl.NumberFormat("de-DE", {style: "currency", currency: "USD"}).format(usd);
        VES = new Intl.NumberFormat("de-DE", {style: "currency", currency: "VES"}).format(ves);

        currentcy_dollar.innerHTML = `${USD}`;
        currentcy_ves.innerHTML = `${VES}`;
      });
  }
  getCurrentcy();
  setInterval (getCurrentcy, 10000);


  // Moidificación de la barra de nevagacion según el scroll

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  const containerNav = document.querySelector('.container-nav');
  const img = document.querySelector('.logo-container img');
  const logoContainerA = document.querySelector('.logo-container a');

  nav.classList.toggle('nav-sticky', window.scrollY > 100 && window.innerWidth > 900)
  containerNav.classList.toggle('sticky', window.scrollY > 100 && window.innerWidth > 900)
  img.classList.toggle('adaptable', window.scrollY > 100 && window.innerWidth > 900)
  logoContainerA.classList.toggle('a-adaptable', window.scrollY > 100 && window.innerWidth > 900)


  if(window.scrollY > 100 && window.innerWidth > 900) {
    img.setAttribute('src', './dashHelpColor.svg');
    nav.setAttribute('height', '80px');
  } else {
    img.setAttribute('src', './dashHelpWhite.svg');
    nav.setAttribute('height', '100px');
  }
});