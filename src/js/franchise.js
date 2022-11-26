// MODAL Franchise
(() => {
  const refs = {
    openFranchiseBtn: document.querySelector("[data-franchise-open]"),
    closeFranchiseBtn: document.querySelector("[data-franchise-close]"),
    franchise: document.querySelector("[data-franchise]"),
  };

  refs.openFranchiseBtn.addEventListener("click", toggleFranchiseModal);
  refs.closeFranchiseBtn.addEventListener("click", toggleFranchiseModal);

  function toggleFranchiseModal() {
    refs.franchise.classList.toggle("is-hidden");
  }
})();