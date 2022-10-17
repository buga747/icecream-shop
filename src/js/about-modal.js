(() => {
  const refs = {
    openModalBtn: document.getElementById('about-modal-open'),
    closeModalBtn: document.getElementById('about-modal-close'),
    modal: document.getElementById('about-modal'),
  };

  const body = document.getElementById('body');

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.openModalBtn.addEventListener('click', locking);
  refs.closeModalBtn.addEventListener('click', locking);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function locking() {
    body.classList.toggle('locked');
  }
})();
