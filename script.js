var images, titles;

// Describe this function...
function setimage() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  images = ['https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/3476312/pexels-photo-3476312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/8202752/pexels-photo-8202752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/10874914/pexels-photo-10874914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/4026103/pexels-photo-4026103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1427548/pexels-photo-1427548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'];
}

// Describe this function...
function settitle() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  titles = ['Louvre', 'Eiffel', 'Cotswold Lavender', 'Bibury', 'Wales', 'Pisa', 'Dorset', 'London Tower Bridge'];
}


images = ['https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/3476312/pexels-photo-3476312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/8202752/pexels-photo-8202752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/10874914/pexels-photo-10874914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/4026103/pexels-photo-4026103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1427548/pexels-photo-1427548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'];
titles = ['Louvre', 'Eiffel', 'Cotswold Lavender', 'Bibury', 'Wales', 'Pisa', 'Dorset', 'London Tower Bridge'];
let element_image = document.getElementById('image');
element_image.setAttribute("src", images[0]);
element_image.style.backgroundColor = '#000066';
let element_paragraph = document.getElementById('paragraph');
element_paragraph.innerText = titles[0];
element_paragraph.style.color = '#000000';


document.getElementById('next').addEventListener('click', (event) => {
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", images.shift());
  if (!images.length) {
    setimage();
  }
  let element_paragraph2 = document.getElementById('paragraph');
  element_paragraph2.innerText = titles.shift();
  if (!titles.length) {
    settitle();
  }

});

document.getElementById('prev').addEventListener('click', (event) => {
  let element_image3 = document.getElementById('image');
  element_image3.setAttribute("src", images.pop());
  if (!images.length) {
    setimage();
  }
  let element_paragraph3 = document.getElementById('paragraph');
  element_paragraph3.innerText = titles.pop();
  if (!titles.length) {
    settitle();
  }

});







function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('button3').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list2');
  element_list2.innerText = getNumberOrString(document.getElementById('text2').value);
  element_list2.style.color = '#000099';
  element_list2.style.backgroundColor = '#cccccc';

});