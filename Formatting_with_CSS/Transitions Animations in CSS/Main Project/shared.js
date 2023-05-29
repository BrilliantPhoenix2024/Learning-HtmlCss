const backdrop = document.querySelector('.backdrop');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

// console.dir(backdrop);
// console.dir(backdrop.style.backgroundImage);
// console.dir(backdrop.style['background-image']);

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function () {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    // modal.className = 'open'; // this will actually overwrite the complete class list.
    modal.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(function () {
      backdrop.classList.add('open');
    }, 10);
  });
}

backdrop.addEventListener('click', function () {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
  // backdrop.style.display = 'none';
  // modal.style.display = 'none';
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
  setTimeout(function () {
    backdrop.style.display = 'none';
  }, 200);
}

toggleButton.addEventListener('click', function () {
  // mobileNav.style.display = 'block';
  mobileNav.classList.add('open');
  backdrop.style.display = 'block';
  setTimeout(function () {
    backdrop.classList.add('open');
  }, 10);
});
