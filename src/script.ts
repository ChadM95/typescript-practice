const button = document.querySelector('#button');
const output = document.querySelector('#output');
const apiUrl = 'https://jsonplaceholder.typicode.com/'
let num: number = 1;

button?.addEventListener('click', e => {
  console.log("button clicked");
  buttonClick();
});

function buttonClick() {

  fetch(apiUrl + 'posts/' + num).then(res => {
    if(res.ok) {
      num++;
      console.log("num : " + num)
      return res.json();
    }
    throw new Error('bad request');
  }).then(data => {
    if(output)
    output.textContent = JSON.stringify(data);
  }).catch(error => {
    if(output)
    output.textContent = error;
  })

};