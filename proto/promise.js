const executorFunction = (resolve, reject) => {
    const isCoffeMakerReady = false;
    if(isCoffeMakerReady) {
        resolve("Kopi berhasil dibuat")
    } else {
        reject("Mesin kopi tak dapat digunakan")
    }
};

const handlerSuccess = resolvedValue => {
    console.log(resolvedValue)
}

const handlerRejection = rejectionReason => {
    console.log(rejectionReason)
}

const makeCoffe = new Promise(executorFunction);
makeCoffe.catch(handlerRejection);