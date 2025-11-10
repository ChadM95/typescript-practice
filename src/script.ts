const button = document.querySelector('#button');
const output = document.querySelector('.output');
const input = document.querySelector<HTMLInputElement>('#input');
let inputValue: number;

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/';
const countries = "./countries.json";

button?.addEventListener('click', e => {
  console.log("button clicked");
  if (input) {
    inputValue = Number(input.value);
    console.log('input value = ' + inputValue);
  }
  buttonClick();
});

function buttonClick() {

  fetch('./countries.json')
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      throw new Error('error while fetching');
    })
    .then(data => {
      if(output)
      output.textContent = JSON.stringify(data);
    })
    .catch(error => {
      if (output) {
        output.textContent = error;
      }
    })

}