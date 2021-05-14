// OOP


// const strArray = ['javascript', 'java', 'c' ];
// function forEach(array, callback){
//     const newArray = [];
//     for(let i = 0; i < array.length; i++) {
//         newArray.push(callback(array[i]))
//     }
//     return newArray;
    
// }

// const lenArray = forEach(strArray, (item) => {
//     return item.length;
// });

// console.log(lenArray);




// Class methode



// constructur methode

// class Human {
//     static isLivingOnEarth = true;
//     constructor(name, adress) {
//         this.name = name;
//         this.adress = adress;
//     }

//     introduce() {
//         console.log(`Hi my name is ${this.name}`);
//     }
// }

// console.log(Human.isLivingOnEarth);

// Human.prototype.greet = function(name) {
//     console.log(`Hai ${name}, my name is ${this.name}`);
// }

// Human.destroy = function(thing) {
//     console.log(`Human is destroying ${thing}`);
// }

// let mj = new Human('Jordan', 'Chicago');
// console.log(mj);
// console.log(mj instanceof Human);
// console.log(mj.introduce());
// console.log(mj.greet('Lebron'));
// console.log(Human.destroy('Gletser on antartika'));






// parent & child class

// class Human {
//     constructor(name, adress) {
//         this.name = name;
//         this.adress = adress;
//     }

//     introduce() {
//         console.log(`Hi, my name is ${this.name}`);
//     }

//     work() {
//         console.log('work!')
//     }

// }

// class Programer extends Human {
//     constructor(name, adress, programingLanguages) {
//         super(name, adress);
//         this.programingLanguages = programingLanguages;

//     }

//     introduce(){
//         console.log(`I can write`, this.programingLanguages);
//     }

//     code() {
//         console.log(
//             'code some',
//             this.programingLanguages[
//                 Math.floor(Math.random() * this.programingLanguages.length)
//             ]
//         )
//     }
// }

// let vincenzo = new Human('Vincenzo Cassano', 'Romagna');
// vincenzo.introduce();

// let hinata = new Programer('Hinata shoyo', 'Karasuno', ['kotlin', 'java', 'php', 'ecma', 'ruby']);
// hinata.introduce();
// hinata.work();
// hinata.code();




// Encapculation / Pengkapsulan:

// 1. Public

// class Human {
//     constructor(name, adress) {
//         this.name = name;
//         this.adress = adress;
//     }

//     introduce() {
//         console.log(`Hai my name is ${this.name}`);
//     }

//     static isEating(food) {
//         let foods = ['animal', 'plant'];
//         return foods.includes(food.toLowerCase());
//     }
// }

// let wildan = new Human('Akhmad wildan', 'San Fransisco');
// console.log(wildan);
// console.log(wildan.introduce());
// console.log(Human.isEating('animal'));



// 2. Private 


// class Human {
//     constructor(name, adress) {
//         this.name = name;
//         this.adress = adress;
//     }

//     #doGossip = () => {
//         console.log(`My adress will become viral ${this.adress}`);
//     }

//     talk() {
//         console.log(this.#doGossip());
//     }

//     static #isHidingArea = true;
// }

// let wildan = new Human('wildan', 'losari');
// console.log(wildan.talk());

// try {
//     Human.#isHidingArea
//     wildan.#doGossip
// }

// catch(err) {
//     console.log(err);
// }


// 3. Protected

// class Human {
//     constructor(name, adress) {
//         this.name = name;
//         this.adress = adress;
//     }

//     _call() {
//         console.log(`Call me as a ${this.name}`);
//     }
// }

// class Programer extends Human {
//     constructor(name, adress, task, salary) {
//         super(name, adress);
//         this.task = task;
//         this.salary = salary;
//     }

//     doCall() {
//         super._call();
//     }
// }

// let wildan = new Human('wildan', 'losari');
// let job = new Programer('developer', '$2000');
// console.log(wildan._call());

// console.log(job.doCall());




// Contoh lain:

// class User {
//     constructor(props) {
//         let {email, password} = (props);
//         this.email = email;
//         this.encryptedPassword = this.#encrypt(password); 
//     }

//     #encrypt = (password) => {
//         return `encrypted-version-of-${password}`;
//     }

//     #decrypt = () => {
//         return this.encryptedPassword.split(`encrypted-version-of-`)[1];
//     }

//     authenticate(password) {
//         return this.#decrypt() === password;
//     }
// }

// let Bot = new User({
//     email: 'wildan@otaku.com',
//     password: '123456'
// });

// const isAuthenticated = Bot.authenticate('123456');
// console.log(isAuthenticated);








// Abdtraction:

// class Human {
//     constructor(props) {
//         if(this.constructor === Human ) {
//             throw new Error('Cannot instantiate from Abstract class');
//         }

//         let {name, adress} = props;
//         this.name = name;
//         this.adress = adress;
//         this.profession = this.constructor.name;
//     }

//     work() {
//         console.log('working...');
//     }

//     introduce() {
//         console.log(`Hai my name is ${name}`);
//     }
// }

// class Police extends Human {
//     constructor(props) {
//         super(props);
//         this.rank = props.rank;
//     }

//     work() {
//         console.log(`Go to police station`);
//         super.work()
//     }
// }

// const Wiranto = new Police({
//     name: 'wildan',
//     adress: 'unknown',
//     rank: 'general'
// });

// console.log(Wiranto.profession);

// const Abstract = new Human({
//     name: 'abstrack',
//     adress: 'unknown'
// })

// catch(err) {
//     console.log(err.message);
// }






// Polymorphysm


class Human {
    constructor(name, adress) {
        this.name = name;
        this.adress = adress;
    }

    introduce() {
        console.log(`Hi my name is ${this.name}`);
    }

    work() {
        console.log(`${this.constructor.name}: working!`);
    }
}

const PublicSerer = Base => class extends Base {
    save() {
        console.log('SFX: Thank You');
    }
}

const Military = Base => class extends Base {
    shoot() {
        console.log('DOR!')
    }
}



class Doctor extends PublicSerer(Human) {
    constructor(props) {
        super(props);
    }

    work() {
        super.work();
        super.save();
    }
}

class Police extends PublicSerer(Military(Human)) {
    static workplace = 'Police station';

    constructor(props) {
        super(props);
        this.rank = props.rank;
    }

    work() {
        super.work();
        super.save();
        super.shoot();
    }
}
class Army extends PublicSerer(Military(Human)) {
    static workplace = 'Police station';

    constructor(props) {
        super(props);
        this.rank = props.rank;
    }

    work() {
        super.work();
        super.save();
        super.shoot();
    }
}


class Writer extends Human {
    work() {
        console.log('Write Book');
        super.work()
    }
}


const Wiranto = new Police({
    name: 'wiranto',
    adress: 'unknown',
    rank: 'general'
})
const Prabowo = new Army({
    name: 'Prabowo',
    adress: 'unknown',
    rank: 'general'
})

const Boyke = new Doctor({
    name: 'Boyke',
    adress: 'Jakarta'
})
const Dee = new Writer({
    name: 'Dee',
    adress: 'Bandung'
})


Wiranto.shoot()
Prabowo.shoot();

Wiranto.save();
Boyke.save();
Prabowo.save();

Prabowo.work();
Boyke.work();
Dee.work();
   



