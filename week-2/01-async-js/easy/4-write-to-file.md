## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.


let fs=require('fs')

const data = fs.writeFile("a1.txt", "Hello bro",((err,data)=>{
    fs.readFile("a1.txt","utf-8",((err,data)=>{
        console.log(data)
    }))
}));
