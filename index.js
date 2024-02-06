let largestArray = [11, 2, 3, 5, 35]
function largest(array) {
    if (!Array.isArray(array)) {
        return "plese submit array"
    }
    let len = array[0];
    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] !== "number"){
          return "plesse number submit"
        }
        if (array[i] > len) {
            len = array[i]
        }
    }
    return len;
}
// console.log(largest(largestArray))





// AnaToVori
function  AnaToVori(ana){
    if(typeof ana !== "number"){
        return "pelese send number value"
    }else if(ana < 0){
            console.log("please provide a integer value")
    }

    let vori = ana * 0.0625;
    return vori;
}
// console.log(AnaToVori(-2))


function pandaCost(singaraQuantity, comocaQuantity, gilapiQuantity){
    if(typeof singaraQuantity !== "number" || typeof comocaQuantity !== "number" || typeof gilapiQuantity !== "number" ){
        return "please valid number"
    }else if (singaraQuantity<0 || comocaQuantity < 0 || gilapiQuantity < 0){
        return "please possative number"
    }
    let singara = 5;
    let chomoca = 15;
    let gilapi = 5;

    let totalPrice = singara * singaraQuantity + chomoca * comocaQuantity + gilapi * gilapiQuantity;
    return totalPrice;
}
// console.log(
// pandaCost(1, 3,4)

// )




function picnicBudget(man){

    if(typeof man !== "number" || man < 0){
        return "please valid number"
    }

    let first100 = 5000;
    let second100 = 4000;
    let last100 = 3000;

    if(man <= 100){
        return man * first100;
    }
    else if(man <= 200){
        let first = first100 * 100;
        let remainder = man - 100;
        let result = (remainder * second100) + first;
        return result;
    }else if (man > 200){
        let first = first100 * 100;
        let second = second100 * 100;
        let remainder = man - 200;
        let result = (remainder * last100) + first + second;
        return result;
    }
}
console.log(
picnicBudget(true)

)