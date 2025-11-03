const header = document.getElementById('header');
const button = document.getElementById('button');
const input = document.getElementById('input');
button === null || button === void 0 ? void 0 : button.addEventListener('click', (e) => {
    console.log(e);
    if ((input === null || input === void 0 ? void 0 : input.value) && header)
        header.textContent = 'you entered ' + input.value;
    else if (header)
        header.textContent = 'please enter a value';
});
export {};
//# sourceMappingURL=script.js.map