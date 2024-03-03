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

console.log(Loginusermessage("Naitik"))