const p = ["oi", 6, 7, 8 , false]

let t = p.every(function(x){
    return typeof x === "string"

})

console.log(t)