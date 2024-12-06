// Ejemplo de Recipes
let breakfasts = [
    /* new Recipe("Ensalada César", "Desayuno", "Mezcla de lechuga con pollo y aderezo", [
         { name: "lechuga", portion: 200, unit: "g" },
         { name: "pollo", portion: 150, unit: "g" },
         { name: "aderezo", portion: 50, unit: "ml" }
     ]),
     new Recipe("Pasta Alfredo", "Cena", "Pasta con salsa alfredo y pollo", [
         { name: "pasta", portion: 300, unit: "g" },
         { name: "salsa_alfredo", portion: 200, unit: "ml" },
         { name: "pollo", portion: 100, unit: "g" }
     ]),*/
 
     // Añadir más Recipes según sea necesario
     new Recipe("Avena con manzana", "Desayuno", "Juntar la avena y la leche, meter al microondas 1.30 y al salir ponerle la manzana y la canela", [
         { name: "Avena cruda", portion: 1/2, unit: "taza" },
         { name: "Leche entera", portion: 1/2, unit: "taza" },
         { name: "Manzana con piel", portion: 1/2, unit: "pieza" }
     ]),
     new Recipe("Jugo verde(Kiwi y platano)", "Desayuno", "Licuar todo", [
        { name: "Espinaca, cruda", portion: 2, unit: "taza" },
        { name: "Platano tabasco", portion: 1, unit: "pieza" },
        { name: "Kiwi", portion: 1, unit: "pieza" },
        { name: "Linaza", portion: 2, unit: "cucharada" }
    ]),
    new Recipe("Jugo verde(Mango y platano)", "Desayuno", "Licuar todo", [
        { name: "Espinaca, cruda", portion: 2, unit: "taza" },
        { name: "Platano tabasco", portion: 1, unit: "pieza" },
        { name: "Mango ataulfo", portion: 1/2, unit: "pieza" },
        { name: "Linaza", portion: 2, unit: "cucharadas" }
    ]),
    new Recipe("Jugo verde(Fresa y blueberry)", "Desayuno", "Licuar todo", [
        { name: "Espinaca, cruda", portion: 2, unit: "taza" },
        { name: "Fresas", portion: 10, unit: "piezas" },
        { name: "Blueberries", portion: 85, unit: "gramos" },
        { name: "Linaza", portion: 2, unit: "cucharada" }
    ]),
    new Recipe("Huevo y fruta", "Desayuno", "Freir el huevo y servir la fruta", [
        { name: "Huevo frito", portion: 1, unit: "pieza" },
        { name: "Papaya", portion: 1, unit: "taza" }
    ]),
    new Recipe("Pudding de chia con mango", "Desayuno", "Juntar la avena, la chia. con la leche y vainilla, revolver todo para que no queden grumos, dejar en la noche reposar, licuar un mango y colocarlo con la mezcla anterior", [
        { name: "Chia", portion: 2, unit: "cucharadas" },
        { name: "Avena cruda", portion: 1/3, unit: "taza" },
        { name: "Mango ataulfo", portion: 1/2, unit: "pieza" },
        { name: "Leche entera", portion: 1/2, unit: "taza" }
    ]),
    new Recipe("Omelette con zanahoria y calabaza", "Desayuno", "Rallar la zanahoria y la calabza, juntar el huevo con la calabaza y zanahoria, agregar pimienta negra y paprika, revolver y cocinar en el sarten, agregar queso", [
        { name: "Huevo frito", portion: 1, unit: "pieza" },
        { name: "Calabacita italiana", portion: 40, unit: "gramos" },
        { name: "Queso Oaxaca", portion: 30, unit: "gramos" },
        { name: "Zanahoria", portion: 1/4, unit: "taza" }
    ]),
    new Recipe("Crepas de avena (fresa con philadelphia)", "Desayuno", "Licuar la avena hasta que se haga un polvo fino y se vacia en un recipiente. En la licuadora agregar  un 1/8 de agua,la leche, los huevos, la vainilla y la avena y se licua por 10 segundos solo para integrar los ingedientes, dejar en el refrigerador por una hora. Despues para cada crepa es aprox 1/4 o 1/3 de taza de la mezcla y la mezcla hay que revolverla porque la avena tiende irse al fondo. Se calienta el sarten a fugo medio y luego se baja a flama baja, se vierte un poco de aceite y se coloca la mezcla, se deja cocinar 45 segundos a un minuto del primer lado, se le da la vuelta y cocinar por 30 segundos. Rellenar la crepa", [
        { name: "Avena cruda", portion: 1/2, unit: "taza" },
        { name: "Huevo entero fresco", portion: 1.5, unit: "pieza" },
        { name: "Leche entera", portion: 1/2, unit: "taza" },
        { name: "Aceite de oliva", portion: 1, unit: "cucharadita" },
        { name: "Queso philadelphia", portion: 2, unit: "cucharada" },
        { name: "Fresas", portion: 10, unit: "piezas" }
    ]),
    new Recipe("Crepas de avena (zarzamora con philadelphia)", "Desayuno", "Licuar la avena hasta que se haga un polvo fino y se vacia en un recipiente. En la licuadora agregar  un 1/8 de agua,la leche, los huevos, la vainilla y la avena y se licua por 10 segundos solo para integrar los ingedientes, dejar en el refrigerador por una hora. Despues para cada crepa es aprox 1/4 o 1/3 de taza de la mezcla y la mezcla hay que revolverla porque la avena tiende irse al fondo. Se calienta el sarten a fugo medio y luego se baja a flama baja, se vierte un poco de aceite y se coloca la mezcla, se deja cocinar 45 segundos a un minuto del primer lado, se le da la vuelta y cocinar por 30 segundos. Rellenar la crepa", [
        { name: "Avena cruda", portion: 1/2, unit: "taza" },
        { name: "Huevo entero fresco", portion: 1.5, unit: "pieza" },
        { name: "Leche entera", portion: 1/2, unit: "taza" },
        { name: "Aceite de oliva", portion: 1, unit: "cucharadita" },
        { name: "Queso philadelphia", portion: 2, unit: "cucharada" },
        { name: "Zarzamora", portion: 20, unit: "gramos" }
    ]),
    new Recipe("Crepas de avena (espinaca y champiñones con queso oaxaca)", "Desayuno", "Licuar la avena hasta que se haga un polvo fino y se vacia en un recipiente. En la licuadora agregar  un 1/8 de agua,la leche, los huevos, la vainilla y la avena y se licua por 10 segundos solo para integrar los ingedientes, dejar en el refrigerador por una hora. Despues para cada crepa es aprox 1/4 o 1/3 de taza de la mezcla y la mezcla hay que revolverla porque la avena tiende irse al fondo. Se calienta el sarten a fugo medio y luego se baja a flama baja, se vierte un poco de aceite y se coloca la mezcla, se deja cocinar 45 segundos a un minuto del primer lado, se le da la vuelta y cocinar por 30 segundos. Rellenar la crepa", [
        { name: "Avena cruda", portion: 1/2, unit: "taza" },
        { name: "Huevo entero fresco", portion: 1.5, unit: "pieza" },
        { name: "Leche entera", portion: 1/2, unit: "taza" },
        { name: "Aceite de oliva", portion: 1, unit: "cucharadita" },
        { name: "Queso philadelphia", portion: 2, unit: "cucharada" },
        { name: "Espinaca, cruda", portion: 1, unit: "taza" },
        { name: "Champiñón fresco", portion: 1/4, unit: "taza" },
        { name: "Queso oaxaca", portion: 30, unit: "gramos" },
    ]),


/*  new Recipe("Pasta", "Cena", "", [
        { name: "pasta", portion: 300, unit: "g" },
        { name: "salsa_", portion: 200, unit: "ml" },
        { name: "pollo", portion: 100, unit: "g" }
    ]),
    */
     
 ];