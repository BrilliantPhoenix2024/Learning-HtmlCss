const backdrop = document.querySelector('.backdrop');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function () {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
}
