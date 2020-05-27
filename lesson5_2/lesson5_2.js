"use strict";

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click',function(event) {
      let mainEl = event.target.parentNode;
      let imgEl = mainEl.querySelector('img');
      if (event.target.innerText == 'Подробнее') {
         imgEl.style.display = 'none';
         imgEl.insertAdjacentHTML('beforebegin','<div class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscingelit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>');
         event.target.innerText = 'Отмена';
      } else {
         imgEl.style.display = '';
         mainEl.querySelector('.desc').remove()
         event.target.innerText = 'Подробнее';
      }
  })
});
