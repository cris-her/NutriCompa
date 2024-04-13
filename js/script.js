// // 
var currentUser;
var allAditionalIngredients;
var mergedShoppingLists;
var mainUrl;
var complementUrl;
var complement;
var user;
var currentCell;

const searchInput = document.getElementById('recipe-search');
const categorySelect = document.getElementById('recipe-category');
const recipeList = document.getElementById('recipe-list');

// Variable para almacenar si algún campo ha cambiado
//let camposCambiados = false;

// Obtener todos los campos del formulario
const camposFormulario = document.querySelectorAll("#calculoRequerimiento input, #calculoRequerimiento select");

// Agregar un controlador de eventos change a cada campo
camposFormulario.forEach(campo => {
    campo.addEventListener("change", () => {
        //camposCambiados = true;
        document.getElementById('caloriasRequeridas').click();//submit
        //cleanResult()
        document.getElementById('saveBtn').disabled = false;
        document.getElementById('copyBtn').disabled = true;
        document.getElementById('saveBtn').style.background = '#FF9CCA';
        document.getElementById('copyBtn').style.background = 'lightgray';

        generateInstructionsAndIngredients();//!!!!!!
    });
});

// Agregar event listener para el campo de búsqueda
searchInput.addEventListener('input', function() {
    const searchText = searchInput.value.toLowerCase(); // Convertir el texto a minúsculas
    const category = categorySelect.value; // Obtener el valor de la categoría seleccionada
    
    // Filtrar las recetas según el texto de búsqueda y la categoría seleccionada
    const filteredRecipes = recipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(searchText); // Verificar si el nombre de la receta coincide con el texto de búsqueda
        const categoryMatch = category === 'All' || recipe.category === category; // Verificar si la categoría coincide con la categoría seleccionada o si se seleccionó "Todas las recetas"
        return nameMatch && categoryMatch; // Devolver true si tanto el nombre como la categoría coinciden
    });

    // Mostrar las recetas filtradas en la lista
    displayRecipes(filteredRecipes);
});

// Agregar event listener para el selector de categoría
categorySelect.addEventListener('change', function() {
    const searchText = searchInput.value.toLowerCase(); // Obtener el texto de búsqueda actual
    const category = categorySelect.value; // Obtener el valor de la categoría seleccionada
    
    // Filtrar las recetas según el texto de búsqueda y la categoría seleccionada
    const filteredRecipes = recipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(searchText); // Verificar si el nombre de la receta coincide con el texto de búsqueda
        const categoryMatch = category === 'All' || recipe.category === category; // Verificar si la categoría coincide con la categoría seleccionada o si se seleccionó "Todas las recetas"
        return nameMatch && categoryMatch; // Devolver true si tanto el nombre como la categoría coinciden
    });

    // Mostrar las recetas filtradas en la lista
    displayRecipes(filteredRecipes);
});

// Cerrar la ventana modal al hacer clic fuera de ella
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// *** Activity indicator ***
 
// Función para mostrar el spinner
function showSpinner() {
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'inline-block';
}

// Función para ocultar el spinner
function hideSpinner() {
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'none';
}



function cleanResult(){
    document.getElementById("caloriasRequeridas").textContent = "Calcular";
}

