// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
   // Escribe tu solución aquí
  const newArray = strangeArray.filter((element)=> typeof(element)=== "string"); //crea una lista solo con elementos de tipo string
  showList(newArray.sort((a,b)=>{ //muestra en pantalla la nueva lista ordenada alfabeticamente 
    if(a.toLocaleLowerCase()>b.toLocaleLowerCase()){ //compara los elementos de la lista sin importar las mayusculas
      return 1;
    } else if (a.toLocaleLowerCase()<b.toLocaleLowerCase()){
      return -1
    } else {
      return 0
    }
  }));
 
  // Sugerencia de cómo mostrar el array => showList(strangeArray);
});
