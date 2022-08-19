(() => {
  const refs = {
    openMobileBtn: document.querySelector('.open-menu-btn'),
    closeMobileBtn: document.querySelector('.close-menu-btn'),
    mobile: document.querySelector('.mob-menu'),
  };

  refs.openMobileBtn.addEventListener('click', toggleMobile);
  refs.closeMobileBtn.addEventListener('click', toggleMobile);

  function toggleMobile() {
    refs.mobile.classList.toggle('is-hidden');
  }
})();