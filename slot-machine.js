const btn = document.querySelector('.btn');
const fruit_pic = document.querySelectorAll('.fruits .pic');
const pic_one = document.querySelectorAll('.pic.one img');
const pic_two = document.querySelectorAll('.pic.two img');
const pic_three = document.querySelectorAll('.pic.three img');

let controlValue = 0;
function spin() {
  btn.disabled = true;
  fruit_pic.forEach(item => {
    // item.classList.remove('spin');
    console.log(item);
    if(controlValue === 1) {
      moveDOM();
      item.classList.remove('spin');
      return;
    }
    item.classList.add('spin');
    setTimeout(() => {
      console.log('變換圖片');
      pic_one.forEach(item => {
        item.src= `${rand(1,3)}.svg`;
      });
      pic_two.forEach(item => {
        item.src= `${rand(1,3)}.svg`;
      });
      pic_three.forEach(item => {
        item.src= `${rand(1,3)}.svg`;
      });
    },1500);
    setTimeout(() => {
      btn.disabled = false;
      // item.classList.remove('spin');
    },3100);
  })
  controlValue = 1;
}
btn.onclick = spin;

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(document.querySelector('.one').children);  
function moveDOM() {
  for (let index = 0; index < 36; index++) {
    let imgNode = document.querySelector('.one').children[index];
    document.querySelector('.one').children[38].after(imgNode);
  }
  for (let index = 0; index < 36; index++) {
    let imgNode = document.querySelector('.two').children[index];
    document.querySelector('.two').children[38].after(imgNode);
  }
  for (let index = 0; index < 36; index++) {
    let imgNode = document.querySelector('.three').children[index];
    document.querySelector('.three').children[38].after(imgNode);
  }
}