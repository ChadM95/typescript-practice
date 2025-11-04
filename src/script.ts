const p = new Promise( (res, rej) => {

    let success = true;
    if(success)
        res("successful!");
    else 
        rej("failed");

})

p.then( result => {
    console.log(result);
}).catch(error => {
    console.error(error);
})