function sayMyName(num1,num2){
   
    return  num1 + num2 ;
    
}

const result = sayMyName(4,5)

//console.log("result",result)

function Loginusermessage(username = "Samarpan"){
    if(username==undefined){
        console.log("Please Enter a Username")
    }
    else
    return `${username} just logged in` 
}

// console.log(Loginusermessage("Naitik"))

function calculateCartPrice(...num1){
    return num1;
}
let arr = calculateCartPrice(200,400,500);
for(let i = 0 ; i<3 ; i++){
    let sum = 0
    sum = sum + arr[i]
    console.log(sum)
}
console.log(calculateCartPrice(200,400,500))

const user = {
    username: "Naitik",
    price: 999,
    age: 94
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))