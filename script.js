//Asignación pizzas referidas
function pizzaOven(tipoCorteza, tipoSalsa, quesos, toppings) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);
var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);

//Asignación pizzas aleatorias
var tipoCorteza = [
    "estilo Chicago",
    "lanzada a mano",
    "masa tradicional",
    "delgada",
    "keto",
    "gluten-free"
]
var tipoSalsa = [
    "tradicional",
    "marinara",
    "bbq",
    "tomate",
    "pizza",
    "pesto",
    "ketchup"
]
var quesos = [
    "mozzarella",
    "parmesano",
    "feta",
    "cheddar",
    "azul",
    "gauda",
    "queso de cabra"
]
var toppings = [
    "pepperoni",
    "salchicha",
    "champiñones",
    "aceitunas",
    "cebolla",
    "tomates cherry",
    "salsa de ajo",
    "mostaza dulce"
]

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza1() {
    var pizza = {}
    pizza.tipoCorteza = randomPick(tipoCorteza);
    pizza.tipoSalsa = randomPick(tipoSalsa);
    pizza.quesos = randomPick(quesos);
    pizza.toppings = randomPick(toppings);
    return pizza;
}
var p1 = randomPizza1();
console.log(p1);