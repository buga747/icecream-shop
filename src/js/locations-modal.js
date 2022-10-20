(() => {
  const refs = {
    openModalBtn: document.getElementById('locations-modal-open'),
    closeModalBtn: document.getElementById('locations-modal-close'),
    modal: document.getElementById('locations-modal'),
  };

  const body = document.getElementById('body');

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  // refs.openModalBtn.addEventListener('click', locking);
  // refs.closeModalBtn.addEventListener('click', locking);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  // function locking() {
  //   body.classList.toggle('locked');
  // }
})();
