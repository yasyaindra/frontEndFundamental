const getCake = callback => {
    let cake = null;
    console.log("Sedang membuat kue...")
    setTimeout(()=>{
        cake = "Kue selesai";
        callback(cake);
    },3000)
}

getCake(cake=> {
    console.log(cake)
})