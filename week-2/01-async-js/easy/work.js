let fs=require('fs')

const data = fs.writeFile("a1.txt", "Hello bro",((err,data)=>{
    fs.readFile("a1.txt","utf-8",((err,data)=>{
        console.log(data)
    }))
}));