function updateTotals() {
    // Obtener la tabla y las filas de la tabla
    let table = document.getElementById("planificacion").getElementsByTagName("tbody")[0];
    let rows = table.getElementsByTagName("tr");

    // Array para los días de la semana
    let daysOfWeek = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];

    // Iterar sobre cada columna (día)
    for (let i = 1; i < rows[0].cells.length; i++) { // Empezamos desde 1 para omitir la primera celda (nombre de la comida)
        // Variables para almacenar los totales de calorías, carbohidratos, proteínas y grasas
        let totalCalories = 0;
        let totalCarbohydrates = 0;
        let totalProteins = 0;
        let totalFats = 0;

        // Iterar sobre cada fila (comida)
        for (let j = 0; j < rows.length - 1; j++) {
            // Obtener el nombre de la receta del ID de la celda
            let recipeName = rows[j].cells[i].id;

            // Verificar si la celda contiene una receta
            if (recipeName !== "") {
                //alert(recipeName)

                // Buscar la receta en la lista de recetas
                let recipe = recipes.find(recipe => recipe.name === recipeName);

                // Si se encuentra la receta
                if (recipe) {
                    //alert('recipe')
                    // Iterar sobre los ingredientes de la receta
                    recipe.ingredients.forEach(ingredient => {
                        //alert(ingredient.name)
                        // Buscar el alimento correspondiente al ingrediente
                        let food = foods.find(food => food.name === ingredient.name);
                        if (food) {
                            //alert('food')
                            // Buscar el grupo al que pertenece el alimento
                            //let group = groups.find(group => group.name === food.group);
                            //if (group) {
                                //alert('group')
                                // Calcular el total de calorías, carbohidratos, proteínas y grasas
                                
                                // let portion = parseFloat(ingredient.portion);
                                // totalCalories += (portion * parseFloat(group.energy));
                                // totalCarbohydrates += (portion * parseFloat(group.carbohydrates));
                                // totalProteins += (portion * parseFloat(group.proteins));
                                // totalFats += (portion * parseFloat(group.fat));

                                // let portion = parseFloat(ingredient.portion);

                                // // Calcular el factor de ajuste para las calorías y los macronutrientes
                                // let adjustFactor = portion / parseFloat(food.portion);

                                // // Ajustar las calorías y los macronutrientes según el factor de ajuste
                                // totalCalories += (adjustFactor * parseFloat(group.energy));
                                // totalCarbohydrates += (adjustFactor * parseFloat(group.carbohydrates));
                                // totalProteins += (adjustFactor * parseFloat(group.proteins));
                                // totalFats += (adjustFactor * parseFloat(group.fat));

                                // Calcular el factor de ajuste
                                // Suponiendo que food.energy representa el total de calorías y food.carbohydrates es el porcentaje de calorías de carbohidratos
                                
                                let carbohydratesPercentage = food.carbohydrates; // Porcentaje de calorías provenientes de carbohidratos
                                let fatsPercentage = food.fats; // Porcentaje de calorías provenientes de grasas
                                let proteinsPercentage = food.proteins; // Porcentaje de calorías provenientes de proteínas

                                let caloriesFromCarbohydrates = (carbohydratesPercentage / 100) * food.energy; // Calorías totales provenientes de carbohidratos
                                let carbohydratesInGrams = caloriesFromCarbohydrates / 4; // Convertir calorías a gramos de carbohidratos (1g de carbohidratos = 4 kcal)

                                let caloriesFromFats = (fatsPercentage / 100) * food.energy;
                                let fatsInGrams = caloriesFromFats / 9; // Convertir calorías a gramos de grasas (1g de grasa = 9 kcal)

                                let caloriesFromProteins = (proteinsPercentage / 100) * food.energy;
                                let proteinsInGrams = caloriesFromProteins / 4; // Convertir calorías a gramos de proteínas (1g de proteína = 4 kcal)

                                console.log("Carbohidratos en gramos:", carbohydratesInGrams);
                                console.log("Proteínas en gramos:", proteinsInGrams);
                                console.log("Grasas en gramos:", fatsInGrams);

                                
                                let adjustFactor = parseFloat(ingredient.portion) / parseFloat(food.portion);
                                //alert(`${ingredient.name} ${parseFloat(ingredient.portion)} ${parseFloat(food.portion)} ${adjustFactor}`)
                                // Calcular las calorías ajustadas según el factor de ajuste
                                let adjustedCalories = parseFloat(food.energy) * adjustFactor;
                                // Calcular los carbohidratos ajustados según el factor de ajuste
                                let adjustedCarbohydrates = parseFloat(carbohydratesInGrams) * adjustFactor;
                                // Calcular las proteínas ajustadas según el factor de ajuste
                                let adjustedProteins = parseFloat(proteinsInGrams) * adjustFactor;
                                // Calcular las grasas ajustadas según el factor de ajuste
                                let adjustedFats = parseFloat(fatsInGrams) * adjustFactor;
                                // Sumar las calorías ajustadas a totalCalories
                                totalCalories += adjustedCalories;
                                // Sumar los carbohidratos ajustados a totalCarbohydrates
                                totalCarbohydrates += adjustedCarbohydrates;
                                // Sumar las proteínas ajustadas a totalProteins
                                totalProteins += adjustedProteins;
                                // Sumar las grasas ajustadas a totalFats
                                totalFats += adjustedFats;
                            //}
                        }
                    });
                }
            }
        }

        // Actualizar la celda de Total para el día correspondiente con los totales calculados
        let totalCell = rows[rows.length - 2].cells[i];
        //totalCell.textContent = `Calorías: ${totalCalories.toFixed(2)}, Carbohidratos: ${totalCarbohydrates.toFixed(2)}g, Proteínas: ${totalProteins.toFixed(2)}g, Grasas: ${totalFats.toFixed(2)}g`;
        // Calcular el valor de los macronutrientes en kilocalorías
        let macros = (totalCarbohydrates.toFixed(2) * 4) + (totalProteins.toFixed(2) * 4) + (totalFats.toFixed(2) * 9)
        
        // Obtener las calorías requeridas del usuario
        //alert(user.calories);
        let userCalories = user.calories;

        // Establecer el estilo de la celda dependiendo de los valores de calorías requeridas, calorías totales y macronutrientes
        if (userCalories < totalCalories.toFixed(2) && userCalories < macros) {
            totalCell.style.backgroundColor = '#FF3B3B'; //red // Si las calorías requeridas son menores que las calorías totales o los macronutrientes, establecer el fondo rojo
        } else if (userCalories >= totalCalories.toFixed(2) && userCalories <= macros) {
            totalCell.style.backgroundColor = '#48BF3B';  //green // Si las calorías requeridas son mayores o iguales a las calorías totales y los macronutrientes, establecer el fondo verde
        } else {
            totalCell.style.backgroundColor = '#09D6DB'; //blue // Si no se cumple ninguna de las condiciones anteriores, establecer el fondo azul
        }

        // Calcular los porcentajes de cada macronutriente
        let carbPercentage = ((totalCarbohydrates * 4) / macros) * 100;
        let proteinPercentage = ((totalProteins * 4) / macros) * 100;
        let fatPercentage = ((totalFats * 9) / macros) * 100;

        carbPercentage = isNaN(carbPercentage) ? 0 : carbPercentage;
        proteinPercentage = isNaN(proteinPercentage) ? 0 : proteinPercentage;
        fatPercentage = isNaN(fatPercentage) ? 0 : fatPercentage;
                
        // Obtener el mayor número entre las dos variables
        let mayorNumero = totalCalories >= macros ? totalCalories : macros;

        // Obtener el menor número entre las dos variables
        let menorNumero = totalCalories <= macros ? totalCalories : macros;


        totalCell.innerHTML = `
            <span style="font-size: 80%; color: #333;">
                Calorías: <strong>${menorNumero.toFixed(2)} - ${mayorNumero.toFixed(2)}Kcal</strong>,<br> 
                Carbohidratos: <strong>${totalCarbohydrates.toFixed(2)}g (${(totalCarbohydrates * 4).toFixed(2)}Kcal - ${carbPercentage.toFixed(2)}%)</strong>,<br>
                Proteínas: <strong>${totalProteins.toFixed(2)}g (${(totalProteins * 4).toFixed(2)}Kcal - ${proteinPercentage.toFixed(2)}%)</strong>,<br> 
                Grasas: <strong>${totalFats.toFixed(2)}g (${(totalFats * 9).toFixed(2)}Kcal - ${fatPercentage.toFixed(2)}%)</strong>
            </span>
        `;

        let calculatedCalories = (menorNumero+mayorNumero)/2;

        let totalAlgorithmCalories = 0;
        let totalAlgorithmCarbohydrates = 0;
        let totalAlgorithmProteins = 0;
        let totalAlgorithmFats = 0;

        // ALGORITHM
        if(user.calories){
            // Calcula el factor de ajuste necesario para que el total de calorías sea igual a 6666
            let adjustFactor = user.calories / calculatedCalories;
        
            // Array para almacenar los ingredientes ajustados
            let adjustedIngredients = [];
        
            // Iterar sobre cada fila (comida)
            for (let j = 0; j < rows.length - 1; j++) {
                let recipeName = rows[j].cells[i].id;
        
                if (recipeName !== "") {
                    let recipe = recipes.find(recipe => recipe.name === recipeName);
                    if (recipe) {
                        recipe.ingredients.forEach(ingredient => {
                            let food = foods.find(food => food.name === ingredient.name);
                            if (food) {
                                // Multiplica la porción actual por el factor de ajuste
                                let adjustedPortion = parseFloat(ingredient.portion) * adjustFactor;
        
                                // Crea un nuevo objeto de ingrediente con la porción ajustada
                                let adjustedIngredient = {
                                    name: ingredient.name,
                                    portion: adjustedPortion.toString(), // Convierte a string para mantener el formato
                                };
        
                                // Agrega el ingrediente ajustado al array
                                adjustedIngredients.push(adjustedIngredient);
                            }
                        });
                    }
                }
            }
        
            // Calcula los totales usando la lista de ingredientes ajustados
            let adjustedTotals = calculateTotals(adjustedIngredients);
        
            // Actualiza los totales con los valores calculados usando la lista de ingredientes ajustados
            totalAlgorithmCalories = adjustedTotals.totalCalories;
            totalAlgorithmCarbohydrates = adjustedTotals.totalCarbohydrates;
            totalAlgorithmProteins = adjustedTotals.totalProteins;
            totalAlgorithmFats = adjustedTotals.totalFats;
        }
        

        

        // Actualizar la celda de Total para el día correspondiente con los totales calculados
        let algorithmCell = rows[rows.length - 1].cells[i];
        //totalCell.textContent = `Calorías: ${totalCalories.toFixed(2)}, Carbohidratos: ${totalCarbohydrates.toFixed(2)}g, Proteínas: ${totalProteins.toFixed(2)}g, Grasas: ${totalFats.toFixed(2)}g`;
        let algorithmMacros = (totalAlgorithmCarbohydrates.toFixed(2) * 4) + (totalAlgorithmProteins.toFixed(2) * 4) + (totalAlgorithmFats.toFixed(2) * 9)
        algorithmCell.innerHTML = `
            <span style="font-size: 80%; color: #333;">
                Calorías: <strong>${totalAlgorithmCalories.toFixed(2)}</strong>,<br> 
                Carbohidratos: <strong>${totalAlgorithmCarbohydrates.toFixed(2)}g</strong>,<br>
                Proteínas: <strong>${totalAlgorithmProteins.toFixed(2)}g</strong>,<br> 
                Grasas: <strong>${totalAlgorithmFats.toFixed(2)}g</strong>
            </span>                     
        `;
    }
}

