
//1
function arrFunc(a,b,...args){
    let arr = []
    let firstElement = a + b;
    arr.push(firstElement)
    let secondElement = 1;
    for(let i of args){
        secondElement = secondElement * i
    }
    arr.push(secondElement)
    return arr
}

//2

const user = {
    banks: [
      {  },
      { } ,
      { name: 'badri', address: { street: 'rustaveli', city: 'igoeti' } }
    ]
  };

function cityFunc({ banks: [, , {address: { city }= {} }={}] }){
    return city
}

//3
const obj = {
    name: 'gela',
    lastName: 'gnolidze',
    adress:{
        street: 'rustaveli',
        city: 'igoeti',
        rame: {
            sh: 'dds'
        }
    }
}
function createNewObj(user){
    let newObj = {...user}

    for(let i in user){
        if(typeof user[i] === 'object'){
            newObj[i] = user[i]
        }
    }
    return newObj
}

console.log(createNewObj(obj));