// const upperizedNames = ["indra","maulana","yasya"]
//     .map(name => name.toUpperCase());

// console.log(...upperizedNames);

//Regular Function & its Arrow Version
function sayHello(greet) {
    console.log(`${greet}`);
}

const sayHello2 = function(greet) {
    console.log(`${greet}`);
}

const sayHello3 = greet => console.log(`${greet}`);

// sayHello('Selamat Malam')
// sayHello2('selamat pagi')
// sayHello3('selamat siang')

//Contoh passed an argument
// ["Indra","maulana","yasya"]
//     .forEach(m=>console.log(`nama saya ${m}`))

//contoh stroed in property
// const user = {
//     introduce: (name='Afifan') => `nama saya adalah ${name}`
// }

// const {introduce} = user
// console.log(introduce('Indra'))

// const tampilkanData = (nama,umur) => `nama saya ${nama}, berumur ${umur}`;

// console.log(tampilkanData("Indra",19))

// const ucapkanSalam = salam => {
//     if(salam == "pagi") {
//         return "Selamat Pagi, Indra"
//     } else {
//         return "Selamat Malam"
//     }
// }

// console.log(ucapkanSalam("sore"))

// function People(name, age, hobby) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
// }

// People.prototype.introMySelf = function() {
//     setTimeout(() => {
//         console.log(`Hello saya ${this.name}, saya berumur ${this.age}`)
//         console.log(`hobi saya adalah ${this.hobby}`)
//     },300)
// }

// const programmer = new People("Indra",12,['tidur','makan','olah raga'])
// programmer.introMySelf();

function sayHello(name="Strangers",greet="Hello") {
    console.log(`${greet}, ${name}`)
}

sayHello()
sayHello("indra","Selamat Malam")