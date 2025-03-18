'use strict';

'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();

  const spiderRect = spider.getBoundingClientRect();

  const clickX = e.clientX;
  const clickY = e.clientY;

  let newLeft = clickX - wallRect.left - spiderRect.width / 2;
  let newTop = clickY - wallRect.top - spiderRect.height / 2;

  newLeft = Math.max(0, Math.min(newLeft, wallRect.width - spiderRect.width));
  newTop = Math.max(0, Math.min(newTop, wallRect.height - spiderRect.height));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
