const openHam = document.getElementById('openHam');
const hamList = document.getElementById('hamlist');
const closeHam = document.getElementById('closeham');

openHam.addEventListener('click', () => {
  openHam.style.display = 'none';
  closeHam.style.display = 'block';
  hamList.classList.add('show');
  closeHam.addEventListener('click', () => {
    openHam.style.display = 'block';
    closeHam.style.display = 'none';
    hamList.classList.remove('show');
  });
});
