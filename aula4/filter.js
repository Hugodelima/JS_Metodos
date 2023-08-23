const p = ["oi", 6, 7, 8 , false]


let u = p.filter(function(x, i, _p){
    return typeof x === "string"

})

console.log(u)