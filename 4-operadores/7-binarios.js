// in
something in somethingItems

// Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;               // retorna true
3 in arvores;               // retorna true
6 in arvores;               // retorna false
"cedro" in arvores;         // retorna false (você deve especificar o número do índice, não o valor naquele índice)
"length" in arvores;        //retorna true (length é uma propriedade de Array)

// Objetos predefinidos
"PI" in Math;           // retorna true
var myString = new String("coral");
"length" in myString;   // retorna true

// Objetos personalizados
var myCar = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in myCar;       // retorna true
"modelo" in myCar:      // retorna true

// instanceof
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date) {
    // code here
}