//fetch
console.log("program started");
const button = document.getElementById('button');
const paragraph = document.getElementById('paragraph');
button === null || button === void 0 ? void 0 : button.addEventListener('click', e => {
    console.log("button clicked");
    buttonClick();
});
function buttonClick() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => {
        if (paragraph)
            paragraph.textContent = JSON.stringify(data);
        console.log("response : " + data);
    })
        .catch(error => {
        if (paragraph)
            paragraph.textContent = error;
        console.log(error);
    });
}
export {};
//# sourceMappingURL=script.js.map