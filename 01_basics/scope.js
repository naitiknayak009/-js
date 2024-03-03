
let a  = 300
let b =  400

if(true){
    let a = 10;
    const b = 20
    var c = 30 
}

console.log(a)
console.log(b)
console.log(c)

function one(){
    const username = "Naitik"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
one()


console.log(addOne(5))
function addOne(num1){
    return num1 + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}
addTwo(5)