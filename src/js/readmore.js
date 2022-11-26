(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-read]"),
      closeModalBtn: document.querySelector("[data-modal-close-read]"),
      modal: document.querySelector("[data-modal-read]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();