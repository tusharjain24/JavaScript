const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let arr = [1, 2, 3, 4, 5]
        // resolve(arr)
        console.log("Promise resolved");
        reject("error while talking to api")
    }, 3000)
})

myPromise
    .then((a) => {
        console.log(a)
    })
    .catch((err) => {
        console.log(err);
    })
