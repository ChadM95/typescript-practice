const button = document.querySelector('#button');
const output = document.querySelector('.output');
const input = document.querySelector('#input');
let inputValue;
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/';
button === null || button === void 0 ? void 0 : button.addEventListener('click', e => {
    console.log("button clicked");
    if (input) {
        inputValue = Number(input.value);
        console.log('input value = ' + inputValue);
    }
    buttonClick();
});
function buttonClick() {
    if (inputValue < 1 || !inputValue) {
        fetch(apiUrl).then(res => {
            if (res.ok) {
                console.log("response OK");
                return res.json();
            }
            throw new Error('bad request');
        }).then(data => {
            if (output)
                output.textContent = JSON.stringify(data);
        }).catch(error => {
            if (output)
                output.textContent = error;
        });
    }
    else if (inputValue > 0) {
        fetch(apiUrl + inputValue).then(res => {
            if (res.ok) {
                console.log("response OK");
                return res.json();
            }
            throw new Error('bad request');
        }).then(data => {
            if (output)
                output.textContent = JSON.stringify(data);
        }).catch(error => {
            if (output)
                output.textContent = error;
        });
    }
}
export {};
//# sourceMappingURL=script.js.map