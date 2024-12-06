let lunches = [
    new Recipe("Salmon con espárragos", "Comida", "Aceitar las bandejas, poner todos los ingredientes, precalentar el horno a 400 F durante 20 minutos y despues meter el salmon 13 minutos a la misma temperatura ", [
        { name: "Salmon", portion: 125, unit: "gramos" },
        { name: "Esparragos cocidos", portion: 8, unit: "piezas" },
        { name: "Papa al horno, con piel", portion: 1/4, unit: "taza" },
        { name: "Aceite de oliva", portion: 1, unit: "cucharadita" }
    ]),
    new Recipe("Quinoa con verduras", "Comida", "Poner a hervir dos tazas de agua y despues dejar la quinoa en 500 durante 15 minutos tapada, despues quitar del fuego y dejarla tapada por 5 minutos, cocer los hongos, cocer el brocoli 8 minutos, el tofu se debe de condimentar con ajo, cebolla y sal, despues cortar en rectangulos y poner en el sarten 10 minutos en 200 de un lado y 10 del otro lado ", [
        { name: "Quinoa", portion: 1/4, unit: "taza" },
        { name: "Champiñón fresco", portion: 1/4, unit: "taza" },
        { name: "Tofu", portion: 87.25, unit: "g" },
        { name: "Brocoli cocido", portion: 1/2, unit: "taza" }
    ]),
    new Recipe("Mix de granos ", "Comida", "Poner a hervir 2 tazas de agua, poner la taza de granos y poner en 800 durante 4 minutos sin tapar, después en 500 durante 6 minutos sin tapar, después quitar del fuego y esperar 10 minutos tapada. cocinar por 8 minutos en 500 el brocoli, juntar ya todos los ingredientes", [
        { name: "Mix de granos", portion: 1/4, unit: "taza" },
        { name: "Brocoli cocido", portion: 1/2, unit: "taza" },
        { name: "Semilla de calabaza", portion: 2, unit: "cucharadas" },
        { name: "Queso panela", portion: 50, unit: "gramos" }
    ]),
    new Recipe("Sopa de fideo chino", "Comida", "Hervir dos litros de agua, poner 2 minutos la cebolla en 800, agregar la zanahoria 3 minutos junto con la salsa de soya, agregar el brocoli 3 minutos, agregar la calabaza 3 minutos, agregar la pasta y dejar en 500 durante 5 minutos", [
        { name: "Zanahoria", portion: 1/4, unit: "taza" },
        { name: "Brocoli", portion: 1/2, unit: "taza" },
        { name: "Salsa de soya", portion: 1, unit: "cucharadita" },
        { name: "Fideo chino", portion: 42.5, unit: "gramos" },
        { name: "Calabacita italiana", portion: 40, unit: "gramos" }
    ]),

    new Recipe("Pollo con chipotle en tostadas", "Comida", "Agarrar la pechuga y sazonarla (sal, pimienta, ajo en polvo) y dejar reposar durante 20 minutos, cocinarlo con la piña y a las tostadas ponerles aguacate y lechuga, servir el pollo y acompañarlo con cilantro", [
        { name: "Pollo, pechuga asada", portion: 125, unit: "gramos" },
        { name: "Lechuga", portion: 1/2, unit: "taza" },
        { name: "Chile chipotle", portion: 15, unit: "gramos" },
        { name: "Aguacate", portion: 1/2, unit: "pieza" },
        { name: "Tostada", portion: 2, unit: "pieza" },
        { name: "Piña", portion: 1/8, unit: "taza" },
        { name: "Aceite de oliva", portion: 1, unit: "cucharadita" }
    ]),
    new Recipe("Pollo con champiñones", "Comida", "Poner a freir las pechugas y despues retirar del fuego, poner a cocer los champiñones y agregar ajo y dejar hast que se suavicen, agregar la harina, la pimienta y la albaca. revolver y agregar  una taza de agua y la crema, dejar que se caliente y agregar el queso parmesano y las pechugas ", [
        { name: "Pollo, pechuga asada", portion: 125, unit: "gramos" },
        { name: "Champiñón fresco", portion: 1/4, unit: "taza" },
        { name: "Harina de trigo", portion: 5, unit: "gramos" },
        { name: "Queso parmesano", portion: 10, unit: "gramos" },
        { name: "Media crema", portion: 4, unit: "cucharadas" }
    ]),

    new Recipe("Arroz rojo", "Comida", "Prender la arrocera y poner en la funcion Saute the simmer, se le pone un chorrito de aceite y se coloca el arroz a que se dore un poco, solo que cambie leve el color (5 minutos aprox). Poner en la licuadora ajo en polvo, cebolla en polvo, un poco de cilantro y 3 jitomates, con media taza de agua, licuar y el liquido verterlo en la olla y poner agua un poco mas arriba de la linea que dice 2. despues poner a funcionar la arrocera en arroz blanco", [
        { name: "Arroz blanco", portion: 1/4, unit: "taza" },
        { name: "Jitomate bola", portion: 100, unit: "gramos" },
    ]),
    new Recipe("Pollo, sopa, verduras", "Comida", "Cocer las fajitas de pollo, cocer las verduras y seguir las instrucciones de la sopa", [
        { name: "Pasta", portion: 100, unit: "g" },
        { name: "Brocoli cocido", portion: 1/2, unit: "taza" },
        { name: "Pollo, pechuga asada", portion: 125, unit: "gramos" },
    ]),

    new Recipe("Caldo de pollo", "Comida", "Poner en la cacerola gris las piernas de pollo, despues cubrirlas con agua, poner a hervir de la siguiente manera: Primero 10 minutos en 1500, 10 minutos en 1000, 20 minutos en 500, despues tirar el liquido y quitarle la piel a las piernas. Se vuelven a poner las piernas en la olla junto con los vegetales cortados y poner en 800 durante 20 minutos", [
        { name: "Piernas de pollo", portion: 1, unit: "kilo" },
        { name: "Calabaza", portion: 2, unit: "piezas" },
        { name: "Brocoli", portion: 1/2, unit: "bolsa" },
        { name: "Zanahoria", portion: 2, unit: "pieza" }
    ]),

    new Recipe("Chilaquiles verdes con bistec", "Comida", "Se puede cocinar en el sarten negro la carne y a la vez se puede poner en la cacerola negra los tomates y cubrirlos con agua, cocerlos aprox 10 minutos en 1000 si aun estan verdes oscuros ponerlo otros 5 minutos en 500. Despues poner los tomates en la licuadora y una vez licuados regresar la salsa a la cacerola negra, agregarle el cilantro, cebolla y ajo ponerla a hervir en 500 una vez hervida dejarla 5 minutos mas pero revolver la salsa. Por ultimo agregar un puñado de totopos en la salsa y despues retirarlos, agregar la carne, crema y queso ", [
        { name: "Tomate", portion: 1, unit: "kilo" },
        { name: "Totopos", portion: 1, unit: "bolsa" },
        { name: "Queso ranchero", portion: 1, unit: "bolsa" },
        { name: "Carne", portion: 1/2, unit: "kilo" },
        { name: "Crema", portion: 1/4, unit: "kilo" }
    ]),

    new Recipe("Ramen", "Comida", "Poner la panceta de cerdo en la cacerola gris, cubrirla con agua ponerle ajo en polvo, un cuarto de taza de salsa de soya cebolla y jengibre. Poner a hervir la pacenta de la siguiente manera: 1500 10 minutos, en 1000 otros 1000 minutos, en 800 otros 10 minutos y dejar el 500 unos 50 minutos, cada vez que se cambia la temperatura se deberia de dar vuelta a la panceta para que se cosa por todos lados. Mientras se cose la panceta en la cacerola negra se puede colocar agua un poco mas abajo que los circulos y ponerla a hervir, una vez hervida poner la pasta ramen por 9 minutos (no se debe de tapar porque se chorrea) y se debe de mover ocasionalmente. una vez terminada la pasta se debe de colocar en un topper y taparla. ahora vertir los vegetales ponerle aprox dos litros y medio de agua y un poco menos de un cuarto de taza de salsa de soya, ponerle cebolla en polvo y cocer a fuego medio por 20 minutos ", [
        { name: "Pasta Ramen", portion: 200, unit: "g" },
        { name: "Panceta de cerdo", portion: 1/2, unit: "kilo" },
        { name: "Calabaza", portion: 2, unit: "pieza" },
        { name: "Zanahoria", portion: 2, unit: "pieza" },
        { name: "Brocoli", portion: 1/2, unit: "bolsa" }
    ]),

/*  new Recipe("Pasta", "Comida", "", [
        { name: "pasta", portion: 300, unit: "g" },
        { name: "salsa_", portion: 200, unit: "ml" },
        { name: "pollo", portion: 100, unit: "g" }
    ]),
    */
];