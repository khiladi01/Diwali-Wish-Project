// High order array object function...

const firstArray = [
    {name : "Bottle" , price : "500"},
    {name : "Bottle" , price : "500"},
    {name : "Bottle" , price : "500"},
    {name : "Watch" , price : "500"},
    {name : "Watch" , price : "500"},
    {name : "Watch" , price : "500"},
    {name : "Bag" , price : "500"},
    {name : "Bag" , price : "500"},
    {name : "Bag" , price : "500"},
    {name : "Mobile" , price : "500"},
]

const filteRate = firstArray.filter((item) => {
      return (item.name) == "Watch"
})

const totalData = filteRate.reduce((sum , item) => sum + Number(item.price),0);

console.log("First Total Data Are =" ,firstArray)
console.log("Second Filterate data Are =" ,filteRate)
console.log("Filterate Total Data Values Are =" ,totalData)
