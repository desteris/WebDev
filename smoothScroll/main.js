const tags = document.querySelectorAll('a');

tags.forEach((tag) => {
  tag.addEventListener('click', scroll);
});

function scroll(e){
  const id = e.target.dataset.id;
  const des = document.getElementById(id).offsetTop;

  window.scrollBy({ top: des, left: 0, behavior: 'smooth' });
  e.preventDefault();
}
