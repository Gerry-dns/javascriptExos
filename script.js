const introducer = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt,
        assets: 10000,
        liabilities: 5000,
        netWorth: function () {
            return this.assets - this.liabilities
        }
    }

    const intro = `Hi, my name is ${person.name} and the color of the shirt is ${person.shirt} and my net worth is ${person.netWorth()} euros`

    return intro
}
// console.log(introducer('Germain', 'black'));

// boucle for

const fruits = ['banane', 'poire', 'orange', 'pomme', 'abricot', 'lichi' ]
// ancienne méthode :
//for (let i=0; i < fruits.length; i++) {
   // console.log(fruits[i])
//}

// nouvelle méthode : 
for (const fruit of fruits) {
    console.log(fruit);
}
// on pourrait écrire John à la place de fruit, mais il faut rester cohérent.