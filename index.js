
let n = 100


SimpleNumbers:
for (let i = 2; i <=n; i++){
    for(let a = 2; a < i; a++){
        if (i%a == 0) continue SimpleNumbers;
    }
    console.log(i) 
}

