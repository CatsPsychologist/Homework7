

function clone(object){


    if (typeof(object) !== 'object'){

        alert('argument is not an object')

        return;
    }

    if (object === 'null'){

        alert('argument is null')

        return;
    }

    if(Object.keys(object).length <= 0){
        alert('argument is empty')

        return;
    }

    let object1 ={};

    for(let key in object){

        object1[key] = object[key];
    }

    return typeof object1 == "object" ? object1 : null ;

}

let some = {
    age:1,
    name: 'Alex'
}

let some2 = 'aoksfal';

// let some3 = null;

let some4 = {};


console.log(clone(some))
console.log(clone(some2))
// console.log(clone(some3))
console.log(clone(some4))



