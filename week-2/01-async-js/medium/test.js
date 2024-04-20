let fs=require('fs')

fs.readFile("a2.txt","utf-8",((err,data)=>{
    let str=data.split(" "),res=[]

    for(let i of str){
        if(i!="") res.push(i)
    }

   let final=res.join(" ")

   fs.writeFile("a2.txt",final,((err,data)=>{
    fs.readFile("a2.txt","utf-8",((err,data)=>{
        console.log(data)
    }))
   }))
}))