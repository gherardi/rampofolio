import { gsap } from 'gsap';
import { pageTransition, cursor, scrollbar } from './feature';

const imageHover = function (e) {
  // console.log(this);
  cursor.updateOptions({ invert: false });
};

const imageOut = function (e) {
  cursor.updateOptions({ invert: true });
  // console.log(this);
};
document.querySelectorAll('figure').forEach(el => el.addEventListener('mouseover', imageHover));
document.querySelectorAll('figure').forEach(el => el.addEventListener('mouseout', imageOut));

const titleHome = document.querySelector('#title-home');
const letters = [...titleHome.textContent];
titleHome.textContent = '';

letters.forEach(letter => {
  titleHome.innerHTML += `<span class="letter inline-block">${letter}</span>`;
});

gsap.fromTo('.letter', { y: 30 }, { y: 0, delay: 0.5, stagger: 0.06 });
