const modalCart = document.querySelector('.modal');
const catalogItem = document.querySelectorAll('.product');
const ESC_NUMBER = 27;

for (let i = 0; i < catalogItem.length; i++) {
  const addToCart = catalogItem[i].querySelector('.cart-button');

  addToCart.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalCart.classList.add('modal--show');
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_NUMBER) {
    evt.preventDefault();
    if (modalCart.classList.contains('modal--show')) {
      modalCart.classList.remove('modal--show');
    }
  }
});
