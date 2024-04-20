## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



function counter(n,dur){

    console.log(n)

    if(n>0){
        setTimeout(()=>{
            counter(n-1,dur)
        },dur)
    }

}

console.log(counter(5,1000))



  




































































(Hint: setTimeout)