// Función para calcular los totales usando una lista de ingredientes
function calculateTotals(ingredients) {
    let totalCalories = 0;
    let totalCarbohydrates = 0;
    let totalProteins = 0;
    let totalFats = 0;

    ingredients.forEach(ingredient => {
        let food = foods.find(food => food.name === ingredient.name);
        if (food) {
            let carbohydratesPercentage = food.carbohydrates;
            let fatsPercentage = food.fats;
            let proteinsPercentage = food.proteins;

            let caloriesFromCarbohydrates = (carbohydratesPercentage / 100) * food.energy;
            let carbohydratesInGrams = caloriesFromCarbohydrates / 4;

            let caloriesFromFats = (fatsPercentage / 100) * food.energy;
            let fatsInGrams = caloriesFromFats / 9;

            let caloriesFromProteins = (proteinsPercentage / 100) * food.energy;
            let proteinsInGrams = caloriesFromProteins / 4;

            let adjustFactor = parseFloat(ingredient.portion) / parseFloat(food.portion);

            let adjustedCalories = parseFloat(food.energy) * adjustFactor;
            let adjustedCarbohydrates = parseFloat(carbohydratesInGrams) * adjustFactor;
            let adjustedProteins = parseFloat(proteinsInGrams) * adjustFactor;
            let adjustedFats = parseFloat(fatsInGrams) * adjustFactor;

            totalCalories += adjustedCalories;
            totalCarbohydrates += adjustedCarbohydrates;
            totalProteins += adjustedProteins;
            totalFats += adjustedFats;
        }
    });

    return {
        totalCalories: totalCalories,
        totalCarbohydrates: totalCarbohydrates,
        totalProteins: totalProteins,
        totalFats: totalFats
    };
}



