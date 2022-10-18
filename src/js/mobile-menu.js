(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const body = document.getElementById('body');
  const link1 = document.getElementById('link1');
  const link2 = document.getElementById('link2');
  const link3 = document.getElementById('link3');
  const link4 = document.getElementById('link4');
  const link5 = document.getElementById('buyNowModalOpenMobile');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  link1.addEventListener('click', toggleMenu);
  link2.addEventListener('click', toggleMenu);
  link3.addEventListener('click', toggleMenu);
  link4.addEventListener('click', toggleMenu);
  link5.addEventListener('click', toggleMenu);

  openMenuBtn.addEventListener('click', locking);
  closeMenuBtn.addEventListener('click', locking);
  link1.addEventListener('click', locking);
  link2.addEventListener('click', locking);
  link3.addEventListener('click', locking);
  link4.addEventListener('click', locking);
  link5.addEventListener('click', locking);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });

  function locking() {
    body.classList.toggle('locked');
  }
})();
