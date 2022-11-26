(() => {
    const refs = {
      openModalBtns: document.querySelectorAll("[data-modal-open-ingredients]"),
      closeModalBtn: document.querySelector("[data-modal-close-ingredients]"),
      modal: document.querySelector("[data-modal-ingredients]"),
    };
  
  refs.openModalBtns.forEach(btn => {
    btn.addEventListener("click", openModal);
  });
    refs.closeModalBtn.addEventListener("click", closeModal);
  
  
  function openModal() {
    refs.modal.classList.remove("is-hidden");
  document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    refs.modal.classList.add("is-hidden");
  document.body.style.overflow = 'scroll';
  }

  


})();
  
