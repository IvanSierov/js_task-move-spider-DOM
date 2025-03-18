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

  // const widthBorder = document.getComputedStyle(wall).borderLeftWidth;

  const minCoord = 0;
  const maxCoordX = wallRect.width - spiderRect.width - 20;
  const maxCoordY = wallRect.height - spiderRect.height - 20;

  newLeft = Math.max(minCoord, Math.min(newLeft, maxCoordX));
  newTop = Math.max(minCoord, Math.min(newTop, maxCoordY));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
