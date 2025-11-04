//practice using a callback
function sayHello(name, callback) {
    console.log("hi, " + name);
    callback();
}
sayHello("chad", () => {
    console.log("callback!");
});
export {};
//# sourceMappingURL=script.js.map