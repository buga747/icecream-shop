(() => {
  const refs = {
    openModalBtn: document.getElementById('product-modal-3-open'),
    closeModalBtn: document.getElementById('products-modal-3-close'),
    modal: document.getElementById('product-modal-3'),
  };

  const body = document.getElementById('body');

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.openModalBtn3.addEventListener('click', toggleModal);
  refs.openModalBtn4.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.openModalBtn.addEventListener('click', locking);
  refs.openModalBtn2.addEventListener('click', locking);
  refs.openModalBtn3.addEventListener('click', locking);
  refs.openModalBtn4.addEventListener('click', locking);
  refs.closeModalBtn.addEventListener('click', locking);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function locking() {
    body.classList.toggle('locked');
  }
})();
