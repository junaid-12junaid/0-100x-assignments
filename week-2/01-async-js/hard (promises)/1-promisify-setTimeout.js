/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


function wait(n) {

    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            reslove("hello")
        },n)
    })
}

wait(2000).then((data)=>{
    console.log(data)
})

module.exports = wait;
