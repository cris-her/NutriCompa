// Ejemplo de recetas
let recetas = [
   /* new Receta("Ensalada César", "Desayuno", "Mezcla de lechuga con pollo y aderezo", [
        { nombre: "lechuga", cantidad: 200, unidad: "g" },
        { nombre: "pollo", cantidad: 150, unidad: "g" },
        { nombre: "aderezo", cantidad: 50, unidad: "ml" }
    ]),
    new Receta("Pasta Alfredo", "Cena", "Pasta con salsa alfredo y pollo", [
        { nombre: "pasta", cantidad: 300, unidad: "g" },
        { nombre: "salsa_alfredo", cantidad: 200, unidad: "ml" },
        { nombre: "pollo", cantidad: 100, unidad: "g" }
    ]),*/

    // Añadir más recetas según sea necesario
    new Receta("Avena con manzana", "Desayuno", "Juntar la avena y la leche, meter al microondas 1.30 y al salir ponerle la manzana y la canela", [
        { nombre: "Avena", cantidad: 1/2, unidad: "taza" },
        { nombre: "Leche", cantidad: 1/2, unidad: "taza" },
        { nombre: "Manzana", cantidad: 1/2, unidad: "unidad" }
    ]),
    new Receta("Salmon con espárragos", "Comida", "Aceitar las bandejas, poner todos los ingredientes, precalentar el horno a 400 F durante 20 minutos y despues meter el salmon 13 minutos a la misma temperatura ", [
        { nombre: "Salmon", cantidad: 125, unidad: "g" },
        { nombre: "Esparragos", cantidad: 1/4, unidad: "manojo" },
        { nombre: "Papa", cantidad: 1.25, unidad: "unidad" },
        { nombre: "Aceite de oliva", cantidad: 1/2, unidad: "cucharada" }
    ]),

    new Receta("Quinoa con verduras", "Comida", "Poner a hervir dos tazas de agua y despues dejar la quinoa en 500 durante 15 minutos tapada, despues quitar del fuego y dejarla tapada por 5 minutos, cocer los hongos, cocer el brocoli 8 minutos, el tofu se debe de condimentar con ajo, cebolla y sal, despues cortar en rectangulos y poner en el sarten 10 minutos en 200 de un lado y 10 del otro lado ", [
        { nombre: "Quinoa", cantidad: 1/4, unidad: "taza" },
        { nombre: "Hongos", cantidad: 56.25, unidad: "g" },
        { nombre: "Tofu", cantidad: 87.25, unidad: "g" },
        { nombre: "Brocoli", cantidad: 1/4, unidad: "unidad" }
    ]),
    new Receta("Mix de granos ", "Comida", "Poner a hervir 2 tazas de agua, poner la taza de granos y poner en 800 durante 4 minutos sin tapar, después en 500 durante 6 minutos sin tapar, después quitar del fuego y esperar 10 minutos tapada. cocinar por 8 minutos en 500 el brocoli, juntar ya todos los ingredientes", [
        { nombre: "Mix de granos", cantidad: 1/4, unidad: "taza" },
        { nombre: "Brocoli", cantidad: 1/4, unidad: "unidad" },
        { nombre: "Semilla de calabaza", cantidad: 2, unidad: "cucharada" },
        { nombre: "Queso Panela", cantidad: 50, unidad: "g" }
    ]),
    new Receta("Ensalada con lentejas", "Cena", "Rallar la zanahoria, cortar en cubos el pepino y revolver todos los ingredientes", [
        { nombre: "Hojas verdes", cantidad: 2, unidad: "taza" },
        { nombre: "Lentejas", cantidad: 1/8, unidad: "taza" },
        { nombre: "Zanahoria", cantidad: 1/4, unidad: "unidad" },
        { nombre: "Aguacate", cantidad: 1/8, unidad: "unidad" },
        { nombre: "Aceitunas", cantidad: 7, unidad: "unidad" },
        { nombre: "Limon", cantidad: 1/2, unidad: "unidad" },
        { nombre: "Semilla de calabaza", cantidad: 2, unidad: "cucharada" },
        { nombre: "Pepino", cantidad: 1/4, unidad: "unidad" }
    ]),
    new Receta("Crema de zanahoria ", "Cena", "Poner a hervir dos tazas de agua, colocar las zanahorias en cubos durante 15 minutos, verter las zanahorias y el coco con una taza de agua ", [
        { nombre: "Zanahoria", cantidad: 1/8, unidad: "g" },
        { nombre: "Mantequilla de coco", cantidad: 1/16, unidad: "taza" }
    ]),
    new Receta("Sushi de surimi", "Cena", "", [
        { nombre: "Arroz", cantidad: 1/8, unidad: "taza" },
        { nombre: "Surimi", cantidad: 1/2, unidad: "unidad" },
        { nombre: "Aguacate", cantidad: 1/8, unidad: "unidad" },
        { nombre: "Alga", cantidad: 1, unidad: "unidad" }
    ]),
    new Receta("Pastel de fresa", "Snack", "", [
        { nombre: "pasta", cantidad: 300, unidad: "g" },
        { nombre: "salsa_", cantidad: 200, unidad: "ml" },
        { nombre: "pollo", cantidad: 100, unidad: "g" }
    ]),
    /////////////////////////////////////////////////////////////////////
    new Receta("Pasta", "Cena", "", [
        { nombre: "pasta", cantidad: 300, unidad: "g" },
        { nombre: "salsa_", cantidad: 200, unidad: "ml" },
        { nombre: "pollo", cantidad: 100, unidad: "g" }
    ]),
    new Receta("Pasta", "Cena", "", [
        { nombre: "pasta", cantidad: 300, unidad: "g" },
        { nombre: "salsa_", cantidad: 200, unidad: "ml" },
        { nombre: "pollo", cantidad: 100, unidad: "g" }
    ]),
    new Receta("Pasta", "Cena", "", [
        { nombre: "pasta", cantidad: 300, unidad: "g" },
        { nombre: "salsa_", cantidad: 200, unidad: "ml" },
        { nombre: "pollo", cantidad: 100, unidad: "g" }
    ]),
    new Receta("Pasta", "Cena", "", [
        { nombre: "pasta", cantidad: 300, unidad: "g" },
        { nombre: "salsa_", cantidad: 200, unidad: "ml" },
        { nombre: "pollo", cantidad: 100, unidad: "g" }
    ]),
    new Receta("Pasta", "Cena", "", [
        { nombre: "pasta", cantidad: 300, unidad: "g" },
        { nombre: "salsa_", cantidad: 200, unidad: "ml" },
        { nombre: "pollo", cantidad: 100, unidad: "g" }
    ]),
    new Receta("Pasta", "Cena", "", [
        { nombre: "pasta", cantidad: 300, unidad: "g" },
        { nombre: "salsa_", cantidad: 200, unidad: "ml" },
        { nombre: "pollo", cantidad: 100, unidad: "g" }
    ]),
    
];