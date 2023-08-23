const p = ["oi", 6, 7, 8 , false]

let t = p.some(function(x){
    return typeof x === "number" && x >=10

})

console.log(t)