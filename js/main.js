const app = document.getElementById('app');
 
//*Цветной экран для каждого пункта меню
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.header__nav-link');
    const body = document.body;
    const colorClasses = ['screen-home','screen-about','screen-services','screen-price','screen-reviews','screen-contacts'];
    const menuMap = [
      { text: 'Главная', className: 'screen-home' },
      { text: 'Обо мне', className: 'screen-about' },
      { text: 'Мои услуги', className: 'screen-services' },
      { text: 'Стоимость услуг', className: 'screen-price' },
      { text: 'Отзывы', className: 'screen-reviews' },
      { text: 'Контакты', className: 'screen-contacts' },
    ];
    menuLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        colorClasses.forEach(c => body.classList.remove(c));
        const found = menuMap.find(m => link.textContent.trim() === m.text);
        if (found) body.classList.add(found.className);
      });
    });
    body.addEventListener('click', function (e) {
      if (!e.target.classList.contains('header__nav-link')) {
        colorClasses.forEach(c => body.classList.remove(c));
      }
    });
  });
})();

