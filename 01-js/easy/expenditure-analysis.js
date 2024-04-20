/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if(transactions.length==0) return [];

  let res={}
  for(let i of transactions){
    let key=i.category
    // console.log(key)
    if(!res.hasOwnProperty(key)){
      
      res[key]=i.price
    }else{
      res[key]+=i.price
    }
  }

  let res1=[]
  for(let i in res){


    res1.push({category:i,totalSpent:res[i]})
  }
  return res1
}



module.exports = calculateTotalSpentByCategory;
