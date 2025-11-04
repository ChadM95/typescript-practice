//practice using a callback

function sayHello(name: string, callback: () => void) {
    console.log("hi, " + name);
    callback();
}

sayHello("chad", () => {
    console.log("callback!");
});