const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'YAYYY! I Love You so much, Nicole';
    gif.src =
    "https://i.pinimg.com/originals/9b/5c/f1/9b5cf1e2ce9334526c49a36b79787ee7.gif"
});

noBtn.addEventListener('mouseover', () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const i = Math.floor(Math.random() * maxX);
    const j = Math.floor(Math.random() * maxY);

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});