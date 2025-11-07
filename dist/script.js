const button = document.querySelector('#button');
const paragraph = document.querySelector('#paragraph');
const apiUrl = 'https://jsonplaceholder.typicode.com/';
let num = 1;
button === null || button === void 0 ? void 0 : button.addEventListener('click', e => {
    console.log("button clicked");
    buttonClick();
});
function buttonClick() {
    fetch(apiUrl + 'posts/' + num).then(res => {
        if (res.ok) {
            num++;
            console.log("num : " + num);
            return res.json();
        }
        throw new Error('bad request');
    }).then(data => {
        if (paragraph)
            paragraph.textContent = JSON.stringify(data);
    }).catch(error => {
        if (paragraph)
            paragraph.textContent = error;
    });
}
;
export {};
//# sourceMappingURL=script.js.map