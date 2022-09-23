import Blobity from 'blobity';
import Scrollbar from 'smooth-scrollbar';
import barba from '@barba/core';
import { gsap } from 'gsap';

const scrollbar = Scrollbar.init(document.body);
const cursor = new Blobity({
  licenseKey: null,
  color: '#ffffff',
  fontColor: '#000000',
  size: 10,
  fontSize: 16,
  invert: true,
  zIndex: 10,
});

const sleep = function (sec = 2) {
  return new Promise(res => {
    setTimeout(res, sec * 1000);
  });
};

const transition = function () {
  const tl = gsap.timeline();
  tl.to('.loading-screen', {
    duration: 1.2,
    bottom: '0%',
    height: '100%',
    ease: 'Expo.easeInOut',
  });
  tl.to('.loading-screen', {
    duration: 1,
    bottom: '100%',
    height: '0%',
    ease: 'Expo.easeInOut',
    delay: 0.3,
  });

  tl.set('.loading-screen', { bottom: '0%' });
};

const pageTransition = barba.init({
  sync: true,
  transitions: [
    {
      async leave() {
        const done = this.async();
        transition();
        await sleep(1);
        done();
      },
    },
  ],
});

console.clear();
export { pageTransition, cursor, scrollbar };
