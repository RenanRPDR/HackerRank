function factorial(n) { 
    let x = n;
    let factoryResult = 0

    while (x <= 4 && x > 1) {
        factoryResult = factoryResult + (x*(x--))
        x = x--;
        //return factoryResult;
    }
    
    console.log(factoryResult)
}
