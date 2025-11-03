const header = document.getElementById('header');
const button = document.getElementById('button');
const input = document.getElementById('input') as HTMLInputElement | null;

button?.addEventListener('click', (e) => {

    console.log(e);

    if(input?.value && header)
        header.textContent = 'you entered ' + input.value;

    else if (header)
        header.textContent = 'please enter a value';


});