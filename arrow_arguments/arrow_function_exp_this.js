const box = document.querySelector('.box');
box.addEventListener('click', function() {
  let first = 'opening';
  let second = 'open';
  if(this.classList.contains(first)) {
    // switch them
    [first, second] = [second, first];
  }
  this.classList.toggle(first);
  setTimeout(() => {
    console.log(this);
    this.classList.toggle(second);
  }, 500);
});
