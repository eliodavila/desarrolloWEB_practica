

console.log("HOLA MUNDO");

let nombre="ELIO";
let edad = 35;
let calcular=2024 - edad;

console.log(nombre + calcular);

let name = "Aldhemar";
let string = "JavaScript";
let firstLetter = string.charAt(0);
let aleatorio = Math.floor(Math.random()*10);

let radioCirculo = 100
let areaCirculo = Math.PI*Math.pow(radioCirculo,2);
console.log(areaCirculo);

let number = 5
number>0
? console.log(`${number} es positivo`)
: console.log(`${number} es negativo`)

/*
alert("Hola")
prompt(`Introduce un numero`,`dame un numero`);
prompt(`Escribe tus datos`,`Nombre Completo`);
*/
let now = new Date() /*Está instanciando a now de tipo Date*/
console.log(now)
let numeroAnalizar="sdsd";
if(numeroAnalizar%2==0){
    console.log(`${numeroAnalizar} es par`)
}else if(numeroAnalizar%2==1){
    console.log(`${numeroAnalizar} es impar`)
}else{
    console.log(`${numeroAnalizar} no es número`)
}
let frio = true
frio
? console.log(`abrigo`)
: console.log(`polera`)

let frutas = [
    'limon',
    'naranja',
    'manga',
    'guineo'
]
let js = `JavaScrip%es%increible`
let separado = js.split('%')
console.log(separado)
let pais = [
    `Bolivia`,
    `Argentina`,
    `Peru`,
    `Chile`,
    `Colombia`
]
let newpais=[]
for (let i = 0; i < 5; i++) {
    newpais.push(pais[i].toUpperCase())
  }
  console.log(newpais)

  let i=0
  do{
    console.log(1)
    i++
  }while(i<=8)

    let paises = [
        `Bolivia`,
        `Argentina`,
        `Peru`,
        `Chile`,
        `Colombia`
    ]
    let newpaises=[]
    for (let pais of paises) {
        console.log(pais.toUpperCase())
      }

      function multiplicacion(numero1,numero2){
        let num1 = numero1
        let num2 = numero2
        let resultado = num1*num2
        return resultado
      }
      console.log(multiplicacion(3,45))

      const mayuscula = arr =>{
        const newArr = []
      }