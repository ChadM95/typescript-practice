const button = document.querySelector('#button');
const output = document.querySelector('.output');
const input = document.querySelector<HTMLInputElement>('#input');
const colourButton = document.querySelector("#colourButton");

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/';
const countries = "./countries.json";

button?.addEventListener('click', e => {
  console.log("button clicked");

  buttonClick();
});

colourButton?.addEventListener('click', e => {
  console.log("colour button clicked");
  colourButtonClick();
})

function buttonClick() {

  fetch('./countries.json')
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      throw new Error('error while fetching');
    })
    .then(data => {
      
      const list = document.getElementById('countries-list');
      data.forEach((country: { name: string, population: number, capitalCity: string }) => {
        const li = document.createElement('li');
        li.textContent = country.name + " " + country.population/1000000 + "m " + country.capitalCity;
        list?.appendChild(li);
      })
    })
    .catch(error => {
      if (output) {
        output.textContent = error;
      }
    })

}

function colourButtonClick() {
  const container = document.querySelector('.container') as HTMLElement|null ;

  console.log('entered colourButtonClick() function');
  console.log('current style = ' + container?.style.backgroundColor);

  if(container && input) {

    let currentColour = getComputedStyle(container).backgroundColor;

    switch(currentColour) {

    case "rgb(231, 111, 97)" :
      container.style.backgroundColor = "rgb(39, 142, 211)";
      input.style.backgroundColor = "rgb(39, 142, 211)";
      console.log('changed from red to blue');
      break;

    case "rgb(39, 142, 211)" :
      container.style.backgroundColor = "green";
      console.log('changed from blue to green');
      input.style.backgroundColor = "green";
      break;

    case "rgb(0, 128, 0)" :
      container.style.backgroundColor = "rgb(231, 111, 97)";
      console.log('changed from green to red');
      input.style.backgroundColor = "rgb(231, 111, 97)";
      break;
      
    }
  }
}