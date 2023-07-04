const dropZone = document.querySelectorAll('.drop-zone div');
let dropImg = [];
const imgs = document.querySelectorAll('.puzzle img');
const checkBtn = document.querySelector('.btn');
const resetBtn = document.querySelector('.reset');


// 監聽拼圖區的圖片拖曳事件
imgs.forEach((item) => {
  item.addEventListener('dragstart', (e) => {
    // console.log(item)
    e.dataTransfer.clearData();
    const imgId = e.target.id;
    // console.log(imgId)
    e.dataTransfer.setData('text', imgId);
  })
})
dropZone.forEach((item) => {
  item.addEventListener('dragover', (e) => {
    e.preventDefault();
  })
  item.addEventListener('drop', (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text')
    const node = document.getElementById(id);
    if(e.target.nodeName === 'DIV') {
      e.target.appendChild(node);
    }

  })
})

// 檢查答案，將位置的自訂ID和圖片的ID進行比對
function check() {
  const dropZoneImgs = document.querySelectorAll('.drop-zone img');
  if(dropZoneImgs.length === 0 || dropZoneImgs.length !== 9) {
    alert('尚未完成拼圖');
    return;
  }
  const imgArray = Array.from(dropZoneImgs);
  const dropZoneArray = Array.from(dropZone); // 將 NodeList 轉換為陣列

  for (let index = 0; index < dropZoneArray.length; index++) {
    const imgId = imgArray[index].id;
    console.log('img',imgId);
    const divId = dropZoneArray[index].getAttribute('dataset-id');
    console.log('div',divId);
    if(imgId !== divId) {
      alert('error');
      return;
    }
  }
  alert('correct');
}

// 拼圖區全部重置，並且要重新抓取拼圖的元素、和監聽拖曳事件
let numArr = [];
resetBtn.addEventListener('click', () => {
  numArr = [];
  dropZone.forEach(item => {
    item.innerHTML = null;
  })
  const puzzle = document.querySelector('.puzzle');
  if(puzzle.children.length === 9) return;
  puzzle.innerHTML = null;
  // for (let index = 1; index < 10; index++) {
  //   let img = document.createElement('img');
  //   const randNum = rand(1,9);
  //   console.log(randNum);
  //   console.log(numArr.indexOf(randNum));
  //   console.log(numArr);
  //   img.src = `https://picsum.photos/id/${rand(1,9)}/200/300`;
  //   img.id = `${index}`;
  //   puzzle.appendChild(img);
  // }
  while (numArr.length < 9) {
    let img = document.createElement('img');
    const randNum = rand();
    console.log(randNum);
    console.log(typeof numArr.indexOf(randNum));
    if(numArr.indexOf(randNum) == -1) {
      numArr.push(randNum);
      img.src = `https://picsum.photos/id/${randNum}/200/300`;
      img.id = `${randNum}`;
      puzzle.appendChild(img);
    }
    // numArr = [];
  }
  const imgs = document.querySelectorAll('.puzzle img');
  // console.log(imgs);
  imgs.forEach((item) => {
    item.addEventListener('dragstart', (e) => {
      e.dataTransfer.clearData();
      const imgId = e.target.id;
      e.dataTransfer.setData('text', imgId);
    })
  })
})

checkBtn.onclick = check;

function rand() {
  return Math.floor(Math.random() * 9) + 1;
}
