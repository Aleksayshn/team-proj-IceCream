(() => {
    const refs = {
      openModalBtns: document.querySelectorAll("[data-modal-open-ingredients]"),
      closeModalBtn: document.querySelector("[data-modal-close-ingredients]"),
      modal: document.querySelector("[data-modal-ingredients]"),
    };
  
  refs.openModalBtns.forEach(btn => {
    btn.addEventListener("click", toggleModal);
  });
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
  
  function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();