// //
function sumShoppingLists(list1, list2) {
    // Crear un objeto para realizar un seguimiento de los elementos y sus porciones
    let dict = {};

    // Sumar las porciones de la primera lista al objeto
    for (const item in list1) {
        if (list1.hasOwnProperty(item)) {
            const key = item; // Utilizar el nombre del elemento como clave única
            dict[key] = list1[item].portion; // Agregar la porción al objeto
        }
    }

    // Sumar las porciones de la segunda lista al objeto
    for (const item in list2) {
        if (list2.hasOwnProperty(item)) {
            const key = item; // Utilizar el nombre del elemento como clave única
            if (dict.hasOwnProperty(key)) {
                // Si el elemento ya está en el objeto, sumar la porción
                dict[key] += list2[item].portion;
            } else {
                // Si el elemento no está en el objeto, agregarlo con su porción
                dict[key] = list2[item].portion;
            }
        }
    }

    // Convertir el objeto de nuevo a una lista de elementos
    const result = {};
    for (const key in dict) {
        if (dict.hasOwnProperty(key)) {
            result[key] = { portion: dict[key], unit: list1[key] ? list1[key].unit : list2[key].unit };
        }
    }

    return result;
}

function mainCallBack(response){
    console.log('allAditionalIngredients')
    console.log(response.shopping)
    console.log(allAditionalIngredients)

    mergedShoppingLists = sumShoppingLists(response.shopping, allAditionalIngredients);
    console.log('mergedShoppingLists');
    console.log(mergedShoppingLists)


    fillForm(response.profile);
    fillTable(response.menu);

    document.getElementById('caloriasRequeridas').click();
    generateInstructionsAndIngredients();//!!!!!!

    hideSpinner();
}

function complementCallBack(response){
    complement = response;
    allAditionalIngredients = complement.shopping;

    console.log('allAditionalIngredients PRE')
    console.log(response.shopping)
    console.log(allAditionalIngredients)

    makeRequest(mainUrl, mainCallBack);
}

function handleRadioChange(usr) {

    showSpinner();

    cleanTable();

    mergedShoppingLists = null;
    currentUser = usr;

    let baseUrl = "https://jsonfileapi.onrender.com/";

    mainUrl = baseUrl+usr;
    //let url = "http://127.0.0.1:5000/"+usr;
    complementUrl = usr === 'a' ? baseUrl+'c' : baseUrl +'a';

    makeRequest(complementUrl, complementCallBack);
    // makeRequest(url, mainCallBack);

    // Mostrar los botones cuando se selecciona el segundo o tercer radio button
    document.getElementById('saveBtn').style.visibility = 'visible';
    document.getElementById('copyBtn').style.visibility = 'visible';
    document.getElementById('saveBtn').disabled = true;
    document.getElementById('copyBtn').disabled = true;
    document.getElementById('saveBtn').style.background = 'lightgray';
    document.getElementById('copyBtn').style.background = 'lightgray';

    document.getElementById('acList').style.display = 'block';
    document.getElementById('acAlgorithmList').style.display = 'block';
}

