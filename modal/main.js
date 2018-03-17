const button = document.getElementById('modalBtn');
const modal = document.getElementById('simpleModal');
const closeBtn = document.getElementById('closeBtn');

button.addEventListener('click', show);

function show(e){
  modal.style.display = 'block';
}

closeBtn.addEventListener('click', close);

function close(e){
  modal.style.display = 'none';
}

window.addEventListener('click', outsideClick);

function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}
