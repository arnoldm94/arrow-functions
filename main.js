// Convierte la siguiente función en una función flecha:
/* function greetings() {
  return "Hola";
} */
const greetings = () => {return "Hola"}
  
console.log(greetings());


//Convierte la siguiente función en una función flecha en línea:
/* function division(a,b) {
  return a / b;
} */
const division = (a,b) => {return a/b}
  
console.log(division(2,2));


/* Convierte la siguiente función en una función flecha:
function myName(name) {
  return `Mi nombre es ${name}`;
} */
const myName =  (name) => { return `Mi nombre es ${name}`}
console.log(myName("arnold"));

/* 
Convierte las siguientes funciones en funciones flecha:
function test2() {
  console.log("Función test 2 ejecutada.");
}
function test1(callback) {
  callback();
}	 */
const test2 = () => {console.log("Funcion test 2 ejecutada.");}
const test1 = (callback)=>{callback();}

test1(test2)


/* 2. Foreach
Utiliza la siguiente array para resolver los próximos ejercicios: */ 
      
let people = [
 { name: 'Jamiro', age: 45 },
 { name: 'Juan', age: 35 },
 { name: 'Paco', age: 34 },
 { name: 'Pepe', age: 14 },
 { name: 'Pilar', age: 24 },
 { name: 'Laura', age: 24 },
 { name: 'Jenny', edad: 10 },
]

//Crea un array con la gente mayor de 25 años y muéstralo por consola.
let arraymayor25 = []
people.forEach((edad)=>{
    if (edad.age > 25 )
        {arraymayor25.push (edad)}
})
console.log(arraymayor25);

//Crea un array con la gente que empieza por J. 
let arrayporj = []
people.forEach((jota)=>{
    if (jota.name[0] === "J")
        {arrayporj.push (jota)}
})
console.log(arrayporj);



//3. Map
//Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.
const arraymayor25map = []
 people.map((edadm)=>{
    if (edadm.age > 25){
       arraymayor25map.push (edadm)
    }
     })
console.log(arraymayor25map);


//Crea un array con la gente que empieza por J. 
let arrayporjmap = []
people.map((jotam)=>{
    if (jotam.name[0] === "J"){
        arrayporjmap.push (jotam)}
})
console.log(arrayporjmap);


//Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
const numbers = [ 4, 5, 6, 7, 8, 9, 10]


   const elevarasimismo = numbers.map((num)=>{
    return (Math.pow(num,num))
})
console.log(elevarasimismo);
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]




//4. Filter
//Crea un segundo array que devuelva los impares
 const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = numbers4.filter((n)=>((n%2) !==0))
console.log(numbers2);


//Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
 const foodList = [
        { name: 'Tempeh', isVeggie: true },
        { name: 'Cheesbacon burguer', isVeggie: false },
        { name: 'Tofu burguer', isVeggie: true },
        { name: 'Entrecot', isVeggie: false }
      ]

      const veganos = foodList.filter(plato=>plato.isVeggie )

      veganos.forEach((a)=>{
        console.log('Que rico ' + a.name + ' me voy a comer!')})
       //[
       //   'Que rico Tempeh me voy a comer!',
       //   'Que rica Tofu burguer me voy a comer!'
      //   ]




//5. Reduce
//Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numbersRed = [39, 2, 4, 25, 62]
const nredu = numbersRed.reduce((a,b) => {
    return a*b} , 1)
console.log(nredu);
// Salida--> 483600





/* Extras
Map
Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
*/
const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
]

const frases = staff.map(frase => {
    return frase.name + " es " + frase.role + " y le gusta " + frase.hobbies[0] + " y " + frase.hobbies[1]
})

console.log(frases);
// Resultado esperado

   // [
    //  'Pepe es TheBoss y le gusta leer y ver pelis',
    //  'Ana es becaria y le gusta nadar y bailar',
    //  'Luis es programador y le gusta dormir y comprar',
    //  'Ana es becaria y le gusta nadar y bailar',
    //  'Carlos es secretario y le gusta fútbol y queso'
    //] 







//Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:
const foodList2 = ["Pizza", "Ramen", "Paella", "Entrecot"];
const frasespaises = [
'Como soy de Italia, amo comer ',
  'Como soy de Japón, amo comer ',
 'Como soy de Valencia, amo comer ',
'Aunque no como carne, el ',
' es sabroso'
]
let frasesfood =[]

for (i = 0; i < (foodList2.length-1); i++){
    frasesfood.push(frasespaises[i] + foodList2[i])
}
frasesfood.push(frasespaises[3] + foodList2[3] + frasespaises[4])
console.log(frasesfood);
//Resultado esperado
// [
  //  'Como soy de Italia, amo comer Pizza',
  // 'Como soy de Japón, amo comer Ramen',
  //  'Como soy de Valencia, amo comer Paella',
  //  'Aunque no como carne, el Entrecot es sabroso'
  // ]






/* 


 a
Filter
Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
const inventory = [
        {
          name: 'Mobile phone',
          price: 199
        },
        {
          name: 'TV Samsung',
          price: 459
        },
        {
          name: 'Viaje a cancún',
          price: 600
        },
        {
          name: 'Mascarilla',
          price: 1
        }
      ];
     
       // [
        //  'TV Samsung,',
        //  'Viaje a Cancún'
       // ]
      
Reduce
Concatena todos los elementos del array con reduce para que devuelva una sola frase
const sentenceElements = [
    'Me',
    'llamo',
   // Tu nombre aquí! 
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
    ];
   
// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
 */