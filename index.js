

// Level 0

const numberOrNot = (input) => {
    return new Promise ((resolve, reject) => {
        if(typeof input === "number"){
            resolve("input is number")
        }
        else {
            reject (Error("input is not number"))
        }
    })
}

numberOrNot(2).then(Response => console.log(Response)).catch(Error => console.log(Error))
numberOrNot(20).then(Response => console.log(Response)).catch(Error => console.log(Error))
numberOrNot(true).then(Response => console.log(Response)).catch(Error => console.log(Error))



// Level 1


const numberOrNotAsync = (input) => {
    if(typeof input === "number") {
        return Promise.resolve("input is number")

    } else {
        return Promise.reject(Error("input is not a number"))
    }
}

numberOrNotAsync(2).then(Response => console.log(Response)).catch(error => console.log(error))
numberOrNotAsync(789).then(Response => console.log(Response)).catch(error => console.log(error))
numberOrNotAsync(true).then(Response => console.log(Response)).catch(error => console.log(error))

// Level 2 



const inputVariable = (input) => {
    if(typeof input === "string") {
        return Promise.resolve("Input is string");
    }
    if(typeof input === "number") {
        return Promise.resolve("Input is number");
    }
    if(typeof input === "boolean") {
        return Promise.resolve("Input is boolean");
    } else {
        return Promise.reject(Error("Input format undefined"));
    }

}

const variableType = (input) => {
    switch (typeof input) {
        case "string" : return Promise.resolve ("Input is string")
        break
        case "number" : return Promise.resolve ("Input is number")
        break
        case "boolean" : return Promise.resolve ("Input is boolean")
        break
        case "undefined" : return Promise.resolve ("Please input varieble")
    }
}

variableType("abc").then(res => console.log(res)).catch(err => console.log(err))
variableType(2).then(res => console.log(res)).catch(err => console.log(err))
variableType(true).then(res => console.log(res)).catch(err => console.log(err))
variableType().then(res => console.log(res)).catch(err => console.log(err))


// Level 3 
console.log("Level 3");

const numberValidation = (input) => {
    if (typeof input === "number") {
        return Promise.resolve(input);
    } else {
        return Promise.reject("Input a number");
    }   
}

const multipleByTwo = (result) => {
    return Promise.resolve(result * 2);
}

const multipleByThree = (result) => {
    return Promise.resolve(result * 3);
}


numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err))
numberValidation("").then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err))