function save() {
    // Lógica para el botón "Guardar"
    console.log('Guardando...');

    showSpinner();

    // Recopilar información del formulario
    var formData = {
        age: document.getElementById('edad').value,
        exercise: document.getElementById('ejercicio').value,
        height: document.getElementById('altura').value,
        objective: document.getElementById('objetivo').value,
        weight: document.getElementById('peso').value,
        sex: document.getElementById('sexo').value
    };

    /*
    let daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    let meals = ["breakfast", "brunch", "lunch", "snack", "dinner"];

    // Recopilar información de la tabla
    var tableData = {};
    var table = document.getElementById('planificacion');
    var rows = table.getElementsByTagName('tr');
    for (var i = 1; i < rows.length - 1; i++) {
        var row = rows[i];
        var cells = row.getElementsByTagName('td');
        var meal = meals[i-1]; // Obtener el nombre de la comida usando el índice
        tableData[meal.toLowerCase()] = {};
        for (var j = 1; j < cells.length; j++) {
            var day = daysOfWeek[j-1]; // Obtener el nombre del día usando el índice
            tableData[meal.toLowerCase()][day] = cells[j].innerText;
        }
    }
    */
    let daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    let meals = ["breakfast", "brunch", "lunch", "snack", "dinner"];

    // Recopilar información de la tabla
    let tableData = {};
    let table = document.getElementById('planificacion');
    let rows = table.getElementsByTagName('tr');
    for (let j = 1; j < rows[0].cells.length; j++) {
        let day = daysOfWeek[j-1]; // Obtener el nombre del día usando el índice
        tableData[day.toLowerCase()] = {};
        //-2 because the last two are total and algorithm
        for (let i = 1; i < rows.length - 2; i++) {
            let row = rows[i];
            let cells = row.getElementsByTagName('td');
            let meal = meals[i-1]; // Obtener el nombre de la comida usando el índice
            //alert(meal)
            tableData[day.toLowerCase()][meal.toLowerCase()] = cells[j].id//cells[j].innerText;
        }
    }
    //console.log(user.allIngredients)
    //alert(user.allIngredients)


    // Construir el objeto JSON
    var jsonData = {
        menu: tableData,
        profile: formData,
        shopping: user.allIngredients
    };

    console.log(jsonData)

    // Enviar la solicitud HTTP POST
    fetch(`https://jsonfileapi.onrender.com/${currentUser}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data saved successfully:', data);
        // Hacer algo con la respuesta si es necesario


        document.getElementById('copyBtn').disabled = false;
        document.getElementById('copyBtn').style.background = '#FF9CCA';

        //alert("Guardado!")

        hideSpinner();
    })
    .catch(error => {
        console.error('Error saving data:', error);
    });

    document.getElementById('saveBtn').disabled = true;
    document.getElementById('saveBtn').style.background = 'lightgray';
}

function copy() {
    // Lógica para el botón "Copiar"
    console.log('Copiando...');

    showSpinner();

    let daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    let meals = ["breakfast", "brunch", "lunch", "snack", "dinner"];

    // Recopilar información de la tabla
    let tableData = {};
    let table = document.getElementById('planificacion');
    let rows = table.getElementsByTagName('tr');
    for (let j = 1; j < rows[0].cells.length; j++) {
        let day = daysOfWeek[j-1]; // Obtener el nombre del día usando el índice
        tableData[day.toLowerCase()] = {};
        //-2 because the last two are total and algorithm
        for (let i = 1; i < rows.length - 2; i++) {
            let row = rows[i];
            let cells = row.getElementsByTagName('td');
            let meal = meals[i-1]; // Obtener el nombre de la comida usando el índice
            //alert(meal)
            tableData[day.toLowerCase()][meal.toLowerCase()] = cells[j].id//cells[j].innerText;
        }
    }
    
    // Construir el objeto JSON
    var jsonData = {
        menu: tableData,
        profile: complement.profile,
        shopping: user.allIngredients
    };

    console.log(jsonData)

    // Enviar la solicitud HTTP POST
    fetch(complementUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data copied successfully:', data);
        // Hacer algo con la respuesta si es necesario
        console.log("Copiado!")

        if(currentUser === 'a' ){
            document.getElementById('radio2').click();

        } else {
            document.getElementById('radio3').click();
        }

        hideSpinner();
    })
    .catch(error => {
        console.error('Error saving data:', error);
    });
    
    //document.getElementById('saveBtn').disabled = true;
    document.getElementById('copyBtn').disabled = true;
    //document.getElementById('saveBtn').style.background = 'lightgray';
    document.getElementById('copyBtn').style.background = 'lightgray';
}

function makeRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);

            callback(response); // Llama al callback con la respuesta como argumento
        }
    };
    xhr.send();
}

function fillForm(profile) {
    document.getElementById('edad').value = profile.age;
    document.getElementById('altura').value = profile.height;
    document.getElementById('peso').value = profile.weight;
    document.getElementById('sexo').value = profile.sex;
    document.getElementById('ejercicio').value = profile.exercise;
    document.getElementById('objetivo').value = profile.objective;

    calcularCalorias();
}

function clearAll() {
    allAditionalIngredients = null;

    document.getElementById('edad').value = "30";
    document.getElementById('altura').value = "150";
    document.getElementById('peso').value = "50";
    document.getElementById('sexo').value = "mujer";
    document.getElementById('ejercicio').value = "sedentario";
    document.getElementById('objetivo').value = "mantener";
    //document.getElementById('resultado').innerText = "Calcular";
    document.getElementById("caloriasRequeridas").textContent = "Calcular";

    // Lógica para limpiar el formulario
    console.log('Formulario limpiado.');
    // Ocultar los botones cuando se selecciona el primer radio button
    //document.getElementById('button-container').style.display = 'none';
    document.getElementById('saveBtn').style.visibility = 'hidden';
    document.getElementById('copyBtn').style.visibility = 'hidden';

    document.getElementById('acList').style.display = 'none';
    document.getElementById('acAlgorithmList').style.display = 'none';

    cleanTable();

    document.getElementById('calculoRequerimiento').submit();//submit
}

function cleanTable(){
    // Limpiar tabla
    let daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    let table = document.getElementById("planificacion").getElementsByTagName("tbody")[0];
    let meals = ["breakfast", "brunch", "lunch", "snack", "dinner"];

    for (var i = 0; i < meals.length; i++) {
        var meal = meals[i];
        var row = table.rows[i];
        var cells = row.cells;
        //cells[0].textContent = meal.charAt(0).toUpperCase() + meal.slice(1); // Capitalize the meal name
        for (var j = 0; j < daysOfWeek.length; j++) {
            var day = daysOfWeek[j];
            cells[j + 1].textContent = "";
            cells[j + 1].id = "";
        }
    }
}

function fillTable(menu) {
    let daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    let table = document.getElementById("planificacion").getElementsByTagName("tbody")[0];
    let meals = ["breakfast", "brunch", "lunch", "snack", "dinner"];

    for (var i = 0; i < meals.length; i++) {
        var meal = meals[i];
        //var row = table.rows[i];
        var row = table.rows[i];//+1 // Start from the second row (index 1) to skip the header row

        var cells = row.cells;
        //cells[0].textContent = meal.charAt(0).toUpperCase() + meal.slice(1); // Capitalize the meal name
        for (var j = 0; j < daysOfWeek.length; j++) {
            var day = daysOfWeek[j];
            //cells[j + 1].textContent = menu[day][meal];
            //

            let cell = cells[j + 1];// // Start from the second cell (index 1) to skip the meal name cell
            let recipeName = menu[day][meal];

            cell.textContent = recipeName;

            //alert(`${day}  ${meal} ${recipeName}`)
            if (recipeName) {
                let recipe = recipes.find(recipe => recipe.name === recipeName);
                if (recipe) {
                    // Mostrar el nombre de la receta en la celda
                    cell.innerHTML = `<strong>${recipe.name}</strong><br><br>`;

                    // Crear una lista no ordenada para los ingredientes
                    const ingredientsList = document.createElement('ul');
                    ingredientsList.style.fontSize = '50%'; // Establecer el tamaño de fuente al 50% del tamaño del nombre de la receta
                    ingredientsList.style.marginBottom = '5px'; // Establecer el margen inferior para una separación vertical más pequeña

                    // Agregar cada ingrediente a la lista original
                    recipe.ingredients.forEach(ingredient => {
                        const listItem = document.createElement('li');
                        listItem.style.marginBottom = '0px'; 
                        listItem.textContent = `${ingredient.portion.toFixed(2)} ${ingredient.unit} de ${ingredient.name}`;
                        ingredientsList.appendChild(listItem);
                    });

                    // Agregar la lista original de ingredientes debajo del nombre de la receta
                    cell.appendChild(ingredientsList);

                    // Agregar un salto de línea entre las dos listas
                    cell.appendChild(document.createElement('br'));

                    // Crear una segunda lista de ingredientes
                    const secondIngredientsList = document.createElement('ul');
                    secondIngredientsList.style.fontSize = '50%'; // Establecer el tamaño de fuente al 50% del tamaño del nombre de la receta
                    secondIngredientsList.style.marginBottom = '5px'; // Establecer el margen inferior para una separación vertical más pequeña

                    // Agregar cada ingrediente a la segunda lista
                    recipe.ingredients.forEach(ingredient => {
                        const listItem = document.createElement('li');
                        listItem.style.marginBottom = '0px'; 
                        listItem.textContent = `${ingredient.portion.toFixed(2)} ${ingredient.unit} de ${ingredient.name}`;
                        secondIngredientsList.appendChild(listItem);
                    });

                    // Agregar la segunda lista de ingredientes debajo de la lista original
                    cell.appendChild(secondIngredientsList);

                    // Al hacer clic en una receta, mostrarla en la celda correspondiente
                    cell.id = recipe.name;
                }
            }
            /**/
        }
    }
}

// //
function calcularCalorias() {

    var edad = parseInt(document.getElementById('edad').value);
    var sexo = document.getElementById('sexo').value;
    var peso = parseInt(document.getElementById('peso').value);
    var altura = parseInt(document.getElementById('altura').value);
    var ejercicio = document.getElementById('ejercicio').value;
    var objetivo = document.getElementById('objetivo').value;

    var tmb;
    if (sexo === 'hombre') {
        tmb = (10 * peso) + (6.25 * altura) - (5 * edad) + 5;
    } else {
        tmb = (10 * peso) + (6.25 * altura) - (5 * edad) - 161;
    }

    var factorEjercicio;
    switch (ejercicio) {
        case 'sedentario':
            factorEjercicio = 1.2;
            break;
        case 'ligero':
            factorEjercicio = 1.375;
            break;
        case 'moderado':
            factorEjercicio = 1.55;
            break;
        case 'fuerte':
            factorEjercicio = 1.725;
            break;
        case 'profesional':
            factorEjercicio = 1.9;
            break;
    }

    var totalCalorias = tmb * factorEjercicio;

    if (objetivo === 'bajar') {
        totalCalorias *= 0.85;
    } else if (objetivo === 'aumentar') {
        totalCalorias *= 1.15;
    }

    //console.log(totalCalorias.toFixed(2))
    //alert(totalCalorias.toFixed(2))
    //document.getElementById('resultado').innerText = 'Calorías diarias necesarias: ' + totalCalorias.toFixed(2);
    document.getElementById("caloriasRequeridas").textContent = `${totalCalorias.toFixed(2)} Kcal`;
    
    // Example instantiation:
    user = new User(edad, sexo, peso, altura, ejercicio, objetivo, totalCalorias.toFixed(2));

    //document.getElementById("planificacion").enable = false;
    document.getElementById('planificacion').classList.remove('disabled');

    updateTotals();
}

//
//


// Función para mostrar las recetas en la lista
function displayRecipes(recipes) {
    recipeList.innerHTML = ''; // Limpiar la lista de recetas

    // Agregar cada receta filtrada a la lista
    recipes.forEach(recipe => {
        const listItem = document.createElement('li');
        listItem.textContent = recipe.name;
        listItem.addEventListener('click', function() {
            // Lógica para mostrar la receta seleccionada
            showRecipeInCell(currentCell, recipe);

            closeModal();
            
            generateInstructionsAndIngredients();//!!!!!!
            updateTotals();
        });
        recipeList.appendChild(listItem);
    });
}


function showRecipeModal(cell, rowCategory) {
    currentCell = cell;
    const modal = document.getElementById('modal');

    // Limpiar la lista de recetas
    recipeList.innerHTML = '';

    // Filtrar las recetas por categoría
    categorySelect.value = rowCategory;
    const category = categorySelect.value;
    const filteredRecipes = category === 'All' ? recipes : recipes.filter(recipe => recipe.category === category);

    // Filtrar las recetas por nombre
    const searchQuery = searchInput.value.toLowerCase().trim();
    const searchedRecipes = searchQuery ? filteredRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchQuery)) : filteredRecipes;

    // Agregar cada receta a la lista
    // searchedRecipes.forEach(recipe => {
    //     const listItem = document.createElement('li');
    //     listItem.textContent = recipe.name;
    //     listItem.addEventListener('click', function() {
    //         // Mostrar la receta seleccionada en la celda
    //         showRecipeInCell(cell, recipe);

    //         closeModal();
            
    //         generateInstructionsAndIngredients();//!!!!!!
    //         updateTotals();
    //     });
    //     recipeList.appendChild(listItem);
    // });
    // Mostrar todas las recetas al cargar la ventana modal
    displayRecipes(searchedRecipes);

    // Mostrar la ventana modal
    modal.style.display = 'block';
}

// Función para mostrar la receta seleccionada en la celda
function showRecipeInCell(cell, recipe) {
    // Limpiar la celda
    cell.innerHTML = '';

    // Mostrar el nombre de la receta en la celda
    cell.innerHTML = `<strong>${recipe.name}</strong><br><br>`;

    // Crear una lista no ordenada para los ingredientes
    const ingredientsList = document.createElement('ul');
    ingredientsList.style.fontSize = '50%'; // Establecer el tamaño de fuente al 50% del tamaño del nombre de la receta
    ingredientsList.style.marginBottom = '5px'; // Establecer el margen inferior para una separación vertical más pequeña

    // Agregar cada ingrediente a la lista original
    recipe.ingredients.forEach(ingredient => {
        const listItem = document.createElement('li');
        listItem.style.marginBottom = '0px';
        listItem.textContent = `${ingredient.portion.toFixed(2)} ${ingredient.unit} de ${ingredient.name}`;
        ingredientsList.appendChild(listItem);
    });

    // Agregar la lista original de ingredientes debajo del nombre de la receta
    cell.appendChild(ingredientsList);

    // Agregar un salto de línea entre las dos listas
    cell.appendChild(document.createElement('br'));

    // Crear una segunda lista de ingredientes
    const secondIngredientsList = document.createElement('ul');
    secondIngredientsList.style.fontSize = '50%'; // Establecer el tamaño de fuente al 50% del tamaño del nombre de la receta
    secondIngredientsList.style.marginBottom = '5px'; // Establecer el margen inferior para una separación vertical más pequeña

    // Agregar cada ingrediente a la segunda lista
    recipe.ingredients.forEach(ingredient => {
        const listItem = document.createElement('li');
        listItem.style.marginBottom = '0px';
        listItem.textContent = `${ingredient.portion.toFixed(2)} ${ingredient.unit} de ${ingredient.name}`;
        secondIngredientsList.appendChild(listItem);
    });

    // Agregar la segunda lista de ingredientes debajo de la lista original
    cell.appendChild(secondIngredientsList);

    // Al hacer clic en una receta, mostrarla en la celda correspondiente
    cell.id = recipe.name;

    // Habilitar el botón de guardar
    document.getElementById('saveBtn').disabled = false;
    document.getElementById('saveBtn').style.background = '#FF9CCA';

    // Cerrar la ventana modal
    //closeModal();
}

// Función para cerrar la ventana modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Función para limpiar la celda de la tabla
function clearTableCell() {
    currentCell.innerHTML = '';
    currentCell.id = '';
    closeModal();

    document.getElementById('saveBtn').disabled = false;
    document.getElementById('copyBtn').disabled = true;
    document.getElementById('saveBtn').style.background = '#FF9CCA';
    document.getElementById('copyBtn').style.background = 'lightgray';
    
    generateInstructionsAndIngredients();//!!!!!!
    //calcularCalorias();//updatesTotals
    updateTotals();
}

/*
// Función para mostrar la ventana modal con la lista de recetas
function showRecipeModal(cell) {
    // Obtener el valor de la celda
    //var cellValue = cell.textContent.trim();

    // Actualizar el contenido de la ventana modal con el valor de la celda
    // var modalContent = modal.querySelector('.modal-content');
    // modalContent.innerHTML = '<span class="close" onclick="closeModal()">&times;</span><p>Contenido de la celda: ' + cellValue + '</p>';

    const modal = document.getElementById('modal');
    const recipeList = document.getElementById('recipe-list');

    // Limpiar la lista de recetas
    recipeList.innerHTML = '';

    // Agregar cada receta a la lista
    recipes.forEach(recipe => {
        const listItem = document.createElement('li');
        listItem.textContent = recipe.name;
        listItem.addEventListener('click', function() {
            
            // // Mostrar el nombre de la receta en la celda
            // cell.innerHTML = `<strong>${recipe.name}</strong><br><br>`;

            // // Mostrar los ingredientes debajo del nombre de la receta
            // // recipe.ingredients.forEach(ingredient => {
            // //     cell.innerHTML += `${ingredient.portion} ${ingredient.unit} de ${ingredient.name}<br>`;
            // // });
            
            // // Crear una lista no ordenada para los ingredientes
            // const ingredientsList = document.createElement('ul');
            // ingredientsList.style.fontSize = '50%'; // Establecer el tamaño de fuente al 50% del tamaño del nombre de la receta

            // // Agregar cada ingrediente a la lista
            // recipe.ingredients.forEach(ingredient => {
            //     const listItem = document.createElement('li');
            //     listItem.textContent = `${ingredient.portion} ${ingredient.unit} de ${ingredient.name}`;
            //     ingredientsList.appendChild(listItem);
            // });

            // // Agregar la lista de ingredientes debajo del nombre de la receta
            // cell.appendChild(ingredientsList);
            // Mostrar el nombre de la receta en la celda
            cell.innerHTML = `<strong>${recipe.name}</strong><br><br>`;

            // Crear una lista no ordenada para los ingredientes
            const ingredientsList = document.createElement('ul');
            ingredientsList.style.fontSize = '50%'; // Establecer el tamaño de fuente al 50% del tamaño del nombre de la receta
            ingredientsList.style.marginBottom = '5px'; // Establecer el margen inferior para una separación vertical más pequeña

            // Agregar cada ingrediente a la lista original
            recipe.ingredients.forEach(ingredient => {
                const listItem = document.createElement('li');
                listItem.style.marginBottom = '0px'; 
                listItem.textContent = `${ingredient.portion.toFixed(2)} ${ingredient.unit} de ${ingredient.name}`;
                ingredientsList.appendChild(listItem);
            });

            // Agregar la lista original de ingredientes debajo del nombre de la receta
            cell.appendChild(ingredientsList);

            // Agregar un salto de línea entre las dos listas
            cell.appendChild(document.createElement('br'));

            // Crear una segunda lista de ingredientes
            const secondIngredientsList = document.createElement('ul');
            secondIngredientsList.style.fontSize = '50%'; // Establecer el tamaño de fuente al 50% del tamaño del nombre de la receta
            secondIngredientsList.style.marginBottom = '5px'; // Establecer el margen inferior para una separación vertical más pequeña

            // Agregar cada ingrediente a la segunda lista
            recipe.ingredients.forEach(ingredient => {
                const listItem = document.createElement('li');
                listItem.style.marginBottom = '0px'; 
                listItem.textContent = `${ingredient.portion.toFixed(2)} ${ingredient.unit} de ${ingredient.name}`;
                secondIngredientsList.appendChild(listItem);
            });

            // Agregar la segunda lista de ingredientes debajo de la lista original
            cell.appendChild(secondIngredientsList);


            // Al hacer clic en una receta, mostrarla en la celda correspondiente
            cell.id = recipe.name;

            document.getElementById('saveBtn').disabled = false;
            //document.getElementById('copyBtn').disabled = false;
            document.getElementById('saveBtn').style.background = '#FF9CCA';
            //document.getElementById('copyBtn').style.background = '#FF9CCA';

            //cell.textContent = recipe.name;
            closeModal();
            generateInstructionsAndIngredients();//!!!!!!
            updateTotals();
        });
        recipeList.appendChild(listItem);
    });

    // Mostrar la ventana modal
    modal.style.display = 'block';
}*/

// Función para cerrar la ventana modal
// function closeModal() {
//     var modal = document.getElementById("modal");
//     modal.style.display = "none";
// }



//
//

function generateInstructionsAndIngredients() {
    let allInstructions = []; // Lista de instrucciones única
    let allIngredients = {}; // Objeto para almacenar ingredientes

    // Recorrer la tabla de planificación
    let table = document.getElementById("planificacion").getElementsByTagName("tbody")[0];
    let rows = table.getElementsByTagName("tr");
    for (let i = 0; i < rows.length - 1; i++) { // Ignorar la última fila (Total)
        let cells = rows[i].getElementsByTagName("td");
        for (let j = 1; j < cells.length; j++) {
            //let recipeName = cells[j].textContent.trim();
            //let recipeName = cells[j].querySelector('strong').textContent.trim();
            let recipeName = cells[j].id
            //(recipeName)
            if (recipeName !== "") { // Verificar si hay una receta
                // Buscar la receta en la lista de recetas
                let recipe = recipes.find(recipe => recipe.name === recipeName);
                if (recipe) {
                    // Agregar instrucciones de la receta a la lista de instrucciones únicas
                    if (recipe.preparation && !allInstructions.includes(`${recipe.name}: ${recipe.preparation}`)) {
                        allInstructions.push(`${recipe.name}: ${recipe.preparation}`);
                    }
                    // Sumar los ingredientes de la receta
                    recipe.ingredients.forEach(ingredient => {
                        let key = ingredient.name.toLowerCase(); // Convertir el nombre del ingrediente a minúsculas
                        if (key in allIngredients) {
                            allIngredients[key].portion += ingredient.portion;
                        } else {
                            allIngredients[key] = { portion: ingredient.portion, unit: ingredient.unit };
                        }
                    });
                }
            }
        }
    }

    //console.log(user.allIngredients)
    user.allIngredients = allIngredients;
    console.log('allAditionalIngredients?')
    console.log(allAditionalIngredients)
    if(allAditionalIngredients){
        mergedShoppingLists = sumShoppingLists(allAditionalIngredients, user.allIngredients)
    }
    //alert(user.allIngredients)

    // Mostrar las instrucciones en la lista de instrucciones
    let listaInstrucciones = document.getElementById("listaInstrucciones");
    listaInstrucciones.innerHTML = "";
    //listaInstrucciones.innerHTML = "<h2>Lista de Instrucciones</h2>";
    allInstructions.forEach(instruction => {
        let li = document.createElement("li");
        //li.textContent = instruction;
        // Dividir el string en dos partes usando el símbolo dos puntos como separador
        const parts = instruction.split(':');

        // Verificar si se encontró el símbolo dos puntos y si se dividió en dos partes
        if (parts.length === 2) {
            // Crear un elemento de texto para la primera parte (en negritas)
            const text1 = document.createElement('strong');
            text1.textContent = parts[0].trim() + ':';

            // Crear un elemento de texto para la segunda parte
            const text2 = document.createTextNode(parts[1].trim());

            // Crear un elemento span para envolver los dos textos
            const span = document.createElement('span');

            // Agregar los textos al span
            span.appendChild(text1);
            span.appendChild(document.createTextNode(' ')); // Agregar un espacio entre los textos
            span.appendChild(text2);

            // Agregar el span al elemento de lista
            li.appendChild(span);
        } else {
            // Si no se encontró el símbolo dos puntos, agregar el texto como está
            li.textContent = instruction;
        }
        //
        listaInstrucciones.appendChild(li);
    });

    // Mostrar los ingredientes en la lista de compras
    let listaCompras = document.getElementById("listaCompras");
    listaCompras.innerHTML = "";

    //listaCompras.innerHTML = "<h2>Lista de Compras</h2>";
    for (let ingredient in allIngredients) {
        let li = document.createElement("li");
        li.textContent = `${allIngredients[ingredient].portion.toFixed(2)} ${allIngredients[ingredient].unit} de ${ingredient}`;
        listaCompras.appendChild(li);
    }

    console.log('mergedShoppingLists')
    console.log(mergedShoppingLists)
    // Mostrar los ingredientes en la lista de compras
    
    let listaCompras3 = document.getElementById("listaCompras3");
    if(document.getElementById('acList').style.display === 'block'){
        listaCompras3.innerHTML = "";
        //listaCompras.innerHTML = "<h2>Lista de Compras</h2>";
        for (let ingredient in mergedShoppingLists) {
            let li = document.createElement("li");
            li.textContent = `${mergedShoppingLists[ingredient].portion.toFixed(2)} ${mergedShoppingLists[ingredient].unit} de ${ingredient}`;
            listaCompras3.appendChild(li);
        }
    }

}