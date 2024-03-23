const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async 1")
       resolve(1)
    }, 2000);
})


const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Async 2")
        resolve(2)
    }, 2000);
})

Promise.race([p2, p2])
    .then(result=> console.log(result))
    .catch(err=> console.log("ERROR",err.message))